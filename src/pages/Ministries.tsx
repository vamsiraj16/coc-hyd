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
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      id: 2,
      title: "Youth Ministry",
      description: "Helping teens and young adults grow in their faith through Bible study, mentorship, service projects, and fellowship.",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      id: 3,
      title: "Worship Ministry",
      description: "Enhancing our worship experience through music, audio/visual support, and creative elements.",
      icon: Music,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      id: 4,
      title: "Outreach & Missions",
      description: "Extending Christ's love beyond our walls through local service projects and global mission partnerships.",
      icon: Globe,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      id: 5,
      title: "Adult Bible Study",
      description: "Deepening our understanding of God's Word through various small groups and Bible studies for adults.",
      icon: BookOpen,
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      id: 6,
      title: "Compassion Ministry",
      description: "Providing practical support to those in need through food assistance, financial counseling, and crisis relief.",
      icon: Heart,
      color: "text-pink-600",
      bgColor: "bg-pink-100"
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
            <Card key={ministry.id}>
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-full ${ministry.bgColor} flex items-center justify-center mb-4`}>
                  <ministry.icon className={`h-6 w-6 ${ministry.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{ministry.title}</h3>
                <p className="text-gray-600 mb-4">{ministry.description}</p>
                <Button variant="outline" size="sm">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Ministry Spotlight */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Ministry Spotlight</h2>
          <div className="bg-blue-50 rounded-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 bg-gray-200 rounded-lg"></div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Community Outreach Program</h3>
                <p className="text-gray-600 mb-4">
                  Our community outreach program is making a difference in our neighborhood through weekly food 
                  distribution, after-school tutoring, and monthly community events. Last year, we served over 
                  2,000 families and provided academic support to 150 students.
                </p>
                <p className="text-gray-600 mb-6">
                  This ministry offers many opportunities to serve, whether you can help weekly, monthly, or for special events.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button>Get Involved</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* How to Get Involved */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">How to Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Explore</h3>
                <p className="text-gray-600">Learn more about our ministries to find what interests you.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Connect</h3>
                <p className="text-gray-600">Reach out to ministry leaders or fill out our volunteer form.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Serve</h3>
                <p className="text-gray-600">Start serving in ways that match your gifts, passion, and availability.</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button className="px-8">Volunteer Today</Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Ministries;
