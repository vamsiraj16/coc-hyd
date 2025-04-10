import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, MapPin, Music, Book, Heart, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Worship Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us for worship, prayer, and fellowship. Everyone is welcome at our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary/20">
            <div className="h-48 bg-primary/10 flex items-center justify-center">
              <Users className="h-16 w-16 text-primary" />
            </div>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sunday Morning Worship</h2>
              
              <div className="flex items-start gap-3 mb-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">10:30 AM - 12:00 PM</p>
                  <p className="text-gray-600 text-sm">Every Sunday</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Main Sanctuary</p>
                  <p className="text-gray-600 text-sm">YMCA Narayanaguda, Hyderabad</p>
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
                <Button className="bg-primary hover:bg-primary/90">Plan Your Visit</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary/20">
            <div className="h-48 bg-primary/10 flex items-center justify-center">
              <Book className="h-16 w-16 text-primary" />
            </div>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Wednesday Bible Study</h2>
              
              <div className="flex items-start gap-3 mb-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">7:00 PM - 8:30 PM</p>
                  <p className="text-gray-600 text-sm">Every Wednesday</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Fellowship Hall</p>
                  <p className="text-gray-600 text-sm">YMCA Narayanaguda, Hyderabad</p>
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
                <Button className="bg-primary hover:bg-primary/90">Join Us</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Special Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-primary/20 hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2 text-center">Easter Service</h3>
                <p className="text-gray-600 mb-2">A celebration of Christ's resurrection with special music and worship.</p>
                <p className="text-sm text-gray-500">Next service: April 17, 2025</p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2 text-center">Christmas Eve</h3>
                <p className="text-gray-600 mb-2">Candlelight service celebrating the birth of Jesus Christ.</p>
                <p className="text-sm text-gray-500">Next service: December 24, 2024</p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2 text-center">Thanksgiving Service</h3>
                <p className="text-gray-600 mb-2">A time of gratitude and praise for God's blessings throughout the year.</p>
                <p className="text-sm text-gray-500">Next service: November 23, 2024</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Expect</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Our services are welcoming and accessible to everyone. You'll experience uplifting worship music, 
            relevant teaching from God's Word, and a friendly community of believers.
          </p>
          <Button className="bg-primary hover:bg-primary/90">Learn More</Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
