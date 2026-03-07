import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, MapPin, Music, Book, Heart, Users, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Worship Services</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Join us for worship, prayer, and fellowship. Everyone is welcome at our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-16">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary/20">
            <div className="h-48 bg-primary/10 flex items-center justify-center">
              <Users className="h-16 w-16 text-primary" />
            </div>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sunday Morning Worship</h2>
              
              <div className="flex items-start gap-3 mb-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">11:00 AM - 1:00 PM</p>
                  <p className="text-gray-600 text-sm">Every Sunday</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">YMCA, Narayanaguda</p>
                  <p className="text-gray-600 text-sm">Hyderabad, Telangana 500029</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">
                Our Sunday morning service includes uplifting worship music, prayer, and a message from 
                God's Word that is relevant and applicable to daily life.
              </p>
              
              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                <div className="flex flex-col items-center">
                  <Music className="h-5 w-5 text-primary mb-1" />
                  <span>Worship</span>
                </div>
                <div className="flex flex-col items-center">
                  <Book className="h-5 w-5 text-primary mb-1" />
                  <span>Teaching</span>
                </div>
                <div className="flex flex-col items-center">
                  <Heart className="h-5 w-5 text-primary mb-1" />
                  <span>Communion</span>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/90">Contact Us</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary/20">
            <div className="h-48 bg-primary/10 flex items-center justify-center">
              <Book className="h-16 w-16 text-primary" />
            </div>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bible Study</h2>
              
              <div className="flex items-start gap-3 mb-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">9:00 PM</p>
                  <p className="text-gray-600 text-sm">Every Tuesday, Thursday & Saturday</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Online</p>
                  <p className="text-gray-600 text-sm">Details will be provided on demand</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">
                Join us for an in-depth study of God's Word, prayer, and fellowship with other believers.
                All are welcome, whether you're new to the Bible or have been studying for years.
              </p>
              
              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                <div className="flex flex-col items-center">
                  <Book className="h-5 w-5 text-primary mb-1" />
                  <span>Bible Study</span>
                </div>
                <div className="flex flex-col items-center">
                  <Heart className="h-5 w-5 text-primary mb-1" />
                  <span>Prayer</span>
                </div>
                <div className="flex flex-col items-center">
                  <Music className="h-5 w-5 text-primary mb-1" />
                  <span>Fellowship</span>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/90">Contact Us</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional classes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary/20">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Women's Class</h2>
              <div className="flex items-start gap-3 mb-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">8:30 PM</p>
                  <p className="text-gray-600 text-sm">Every Wednesday</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Online</p>
                  <p className="text-gray-600 text-sm">Details will be provided on demand</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/90">Contact Us</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary/20">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Youth Class</h2>
              <div className="flex items-start gap-3 mb-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">8:00 PM</p>
                  <p className="text-gray-600 text-sm">Every Tuesday, Thursday & Saturday</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Online</p>
                  <p className="text-gray-600 text-sm">Details will be provided on demand</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/90">Contact Us</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
