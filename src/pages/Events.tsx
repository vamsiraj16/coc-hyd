import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Community Food Drive",
      date: "April 15, 2025",
      time: "9:00 AM - 2:00 PM",
      location: "Church Parking Lot",
      description: "Join us as we collect non-perishable food items to support local families in need. Volunteers needed to help sort and distribute donations.",
      category: "Service"
    },
    {
      id: 2,
      title: "Youth Summer Camp",
      date: "July 10-15, 2025",
      time: "All Day",
      location: "Pine Lake Retreat Center",
      description: "A week of fun, fellowship, and spiritual growth for students grades 6-12. Activities include swimming, hiking, campfires, worship, and Bible study.",
      category: "Youth"
    },
    {
      id: 3,
      title: "Marriage Enrichment Workshop",
      date: "May 20, 2025",
      time: "6:30 PM - 8:30 PM",
      location: "Fellowship Hall",
      description: "A special workshop for couples looking to strengthen their relationship through biblical principles. Childcare will be provided.",
      category: "Family"
    },
    {
      id: 4,
      title: "Women's Bible Study Kickoff",
      date: "June 5, 2025",
      time: "7:00 PM",
      location: "Room 201",
      description: "The beginning of our 8-week summer Bible study series for women. This year's theme is 'Walking in Faith' and will focus on the book of Hebrews.",
      category: "Bible Study"
    },
    {
      id: 5,
      title: "Men's Breakfast",
      date: "April 28, 2025",
      time: "8:00 AM",
      location: "Fellowship Hall",
      description: "Monthly gathering for men to enjoy good food, fellowship, and a brief devotional. Open to all men in the community.",
      category: "Fellowship"
    },
    {
      id: 6,
      title: "Vacation Bible School",
      date: "June 22-26, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Church Campus",
      description: "A fun-filled week for children ages 4-12 with games, crafts, music, and Bible stories. This year's theme: 'Ocean Adventure: Diving Deep into God's Word'",
      category: "Children"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Events</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us for these upcoming activities, gatherings, and opportunities to connect with our church family.
          </p>
        </div>
        
        {/* Featured Event */}
        <div className="mb-16">
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 bg-opacity-75"></div>
            <div className="relative z-10 p-8 md:p-12 text-white">
              <span className="inline-block px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-medium mb-4">Featured Event</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Annual Church Picnic</h2>
              <div className="flex flex-col sm:flex-row gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>May 30, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>11:00 AM - 3:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>Riverside Park</span>
                </div>
              </div>
              <p className="text-lg mb-6 max-w-3xl">
                Join us for our annual church picnic! Bring your family and friends for a day of fun, 
                food, and fellowship. We'll have games for all ages, plenty of food, and a special 
                outdoor worship service.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50">Learn More</Button>
            </div>
          </div>
        </div>
        
        {/* Event Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button variant="outline" className="rounded-full">All Events</Button>
          <Button variant="outline" className="rounded-full">Worship</Button>
          <Button variant="outline" className="rounded-full">Fellowship</Button>
          <Button variant="outline" className="rounded-full">Service</Button>
          <Button variant="outline" className="rounded-full">Bible Study</Button>
          <Button variant="outline" className="rounded-full">Youth</Button>
          <Button variant="outline" className="rounded-full">Children</Button>
        </div>
        
        {/* Event List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {upcomingEvents.map((event) => (
            <Card key={event.id}>
              <CardContent className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium mb-4">
                  {event.category}
                </span>
                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                <Button variant="outline" size="sm" className="w-full">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button>View All Events</Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Events;
