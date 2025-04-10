import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">About Us</h3>
            <p className="text-gray-600 mb-4">
              We are a welcoming community of believers dedicated to following Jesus Christ and sharing His love with the world.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-700 hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="text-gray-700 hover:text-primary">About Us</Link></li>
              <li><Link to="/services" className="text-gray-700 hover:text-primary">Services</Link></li>
              <li><Link to="/events" className="text-gray-700 hover:text-primary">Events</Link></li>
              <li><Link to="/sermons" className="text-gray-700 hover:text-primary">Sermons</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Connect With Us</h3>
            <ul className="space-y-2">
              <li><Link to="/ministries" className="text-gray-700 hover:text-primary">Ministries</Link></li>
              <li><Link to="/contact" className="text-gray-700 hover:text-primary">Contact</Link></li>
              <li><a href="#" className="text-gray-700 hover:text-primary">Prayer Requests</a></li>
              <li><a href="#" className="text-gray-700 hover:text-primary">Volunteer</a></li>
              <li><a href="#" className="text-gray-700 hover:text-primary">Give Online</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Info</h3>
            <address className="text-gray-700 not-italic">
              <p>YMCA Narayanaguda</p>
              <p>Hyderabad, Telangana 500029</p>
              <p className="mt-3">+91 98480 12345</p>
              <p>info@churchofchrist.org</p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Church of Christ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
