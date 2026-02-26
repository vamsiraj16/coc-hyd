import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface LazyYouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

const LazyYouTubeEmbed: React.FC<LazyYouTubeEmbedProps> = ({ videoId, title, className }) => {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`}
        title={title}
        className={className || 'absolute inset-0 w-full h-full'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    );
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      className={`relative group cursor-pointer bg-black ${className || 'absolute inset-0 w-full h-full'}`}
      aria-label={`Play video: ${title}`}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/90 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-lg">
          <Play className="h-7 w-7 sm:h-8 sm:w-8 text-white ml-1" fill="white" />
        </div>
      </div>
    </button>
  );
};

export default LazyYouTubeEmbed;
