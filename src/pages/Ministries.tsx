import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Baby, Heart, Globe, BookOpen, Music } from 'lucide-react';

const Ministries = () => {
  const ministries = [
    {
      id: 1,
      title: "Children's Ministry",
      description: "Nurturing the faith of our youngest members through age-appropriate Bible lessons, activities, and worship.",
      icon: Baby,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: 2,
      title: "Youth Ministry",
      description: "Helping teens and young adults grow in their faith through Bible study, mentorship, service projects, and fellowship.",
      icon: Users,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: 3,
      title: "Worship Ministry",
      description: "Enhancing our worship experience through music, audio/visual support, and creative elements.",
      icon: Music,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: 4,
      title: "Outreach & Missions",
      description: "Extending Christ's love beyond our walls through local service projects and global mission partnerships.",
      icon: Globe,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: 5,
      title: "Adult Bible Study",
      description: "Deepening our understanding of God's Word through various small groups and Bible studies for adults.",
      icon: BookOpen,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: 6,
      title: "Compassion Ministry",
      description: "Providing practical support to those in need through food assistance, financial counseling, and crisis relief.",
      icon: Heart,
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Ministries</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the many ways you can connect, serve, and grow through our church's ministries.
          </p>
        </div>
        
        {/* Ministry Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ministries.map((ministry) => (
            <Card key={ministry.id} className="hover:shadow-lg transition-shadow duration-300 border-primary/20">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-full ${ministry.bgColor} flex items-center justify-center mb-4`}>
                  <ministry.icon className={`h-6 w-6 ${ministry.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{ministry.title}</h3>
                <p className="text-gray-600 mb-4">{ministry.description}</p>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Ministry Spotlight */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Featured Ministry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Children's Ministry</h3>
              <p className="text-gray-600 mb-4">
                Our Children's Ministry is dedicated to nurturing the faith of our youngest members in a safe, 
                fun, and engaging environment. We believe that children are a vital part of our church family 
                and deserve to experience God's love in ways that are meaningful to them.
              </p>
              <p className="text-gray-600 mb-6">
                Through age-appropriate Bible lessons, creative activities, music, and play, we help children 
                develop a strong foundation of faith that will guide them throughout their lives.
              </p>
              <Button className="bg-primary hover:bg-primary/90">Get Involved</Button>
            </div>
            <div className="bg-primary/10 h-80 rounded-lg flex items-center justify-center">
              <Baby className="h-24 w-24 text-primary" />
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">How to Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-md transition-shadow duration-300 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Explore</h3>
                <p className="text-gray-600">Learn more about our ministries to find what interests you.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow duration-300 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Connect</h3>
                <p className="text-gray-600">Reach out to ministry leaders or fill out our volunteer form.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow duration-300 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Serve</h3>
                <p className="text-gray-600">Start serving in ways that match your gifts, passion, and availability.</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button className="px-8 bg-primary hover:bg-primary/90">Volunteer Today</Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Ministries;
