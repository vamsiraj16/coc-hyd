
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/3618bc0d-192c-4a06-9493-a5ced09a3873.png" 
                alt="Church of Christ Logo" 
                className="h-10 w-10 mr-2"
              />
              <h3 className="text-lg font-semibold text-primary">Church of Christ</h3>
            </div>
            <p className="text-gray-700 mb-4">A community of believers dedicated to following Jesus Christ and sharing His love with the world.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.02 10.02 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482c-4.09-.21-7.72-2.17-10.15-5.15a4.917 4.917 0 001.525 6.573 4.88 4.88 0 01-2.23-.616v.06a4.923 4.923 0 003.95 4.827 4.923 4.923 0 01-2.224.084 4.924 4.924 0 004.6 3.42 9.87 9.87 0 01-6.11 2.107c-.39 0-.78-.023-1.17-.067a13.995 13.995 0 007.557 2.21c9.053 0 14-7.5 14-14 0-.21 0-.42-.015-.63a10.012 10.012 0 002.46-2.548z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
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
              <p>Hyderabad, 1:23</p>
              <p className="mt-3">(555) 123-4567</p>
              <p>info@churchofchrist.org</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-700">© {new Date().getFullYear()} Church of Christ. All rights reserved.</p>
          <p className="text-gray-600 text-sm mt-2">We Preach Christ Crucified - I Corinthians 1:23</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
