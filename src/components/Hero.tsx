
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100"></div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="fade-in text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
          Welcome to the Church of Christ
        </h1>
        
        <p className="fade-in-delay-1 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Join us in worship, fellowship, and service as we grow together in faith and love.
          We're a welcoming community dedicated to living Christ's teachings.
        </p>
        
        <div className="fade-in-delay-2 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/services">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-md text-lg transition-all duration-300 hover:shadow-lg"
            >
              Join Us
            </Button>
          </Link>
          <Link to="/about">
            <Button 
              variant="outline"
              className="px-8 py-6 rounded-md text-lg border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Learn More
            </Button>
          </Link>
        </div>
        
        <div className="mt-16 fade-in-delay-2">
          <p className="text-gray-700 mb-4 font-medium">Worship with us this Sunday</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg px-6 py-4 shadow-md">
              <p className="font-semibold text-gray-800">Sunday Service</p>
              <p className="text-gray-600">10:30 AM</p>
            </div>
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg px-6 py-4 shadow-md">
              <p className="font-semibold text-gray-800">Sunday School</p>
              <p className="text-gray-600">9:15 AM</p>
            </div>
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg px-6 py-4 shadow-md">
              <p className="font-semibold text-gray-800">Wednesday Bible Study</p>
              <p className="text-gray-600">7:00 PM</p>
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
