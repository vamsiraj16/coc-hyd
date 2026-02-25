import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">About Us</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
              We are a welcoming community of believers dedicated to following Jesus Christ and sharing His love with the world.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary transition-colors p-2 -ml-2 rounded-full hover:bg-primary/5"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/5"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/5"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-gray-700 hover:text-primary text-sm sm:text-base py-1 inline-block">Home</Link></li>
              <li><Link to="/about" className="text-gray-700 hover:text-primary text-sm sm:text-base py-1 inline-block">About Us</Link></li>
              <li><Link to="/services" className="text-gray-700 hover:text-primary text-sm sm:text-base py-1 inline-block">Services</Link></li>
              <li><Link to="/events" className="text-gray-700 hover:text-primary text-sm sm:text-base py-1 inline-block">Events</Link></li>
              <li><Link to="/sermons" className="text-gray-700 hover:text-primary text-sm sm:text-base py-1 inline-block">Sermons</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Connect</h3>
            <ul className="space-y-2.5">
              <li><Link to="/ministries" className="text-gray-700 hover:text-primary text-sm sm:text-base py-1 inline-block">Ministries</Link></li>
              <li><Link to="/contact" className="text-gray-700 hover:text-primary text-sm sm:text-base py-1 inline-block">Contact</Link></li>
              <li><a href="#" className="text-gray-700 hover:text-primary text-sm sm:text-base py-1 inline-block">Prayer Requests</a></li>
              <li><a href="#" className="text-gray-700 hover:text-primary text-sm sm:text-base py-1 inline-block">Volunteer</a></li>
              <li><a href="#" className="text-gray-700 hover:text-primary text-sm sm:text-base py-1 inline-block">Give Online</a></li>
            </ul>
          </div>
          
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Info</h3>
            <address className="text-gray-700 not-italic text-sm sm:text-base space-y-1">
              <p>YMCA Narayanaguda</p>
              <p>Hyderabad, Telangana 500029</p>
              <p className="mt-3 pt-3 border-t border-gray-200">
                <a href="tel:+919848012345" className="hover:text-primary">+91 98480 12345</a>
              </p>
              <p>
                <a href="mailto:info@churchofchrist.org" className="hover:text-primary">info@churchofchrist.org</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Church of Christ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
