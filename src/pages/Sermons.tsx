import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Download, Calendar, Clock, User } from 'lucide-react';

const Sermons = () => {
  const sermonSeries = [
    {
      id: 1,
      title: "Walking in Faith",
      description: "A study of Hebrews 11 examining the heroes of faith and what we can learn from their examples.",
      imageClass: "bg-blue-100",
      count: 6
    },
    {
      id: 2,
      title: "Life of Jesus",
      description: "Following the journey of Jesus through the gospel of Luke, exploring His teachings and ministry.",
      imageClass: "bg-green-100",
      count: 8
    },
    {
      id: 3,
      title: "Navigating Relationships",
      description: "Biblical principles for healthy relationships in family, friendship, and community.",
      imageClass: "bg-yellow-100",
      count: 5
    }
  ];

  const recentSermons = [
    {
      id: 1,
      title: "The Power of Faith",
      series: "Walking in Faith",
      speaker: "Pastor John Smith",
      date: "April 2, 2025",
      duration: "42 min",
      description: "Exploring Hebrews 11:1-6 and how faith impacts our daily walk with God."
    },
    {
      id: 2,
      title: "Grace for Every Day",
      series: "Foundations of Faith",
      speaker: "Pastor John Smith",
      date: "March 26, 2025",
      duration: "38 min",
      description: "Understanding God's grace and how it transforms our lives and relationships."
    },
    {
      id: 3,
      title: "Finding Peace in Chaos",
      series: "Navigating Relationships",
      speaker: "Pastor Mark Johnson",
      date: "March 19, 2025",
      duration: "45 min",
      description: "Biblical strategies for maintaining peace during life's most challenging moments."
    },
    {
      id: 4,
      title: "The Good Shepherd",
      series: "Life of Jesus",
      speaker: "Pastor John Smith",
      date: "March 12, 2025",
      duration: "40 min",
      description: "Examining Jesus' teaching about Himself as the Good Shepherd in John 10."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Sermons & Messages</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Listen to our recent sermons and messages to be encouraged, equipped, and inspired in your faith journey.
          </p>
        </div>
        
        {/* Sermon Series */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Current & Recent Series</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sermonSeries.map((series) => (
              <Card key={series.id} className="overflow-hidden">
                <div className={`h-48 ${series.imageClass}`}></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{series.title}</h3>
                  <p className="text-gray-600 mb-4">{series.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{series.count} sermons</span>
                    <Button variant="outline" size="sm">View Series</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Recent Sermons */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recent Sermons</h2>
          <div className="space-y-6">
            {recentSermons.map((sermon) => (
              <Card key={sermon.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="md:w-3/4">
                      <div className="mb-2">
                        <span className="text-sm text-blue-600 font-medium">{sermon.series}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{sermon.title}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-600 text-sm mb-3">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{sermon.speaker}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{sermon.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{sermon.duration}</span>
                        </div>
                      </div>
                      <p className="text-gray-600">{sermon.description}</p>
                    </div>
                    <div className="md:w-1/4 flex md:flex-col gap-3">
                      <Button className="flex items-center gap-2 w-full">
                        <Play className="h-4 w-4" />
                        <span>Listen</span>
                      </Button>
                      <Button variant="outline" className="flex items-center gap-2 w-full">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Sermon Archive */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Looking for older messages?</h2>
          <p className="text-gray-600 mb-6">Browse our complete sermon archive by date, speaker, or topic.</p>
          <Button>View Sermon Archive</Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Sermons;
