import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Download, Calendar, Clock, User, Youtube } from 'lucide-react';
import { fetchYouTubeVideos, getVideoUrl, getEmbedUrl } from '@/lib/youtube';

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnailUrl: string;
  channelTitle: string;
  duration: string;
  isEmbeddable: boolean;
}

const Sermons = () => {
  const [sermons, setSermons] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadSermons() {
      try {
        const videos = await fetchYouTubeVideos();
        setSermons(videos);
      } catch (err) {
        setError('Failed to load sermons. Please try again later.');
        console.error('Error loading sermons:', err);
      } finally {
        setLoading(false);
      }
    }

    loadSermons();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Sermons & Messages</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Watch and listen to our latest messages, and grow in your faith through Biblical teaching and inspiration.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading sermons...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
          </div>
        ) : (
          <div className="space-y-8">
            {sermons.map((sermon) => (
              <Card key={sermon.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative aspect-video">
                    <Card className="overflow-hidden">
                      <div className="aspect-video w-full">
                        {sermon.isEmbeddable ? (
                          <iframe
                            src={getEmbedUrl(sermon.id)}
                            title={sermon.title}
                            className="h-full w-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                          />
                        ) : (
                          <div className="relative h-full w-full bg-gray-100">
                            <img
                              src={sermon.thumbnailUrl || `https://img.youtube.com/vi/${sermon.id}/hqdefault.jpg`}
                              alt={sermon.title}
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                // Fallback to a default thumbnail if the image fails to load
                                const target = e.target as HTMLImageElement;
                                target.src = `https://img.youtube.com/vi/${sermon.id}/hqdefault.jpg`;
                                target.onerror = () => {
                                  // If the fallback also fails, show a placeholder
                                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4MCIgaGVpZ2h0PSI3MjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyODAiIGhlaWdodD0iNzIwIiBmaWxsPSIjZjFmMWYxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGR5PSIuM2VtIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q2Fubm90IGxvYWQgdmlkZW8gdGh1bWJuYWlsPC90ZXh0Pjwvc3ZnPg==';
                                };
                              }}
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-4 text-center text-white">
                              <p className="mb-4">This video can only be watched on YouTube</p>
                              <a
                                href={getVideoUrl(sermon.id)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                              >
                                <Youtube className="h-4 w-4" />
                                Watch on YouTube
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </Card>
                  </div>
                  
                  <CardContent className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{sermon.title}</h3>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span>{sermon.publishedAt}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <User className="h-5 w-5 text-primary" />
                          <span>{sermon.channelTitle}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-5 w-5 text-primary" />
                          <span>{sermon.duration}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">{sermon.description}</p>
                    </div>
                    
                    <div className="flex gap-4">
                      <a 
                        href={getVideoUrl(sermon.id)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none"
                      >
                        <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                          Watch on YouTube
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Sermons;
