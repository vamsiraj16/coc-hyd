import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, MapPin, Calendar, ArrowRight, Facebook, Youtube, Instagram, User } from 'lucide-react';
import { fetchYouTubeVideos, getVideoUrl, getEmbedUrl } from '@/lib/youtube';
import type { YouTubeVideo } from '@/lib/youtube';

const Index = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "10:30 AM",
      location: "Main Sanctuary"
    },
    {
      id: 2,
      title: "Bible Study",
      date: "Every Wednesday",
      time: "7:00 PM",
      location: "Fellowship Hall"
    },
    {
      id: 3,
      title: "Community Food Drive",
      date: "April 15, 2025",
      time: "9:00 AM - 2:00 PM",
      location: "Church Parking Lot"
    }
  ];

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [latestSermon, setLatestSermon] = React.useState<YouTubeVideo | null>(null);

  React.useEffect(() => {
    async function loadLatestSermon() {
      try {
        const videos = await fetchYouTubeVideos(1); // Get only the latest video
        if (videos.length > 0) {
          setLatestSermon(videos[0]);
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load the latest sermon');
        console.error('Error loading latest sermon:', err);
      } finally {
        setLoading(false);
      }
    }

    loadLatestSermon();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Welcome Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Our Church</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a community of believers dedicated to following Jesus Christ and sharing His love with the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Join Our Community</h3>
                <p className="text-gray-600 mb-4">
                  Become part of a welcoming family of believers who support each other in faith and life.
                </p>
                <Link to="/about">
                  <Button variant="link" className="flex items-center mx-auto text-primary">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Grow in Faith</h3>
                <p className="text-gray-600 mb-4">
                  Deepen your understanding of God's Word through Bible studies, sermons, and discipleship.
                </p>
                <Link to="/sermons">
                  <Button variant="link" className="flex items-center mx-auto text-primary">
                    Listen to Sermons
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Serve Others</h3>
                <p className="text-gray-600 mb-4">
                  Put your faith into action by serving our church, community, and world in Christ's name.
                </p>
                <Link to="/ministries">
                  <Button variant="link" className="flex items-center mx-auto text-primary">
                    Explore Ministries
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Service Times */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Us for Worship</h2>
              <p className="text-lg text-gray-600 mb-8">
                We gather each week to worship God, study His Word, and encourage one another in faith.
                All are welcome to join us!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-2 mt-1">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Sunday Worship</h3>
                    <p className="text-gray-600">10:30 AM - 12:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-2 mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Location</h3>
                    <p className="text-gray-600">YMCA Narayanaguda</p>
                    <p className="text-gray-600">Hyderabad, Telangana 500029</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/90">Get Directions</Button>
                </Link>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/coc-hyd/lovable-uploads/church.png" 
                alt="Church community group photo" 
                className="w-full h-96 object-cover rounded-lg filter contrast-125 brightness-105"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Sermon */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Latest Sermon</h2>
              <p className="text-lg text-gray-600">Watch and listen to our most recent message</p>
            </div>
            <Link to="/sermons" className="mt-4 md:mt-0">
              <Button variant="outline" className="flex items-center border-primary text-primary hover:bg-primary/10">
                View All Sermons
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading latest sermon...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
            </div>
          ) : latestSermon ? (
            <Card className="overflow-hidden border-primary/20 hover:shadow-lg transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 relative">
                  <div className="aspect-video w-full">
                    {latestSermon.isEmbeddable ? (
                      <iframe
                        src={getEmbedUrl(latestSermon.id)}
                        title={latestSermon.title}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    ) : (
                      <div className="relative h-full w-full bg-gray-100">
                        <img
                          src={latestSermon.thumbnailUrl || `https://img.youtube.com/vi/${latestSermon.id}/hqdefault.jpg`}
                          alt={latestSermon.title}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            // Fallback to a default thumbnail if the image fails to load
                            const target = e.target as HTMLImageElement;
                            target.src = `https://img.youtube.com/vi/${latestSermon.id}/hqdefault.jpg`;
                            target.onerror = () => {
                              // If the fallback also fails, show a placeholder
                              target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4MCIgaGVpZ2h0PSI3MjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyODAiIGhlaWdodD0iNzIwIiBmaWxsPSIjZjFmMWYxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGR5PSIuM2VtIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q2Fubm90IGxvYWQgdmlkZW8gdGh1bWJuYWlsPC90ZXh0Pjwvc3ZnPg==';
                            };
                          }}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-4 text-center text-white">
                          <p className="mb-4">This video can only be watched on YouTube</p>
                          <a
                            href={getVideoUrl(latestSermon.id)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                          >
                            <Youtube className="h-4 w-4" />
                            Watch on YouTube
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="lg:col-span-5">
                  <CardContent className="p-6 lg:p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                          Latest Message
                        </span>
                        <span className="text-sm text-gray-500">{latestSermon.publishedAt}</span>
                      </div>
                      
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 line-clamp-2">
                        {latestSermon.title}
                      </h3>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <User className="h-5 w-5 text-primary" />
                          <span className="text-sm">{latestSermon.channelTitle}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-5 w-5 text-primary" />
                          <span className="text-sm">{latestSermon.duration}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                        {latestSermon.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a 
                        href={getVideoUrl(latestSermon.id)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button className="w-full bg-primary hover:bg-primary/90 flex items-center justify-center gap-2">
                          <Youtube className="h-5 w-5" />
                          Watch on YouTube
                        </Button>
                      </a>
                      <Link to="/sermons" className="flex-1">
                        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                          More Sermons
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ) : null}
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Upcoming Events</h2>
              <p className="text-lg text-gray-600">Join us for these upcoming activities and services.</p>
            </div>
            <Link to="/events" className="mt-4 md:mt-0">
              <Button variant="outline" className="flex items-center border-primary text-primary hover:bg-primary/10">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-md transition-shadow duration-300 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Button variant="link" className="p-0 flex items-center text-primary">
                    Event Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stay Connected */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)] pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Connected</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter and follow us on social media to stay updated with our latest news, events, and messages.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex-1 max-w-md w-full">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                />
                <Button className="bg-white text-primary hover:bg-white/90 font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex justify-center space-x-8 mb-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-3 rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-3 rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-3 rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p className="text-white/60 text-sm">Follow us on social media</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
