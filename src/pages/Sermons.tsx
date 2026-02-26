import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User, Youtube } from 'lucide-react';
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
        const videos = await fetchYouTubeVideos(50);
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

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('en-IN', {
        year: 'numeric', month: 'short', day: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Sermons & Messages</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
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
            <p className="text-red-600 mb-6">{error}</p>
            <a
              href="https://www.youtube.com/@ChurchofChristNarayanaguda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90">
                <Youtube className="h-5 w-5 mr-2" />
                Watch on YouTube
              </Button>
            </a>
          </div>
        ) : (
          <>
            {/* Featured — Latest Sermon */}
            {sermons.length > 0 && (
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-primary/20 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative aspect-video">
                    {sermons[0].isEmbeddable ? (
                      <iframe
                        src={getEmbedUrl(sermons[0].id)}
                        title={sermons[0].title}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    ) : (
                      <div className="relative h-full w-full bg-gray-100">
                        <img
                          src={sermons[0].thumbnailUrl || `https://img.youtube.com/vi/${sermons[0].id}/hqdefault.jpg`}
                          alt={sermons[0].title}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://img.youtube.com/vi/${sermons[0].id}/hqdefault.jpg`;
                          }}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-4 text-center text-white">
                          <p className="mb-4">This video can only be watched on YouTube</p>
                          <a
                            href={getVideoUrl(sermons[0].id)}
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

                  <CardContent className="p-5 sm:p-6 lg:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                          Latest Message
                        </span>
                        <span className="text-sm text-gray-500">{formatDate(sermons[0].publishedAt)}</span>
                      </div>

                      <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 line-clamp-2">
                        {sermons[0].title}
                      </h3>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <User className="h-5 w-5 text-primary" />
                          <span className="text-sm">{sermons[0].channelTitle}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-5 w-5 text-primary" />
                          <span className="text-sm">{sermons[0].duration}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                        {sermons[0].description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={getVideoUrl(sermons[0].id)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button className="w-full bg-primary hover:bg-primary/90 flex items-center justify-center gap-2">
                          <Youtube className="h-5 w-5" />
                          Watch on YouTube
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </div>
              </Card>
            )}

            {/* All Sermons Grid */}
            {sermons.length > 1 && (
              <>
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">All Sermons</h2>
                  <a
                    href="https://www.youtube.com/@ChurchofChristNarayanaguda"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="flex items-center border-primary text-primary hover:bg-primary/10">
                      <Youtube className="h-4 w-4 mr-2" />
                      YouTube Channel
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {sermons.slice(1).map((sermon) => (
                    <Card key={sermon.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-primary/20 group">
                      {/* Thumbnail */}
                      <div className="relative aspect-video overflow-hidden bg-gray-100">
                        <img
                          src={sermon.thumbnailUrl || `https://img.youtube.com/vi/${sermon.id}/hqdefault.jpg`}
                          alt={sermon.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://img.youtube.com/vi/${sermon.id}/hqdefault.jpg`;
                          }}
                        />
                        {/* Duration badge */}
                        <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs font-medium px-2 py-0.5 rounded">
                          {sermon.duration}
                        </div>
                      </div>

                      {/* Info */}
                      <CardContent className="p-4 sm:p-5">
                        <h3 className="font-semibold text-gray-800 text-sm sm:text-base leading-snug line-clamp-2 mb-3">
                          {sermon.title}
                        </h3>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="h-4 w-4 text-primary shrink-0" />
                            <span className="text-sm">{formatDate(sermon.publishedAt)}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <User className="h-4 w-4 text-primary shrink-0" />
                            <span className="text-sm">{sermon.channelTitle}</span>
                          </div>
                        </div>
                        <a
                          href={getVideoUrl(sermon.id)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary/10 flex items-center justify-center gap-2">
                            <Youtube className="h-4 w-4" />
                            Watch
                          </Button>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Sermons;
