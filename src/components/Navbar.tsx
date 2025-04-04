
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Church Name */}
          <div className="flex items-center">
            <span className="text-xl font-semibold text-gray-800">Church of Christ</span>
          </div>
          
          {/* Navigation Menu - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Events</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" className="text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
