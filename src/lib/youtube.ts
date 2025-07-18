// YouTube API Types
export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnailUrl: string;
  channelTitle: string;
  duration: string;
  isEmbeddable: boolean;
}

// Format duration from ISO 8601 to readable format
function formatDuration(duration: string): string {
  if (!duration) return '00:00';
  
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return '00:00';
  
  const hours = match[1] ? match[1].padStart(2, '0') : '00';
  const minutes = match[2] ? match[2].padStart(2, '0') : '00';
  const seconds = match[3] ? match[3].padStart(2, '0') : '00';
  
  if (hours !== '00') {
    return `${hours}:${minutes}:${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

// Get the best available thumbnail URL with cache-busting
function getThumbnailUrl(thumbnails: any): string {
  if (!thumbnails) {
    console.warn('No thumbnails object provided');
    return '';
  }
  
  // Try to get the highest quality thumbnail available
  const thumbnail = thumbnails.maxres?.url || thumbnails.high?.url || thumbnails.medium?.url || thumbnails.default?.url;
  
  if (!thumbnail) {
    console.warn('No thumbnail URL found in response');
    return '';
  }
  
  // Add a cache-busting parameter to prevent browser caching
  const timestamp = new Date().getTime();
  return `${thumbnail}?t=${timestamp}`;
}

// Secure function to get environment variables
function getEnvVar(key: string): string {
  const value = import.meta.env[key];
  if (!value) {
    console.error(`Environment variable ${key} is missing`);
    throw new Error(`Configuration error: ${key} is not set`);
  }
  return value;
}

// Create a secure API endpoint URL with parameters
function createSecureApiUrl(endpoint: string, params: Record<string, string>): string {
  // Use a proxy endpoint to hide API key
  // Use Vite's MODE to decide whether we are running locally or on the deployed (static) site
  const baseUrl = import.meta.env.MODE === 'development'
    ? '/youtube'                       // Local dev – forwarded by Vite proxy (vite.config.ts)
    : 'https://www.googleapis.com/youtube/v3'; // Production – call Google APIs directly
  const queryParams = new URLSearchParams(params);
  return `${baseUrl}/${endpoint}?${queryParams.toString()}`;
}

export async function fetchYouTubeVideos(maxResults: number = 10): Promise<YouTubeVideo[]> {
  try {
    // Get environment variables securely
    const YOUTUBE_CHANNEL_ID = getEnvVar('VITE_YOUTUBE_CHANNEL_ID');
    const YOUTUBE_API_KEY = getEnvVar('VITE_YOUTUBE_API_KEY');
    const PLAYLIST_ID = import.meta.env.VITE_YOUTUBE_PLAYLIST_ID;

    console.log('Starting YouTube API requests with:', {
      channelId: '***', // Mask the actual ID in logs
      maxResults
    });

    // Get channel uploads playlist ID if not provided
    let playlistId = PLAYLIST_ID;
    if (!playlistId) {
      const channelParams = {
        part: 'contentDetails',
        id: YOUTUBE_CHANNEL_ID,
        key: YOUTUBE_API_KEY
      };
      
      const channelUrl = createSecureApiUrl('channels', channelParams);
      console.log('Fetching channel details...');
      
      const channelResponse = await fetch(channelUrl);
      if (!channelResponse.ok) {
        const error = await channelResponse.text();
        console.error('Channel API error:', error);
        throw new Error(`Channel API error: ${error}`);
      }
      
      const channelData = await channelResponse.json();
      console.log('Channel response received');
      
      if (!channelData?.items?.[0]?.contentDetails?.relatedPlaylists?.uploads) {
        throw new Error('Could not find uploads playlist for channel');
      }
      
      playlistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;
      console.log('Retrieved uploads playlist ID');
    }

    // Fetch videos from playlist
    const playlistParams = {
      part: 'snippet',
      playlistId: playlistId,
      maxResults: maxResults.toString(),
      key: YOUTUBE_API_KEY
    };
    
    const playlistUrl = createSecureApiUrl('playlistItems', playlistParams);
    console.log('Fetching playlist items...');
    
    const playlistResponse = await fetch(playlistUrl);
    if (!playlistResponse.ok) {
      const error = await playlistResponse.text();
      console.error('Playlist API error:', error);
      throw new Error(`Playlist API error: ${error}`);
    }
    
    const playlistData = await playlistResponse.json();
    console.log('Playlist response received');

    if (!playlistData?.items?.length) {
      console.warn('No videos found in playlist');
      return [];
    }

    // Get video IDs
    const videoIds = playlistData.items
      .filter(item => item.snippet?.resourceId?.videoId)
      .map(item => item.snippet.resourceId.videoId);
    
    if (!videoIds.length) {
      console.warn('No valid video IDs found');
      return [];
    }

    console.log(`Found ${videoIds.length} video IDs`);

    // Fetch video details
    const videosParams = {
      part: 'snippet,contentDetails',
      id: videoIds.join(','),
      key: YOUTUBE_API_KEY
    };
    
    const videosUrl = createSecureApiUrl('videos', videosParams);
    console.log('Fetching video details...');
    
    const videosResponse = await fetch(videosUrl);
    if (!videosResponse.ok) {
      const error = await videosResponse.text();
      console.error('Videos API error:', error);
      throw new Error(`Videos API error: ${error}`);
    }
    
    const videosData = await videosResponse.json();
    console.log('Videos response received');

    if (!videosData?.items?.length) {
      console.warn('No video details found');
      return [];
    }

    // Map to YouTubeVideo interface
    const videos = videosData.items.map(item => {
      // Log the thumbnails object to debug
      console.log(`Processing thumbnails for video ${item.id}:`, item.snippet.thumbnails);
      
      // Get thumbnail URL with fallback
      let thumbnailUrl = getThumbnailUrl(item.snippet.thumbnails);
      
      // If no thumbnail URL was found, use a direct YouTube thumbnail URL as fallback
      if (!thumbnailUrl) {
        thumbnailUrl = `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`;
        console.log(`Using fallback thumbnail for video ${item.id}: ${thumbnailUrl}`);
      }
      
      return {
        id: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt,
        thumbnailUrl: thumbnailUrl,
        duration: formatDuration(item.contentDetails?.duration || ''),
        channelTitle: item.snippet.channelTitle || 'Grace Church',
        isEmbeddable: true
      };
    });

    console.log(`Successfully processed ${videos.length} videos`);
    return videos;
  } catch (error: any) {
    console.error('Error in fetchYouTubeVideos:', error);
    throw new Error(`Failed to fetch YouTube videos: ${error.message || 'Unknown error'}`);
  }
}

export function getVideoUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export function getEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`;
} 