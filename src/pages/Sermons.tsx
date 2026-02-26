import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User, Youtube, Play, Search, X, Grid3X3, LayoutList } from 'lucide-react';
import { Input } from '@/components/ui/input';
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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    async function loadSermons() {
      try {
        const videos = await fetchYouTubeVideos(50);
        setSermons(videos);
        if (videos.length > 0) {
          setSelectedVideo(videos[0]);
        }
      } catch (err) {
        setError('Failed to load sermons. Please try again later.');
        console.error('Error loading sermons:', err);
      } finally {
        setLoading(false);
      }
    }
    loadSermons();
  }, []);

  const filteredSermons = sermons.filter(sermon =>
    sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sermon.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 sm:pt-32 pb-8 sm:pb-12 px-5 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(225,29,43,0.12)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-medium mb-2">Watch & Listen</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                Sermons
              </h1>
              <p className="text-gray-400 text-sm sm:text-base">
                {sermons.length > 0 ? `${sermons.length} messages` : 'Growing in faith through God\'s Word'}
              </p>
            </div>
            <a
              href="https://www.youtube.com/@ChurchofChristNarayanaguda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full gap-2 text-sm">
                <Youtube className="h-4 w-4" />
                YouTube Channel
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Featured Video Player */}
      {selectedVideo && !loading && !error && (
        <div className="bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Video */}
              <div className="lg:col-span-3">
                <div className="aspect-video w-full">
                  {selectedVideo.isEmbeddable ? (
                    <iframe
                      src={getEmbedUrl(selectedVideo.id)}
                      title={selectedVideo.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : (
                    <div className="relative h-full w-full bg-gray-900">
                      <img
                        src={selectedVideo.thumbnailUrl || `https://img.youtube.com/vi/${selectedVideo.id}/hqdefault.jpg`}
                        alt={selectedVideo.title}
                        className="h-full w-full object-cover opacity-50"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                        <a
                          href={getVideoUrl(selectedVideo.id)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
                        >
                          <Youtube className="h-5 w-5" />
                          Watch on YouTube
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Video Info Panel */}
              <div className="lg:col-span-2 bg-gray-900 p-5 sm:p-6 flex flex-col">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      Now Playing
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug line-clamp-2">
                    {selectedVideo.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-4">
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{formatDate(selectedVideo.publishedAt)}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{selectedVideo.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <User className="h-3.5 w-3.5" />
                      <span>{selectedVideo.channelTitle}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-4 sm:line-clamp-6 lg:line-clamp-[8]">
                    {selectedVideo.description || 'Watch this sermon to grow in your faith and understanding of God\'s Word.'}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <a
                    href={getVideoUrl(selectedVideo.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-red-600 hover:bg-red-700 rounded-full font-semibold gap-2 h-11">
                      <Youtube className="h-4 w-4" />
                      Watch on YouTube
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toolbar: Search + View Toggle */}
      {!loading && !error && sermons.length > 0 && (
        <div className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-md border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex items-center gap-3">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search sermons..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-9 h-10 rounded-full border-gray-200 text-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <p className="text-sm text-gray-500 hidden sm:block">
                {filteredSermons.length} {filteredSermons.length === 1 ? 'sermon' : 'sermons'}
              </p>
              <div className="flex items-center gap-1 ml-auto border rounded-full p-0.5">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-full transition-colors ${viewMode === 'grid' ? 'bg-primary text-white' : 'text-gray-400 hover:text-gray-600'}`}
                  aria-label="Grid view"
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-full transition-colors ${viewMode === 'list' ? 'bg-primary text-white' : 'text-gray-400 hover:text-gray-600'}`}
                  aria-label="List view"
                >
                  <LayoutList className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-6 sm:py-8">
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-2 border-primary border-t-transparent mx-auto" />
            <p className="mt-4 text-gray-500 text-sm">Loading sermons...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <Youtube className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-800 font-semibold mb-2">Unable to Load Sermons</p>
            <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">{error}</p>
            <a
              href="https://www.youtube.com/@ChurchofChristNarayanaguda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-red-600 hover:bg-red-700 rounded-full gap-2">
                <Youtube className="h-4 w-4" />
                Watch on YouTube Instead
              </Button>
            </a>
          </div>
        ) : filteredSermons.length === 0 ? (
          <div className="text-center py-16">
            <Search className="h-10 w-10 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-800 font-semibold mb-1">No sermons found</p>
            <p className="text-gray-500 text-sm">Try a different search term</p>
          </div>
        ) : viewMode === 'grid' ? (
          /* Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSermons.map((sermon) => (
              <Card
                key={sermon.id}
                className={`overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group ${
                  selectedVideo?.id === sermon.id ? 'ring-2 ring-primary shadow-lg' : ''
                }`}
                onClick={() => {
                  setSelectedVideo(sermon);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={sermon.thumbnailUrl || `https://img.youtube.com/vi/${sermon.id}/hqdefault.jpg`}
                    alt={sermon.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://img.youtube.com/vi/${sermon.id}/hqdefault.jpg`;
                    }}
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                      <Play className="h-5 w-5 text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                  {/* Duration badge */}
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-medium px-2 py-0.5 rounded">
                    {sermon.duration}
                  </div>
                  {/* Now Playing indicator */}
                  {selectedVideo?.id === sermon.id && (
                    <div className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      Playing
                    </div>
                  )}
                </div>

                {/* Info */}
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 text-sm leading-snug line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                    {sermon.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{formatDate(sermon.publishedAt)}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>{sermon.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-3">
            {filteredSermons.map((sermon, index) => (
              <div
                key={sermon.id}
                className={`flex gap-4 p-3 sm:p-4 rounded-xl cursor-pointer transition-all duration-200 group ${
                  selectedVideo?.id === sermon.id
                    ? 'bg-primary/5 ring-1 ring-primary/20'
                    : 'bg-white hover:bg-gray-50 shadow-sm hover:shadow-md'
                }`}
                onClick={() => {
                  setSelectedVideo(sermon);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {/* Thumbnail */}
                <div className="relative w-36 sm:w-48 shrink-0 aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={sermon.thumbnailUrl || `https://img.youtube.com/vi/${sermon.id}/hqdefault.jpg`}
                    alt={sermon.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://img.youtube.com/vi/${sermon.id}/hqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="h-4 w-4 text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-[10px] font-medium px-1.5 py-0.5 rounded">
                    {sermon.duration}
                  </div>
                  {selectedVideo?.id === sermon.id && (
                    <div className="absolute top-1.5 left-1.5 bg-primary text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1 h-1 bg-white rounded-full animate-pulse" />
                      Playing
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 py-0.5">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base leading-snug line-clamp-2 mb-1.5 group-hover:text-primary transition-colors">
                    {sermon.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 mb-2">
                    <span>{formatDate(sermon.publishedAt)}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block" />
                    <span className="hidden sm:inline">{sermon.channelTitle}</span>
                  </div>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed hidden sm:block">
                    {sermon.description}
                  </p>
                </div>

                {/* YouTube link */}
                <a
                  href={getVideoUrl(sermon.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 self-center hidden md:block"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-red-600 hover:bg-red-50 h-10 w-10">
                    <Youtube className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Sermons;
