import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">About Our Church</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            We are a welcoming community of believers dedicated to following Jesus Christ and sharing His love with the world.
          </p>
        </div>
        
        {/* Mission & Vision */}
        <div className="mb-10 sm:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  To spread the gospel of Jesus Christ, nurture spiritual growth, and serve our community with love and compassion.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <Heart className="h-5 w-5" />
                  <span className="font-medium">Spreading God's Love</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
                <p className="text-gray-600 mb-4">
                  To be a beacon of hope in our community, transforming lives through the power of God's Word and the love of Christ.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <Globe className="h-5 w-5" />
                  <span className="font-medium">Building God's Kingdom</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="mb-10 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-5 sm:mb-6 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Scripture</h3>
                <p className="text-gray-600">We believe the Bible is God's inspired word and our ultimate authority for faith and practice.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Community</h3>
                <p className="text-gray-600">We value genuine relationships and strive to create a loving fellowship where everyone belongs.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Service</h3>
                <p className="text-gray-600">We are committed to serving others sacrificially as Jesus did, both locally and globally.</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-6">We'd love to welcome you to our church family. Come visit us this Sunday!</p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90">Plan Your Visit</Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
