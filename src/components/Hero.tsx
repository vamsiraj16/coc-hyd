
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100"></div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="fade-in text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
          Welcome to the Church of Christ
        </h1>
        
        <p className="fade-in-delay-1 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Join us in worship, fellowship, and service as we grow together in faith and love.
          We're a welcoming community dedicated to living Christ's teachings.
        </p>
        
        <div className="fade-in-delay-2">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-md text-lg transition-all duration-300 hover:shadow-lg"
          >
            Join Us
          </Button>
        </div>
      </div>
      
      {/* Optional subtle cross symbol or church icon could be added here */}
    </div>
  );
};

export default Hero;
