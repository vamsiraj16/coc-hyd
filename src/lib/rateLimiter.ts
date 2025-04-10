interface RateLimitConfig {
  maxRequests: number;
  timeWindow: number; // in milliseconds
}

class RateLimiter {
  private requests: number[] = [];
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = config;
  }

  async checkLimit(): Promise<boolean> {
    const now = Date.now();
    // Remove requests older than the time window
    this.requests = this.requests.filter(time => now - time < this.config.timeWindow);
    
    if (this.requests.length >= this.config.maxRequests) {
      return false;
    }
    
    this.requests.push(now);
    return true;
  }

  getRemainingRequests(): number {
    const now = Date.now();
    this.requests = this.requests.filter(time => now - time < this.config.timeWindow);
    return Math.max(0, this.config.maxRequests - this.requests.length);
  }

  getTimeUntilReset(): number {
    if (this.requests.length === 0) return 0;
    const oldestRequest = Math.min(...this.requests);
    return Math.max(0, oldestRequest + this.config.timeWindow - Date.now());
  }
}

// Create a rate limiter instance with 100 requests per minute
export const apiRateLimiter = new RateLimiter({
  maxRequests: 100,
  timeWindow: 60 * 1000 // 1 minute
}); 