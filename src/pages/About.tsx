import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Our Church</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Learn about our history, mission, values, and the people who make our church community special.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              The Church of Christ is dedicated to sharing the love of Christ, serving our community, and helping people 
              grow in their spiritual journey. We strive to be a welcoming place where everyone can experience God's grace.
            </p>
            <p className="text-gray-600">
              We believe in the teachings of Jesus Christ and aim to follow His example in all that we do. Our congregation is 
              committed to putting faith into action through worship, fellowship, and service.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our History</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1950, our church began as a small gathering of faithful families committed to restoring 
              New Testament Christianity in our community. Over the decades, we've grown in numbers and expanded our ministries.
            </p>
            <p className="text-gray-600">
              Throughout our history, we've maintained our commitment to biblical teaching, compassionate service, 
              and inclusive fellowship. Today, we continue to build on the foundation laid by those who came before us.
            </p>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Scripture</h3>
                <p className="text-gray-600">We believe the Bible is God's inspired word and our ultimate authority for faith and practice.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Community</h3>
                <p className="text-gray-600">We value genuine relationships and strive to create a loving fellowship where everyone belongs.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Service</h3>
                <p className="text-gray-600">We are committed to serving others sacrificially as Jesus did, both locally and globally.</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Church Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-medium text-gray-800">Pastor John Smith</h3>
              <p className="text-gray-600">Senior Minister</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-medium text-gray-800">Sarah Johnson</h3>
              <p className="text-gray-600">Worship Minister</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-medium text-gray-800">David Williams</h3>
              <p className="text-gray-600">Youth Minister</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
