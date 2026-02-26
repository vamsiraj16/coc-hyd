
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LOGO } from '@/lib/assets';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Events', path: '/events' },
    { name: 'Sermons', path: '/sermons' },
    { name: 'Ministries', path: '/ministries' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/' || location.pathname === '';
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-md'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Church Name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={LOGO} 
                alt="Church of Christ Logo"
                width={40}
                height={40}
                className="h-10 w-10 mr-2"
              />
              <span className="text-xl font-semibold text-primary">Church of Christ</span>
            </Link>
          </div>
          
          {/* Navigation Menu - Desktop */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path} 
                className={`py-2 transition-colors ${
                  isActive(item.path)
                    ? 'text-primary font-semibold'
                    : 'text-gray-800 hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-800 h-11 w-11" aria-label="Open navigation menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center p-5 border-b">
                    <img 
                      src={LOGO} 
                      alt="Church of Christ Logo"
                      width={40}
                      height={40}
                      className="h-10 w-10 mr-3"
                    />
                    <span className="text-lg font-semibold text-primary">Church of Christ</span>
                  </div>

                  {/* Nav links */}
                  <nav className="flex flex-col flex-1 py-4 px-3 overflow-y-auto">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`flex items-center py-3.5 px-4 rounded-lg text-base font-medium transition-colors ${
                          isActive(item.path)
                            ? 'text-primary bg-primary/5 font-semibold'
                            : 'text-gray-800 hover:text-primary hover:bg-gray-50'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  {/* Footer info */}
                  <div className="border-t p-5 bg-gray-50">
                    <p className="text-sm font-medium text-gray-800">Sunday Worship</p>
                    <p className="text-sm text-gray-600">10:30 AM — YMCA Narayanaguda</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
