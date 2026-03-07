import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Users, Music, Book, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Events = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Upcoming Events</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Join us for these upcoming events and be part of our growing community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 mb-10 sm:mb-16">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary/20">
            <div className="h-48 bg-primary/10 flex items-center justify-center">
              <Calendar className="h-16 w-16 text-primary" />
            </div>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Community Outreach</h2>
              
              <div className="flex items-start gap-3 mb-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Saturday, 10:00 AM - 2:00 PM</p>
                  <p className="text-gray-600 text-sm">Monthly Event</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">YMCA, Narayanaguda</p>
                  <p className="text-gray-600 text-sm">Hyderabad, Telangana</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">
                Join us as we serve our local community through various outreach programs. 
                Food distribution, clothing drive, and family activities.
              </p>
              
              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                <div className="flex flex-col items-center">
                  <Users className="h-5 w-5 text-primary mb-1" />
                  <span>Community</span>
                </div>
                <div className="flex flex-col items-center">
                  <Heart className="h-5 w-5 text-primary mb-1" />
                  <span>Service</span>
                </div>
                <div className="flex flex-col items-center">
                  <Music className="h-5 w-5 text-primary mb-1" />
                  <span>Activities</span>
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
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Youth Bible Study</h2>
              
              <div className="flex items-start gap-3 mb-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">8:00 PM</p>
                  <p className="text-gray-600 text-sm">Every Tue, Thu & Sat</p>
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
                A fun and engaging Bible study for youth. Games, discussions, 
                and activities designed to help young people grow in their faith.
              </p>
              
              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                <div className="flex flex-col items-center">
                  <Book className="h-5 w-5 text-primary mb-1" />
                  <span>Study</span>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="h-5 w-5 text-primary mb-1" />
                  <span>Fellowship</span>
                </div>
                <div className="flex flex-col items-center">
                  <Music className="h-5 w-5 text-primary mb-1" />
                  <span>Worship</span>
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

export default Events;
