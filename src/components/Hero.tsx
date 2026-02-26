
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import ParticleBackground from './ParticleBackground';
import { LOGO } from '@/lib/assets';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient using the logo colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100"></div>
      
      {/* Particle effect overlay */}
      <ParticleBackground className="absolute inset-0 z-0" />
      
      {/* Content container */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 text-center pt-20 pb-24 sm:pt-0 sm:pb-0">
        {/* Logo */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <img 
            src={LOGO}
            alt="Church of Christ Logo"
            width={200}
            height={200}
            className="w-24 h-24 sm:w-40 sm:h-40 float-animation glow-animation rounded-full shadow-lg"
          />
        </div>
        
        <h1 className="fade-in text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
          Welcome to the <span className="text-primary">Church of Christ</span>
        </h1>
        
        <p className="fade-in-delay-1 text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          Join us in worship, fellowship, and service as we grow together in faith and love.
          We're a welcoming community dedicated to living Christ's teachings.
        </p>
        
        <div className="fade-in-delay-2 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Link to="/services" className="w-full sm:w-auto">
            <Button 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-md text-base sm:text-lg transition-all duration-300 hover:shadow-lg"
            >
              Join Us
            </Button>
          </Link>
          <Link to="/about" className="w-full sm:w-auto">
            <Button 
              variant="outline"
              className="w-full sm:w-auto px-8 py-6 rounded-md text-base sm:text-lg border-primary text-primary hover:bg-primary/10"
            >
              Learn More
            </Button>
          </Link>
        </div>
        
        <div className="mt-10 sm:mt-16 fade-in-delay-2">
          <p className="text-gray-700 mb-3 sm:mb-4 font-medium text-sm sm:text-base">Worship with us this Sunday</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8">
            <div className="w-full sm:w-auto bg-white bg-opacity-80 backdrop-blur-sm rounded-lg px-6 py-4 shadow-md border-l-4 border-primary">
              <p className="font-semibold text-gray-800">Sunday Service</p>
              <p className="text-gray-600">10:30 AM</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white"></div>
    </div>
  );
};

export default Hero;
