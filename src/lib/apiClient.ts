import { apiRateLimiter } from './rateLimiter';

interface ApiResponse<T> {
  data: T;
  error?: string;
}

interface ApiError {
  message: string;
  code: number;
  details?: any;
}

class ApiClient {
  private baseUrl: string;
  private apiKey: string;
  private maxRetries: number;
  private retryDelay: number;

  constructor(baseUrl: string, apiKey: string, maxRetries = 3, retryDelay = 1000) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
    this.maxRetries = maxRetries;
    this.retryDelay = retryDelay;
  }

  private async delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get('content-type');
    if (!response.ok) {
      let errorMessage = 'API request failed';
      try {
        if (contentType?.includes('application/json')) {
          const error = await response.json();
          errorMessage = error.error?.message || error.message || errorMessage;
        } else {
          errorMessage = await response.text();
        }
      } catch (e) {
        console.error('Error parsing error response:', e);
      }
      throw new Error(errorMessage);
    }

    try {
      if (contentType?.includes('application/json')) {
        return await response.json();
      }
      return await response.text() as T;
    } catch (e) {
      console.error('Error parsing response:', e);
      throw new Error('Failed to parse API response');
    }
  }

  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {},
    retryCount = 0
  ): Promise<T> {
    try {
      // Check rate limit
      const canProceed = await apiRateLimiter.checkLimit();
      if (!canProceed) {
        const timeUntilReset = apiRateLimiter.getTimeUntilReset();
        throw new Error(`Rate limit exceeded. Please try again in ${Math.ceil(timeUntilReset / 1000)} seconds.`);
      }

      // Add API key to URL
      const url = new URL(endpoint, this.baseUrl);
      url.searchParams.append('key', this.apiKey);

      console.log('Making API request to:', url.toString());

      const response = await fetch(url.toString(), {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      return await this.handleResponse<T>(response);
    } catch (error: any) {
      console.error('API request failed:', error);

      // Handle rate limiting
      if (error.message.includes('Rate limit exceeded')) {
        throw error;
      }

      // Retry logic
      if (retryCount < this.maxRetries) {
        console.log(`Retrying request (${retryCount + 1}/${this.maxRetries})...`);
        await this.delay(this.retryDelay * Math.pow(2, retryCount));
        return this.makeRequest<T>(endpoint, options, retryCount + 1);
      }

      throw new Error(error.message || 'API request failed');
    }
  }

  async get<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
    const url = new URL(endpoint, this.baseUrl);
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    return this.makeRequest<T>(url.toString(), {
      method: 'GET',
    });
  }
}

// Create YouTube API client instance
export const youtubeApiClient = new ApiClient(
  'https://www.googleapis.com/youtube/v3',
  import.meta.env.VITE_YOUTUBE_API_KEY
); 