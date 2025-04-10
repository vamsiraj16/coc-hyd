import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Heart, Globe, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Our Church</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a welcoming community of believers dedicated to following Jesus Christ and sharing His love with the world.
          </p>
        </div>
        
        {/* Mission & Vision */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        
        {/* Leadership */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Pastoral Team</h3>
                <p className="text-gray-600">Led by our senior pastor and supported by a team of dedicated ministers.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Elders</h3>
                <p className="text-gray-600">Spiritual leaders who provide guidance and oversight to our church family.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Deacons</h3>
                <p className="text-gray-600">Servant leaders who assist in the practical needs of our church community.</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-6">We'd love to welcome you to our church family. Come visit us this Sunday!</p>
          <Button className="bg-primary hover:bg-primary/90">Plan Your Visit</Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
