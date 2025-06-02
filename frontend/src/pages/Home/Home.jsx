import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Award, Calendar, GraduationCap, Clock, MapPin } from 'lucide-react';
import './Home.css';

// Import your images from assets
import carousel1 from "../../assets/bmce1.jpg";
import carousel2 from "../../assets/bmce2.jpg";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [currentProgram, setCurrentProgram] = useState(0);

  const carouselImages = [carousel1, carousel2];

  const stats = [
    { value: "95+", label: "Placements Rate", icon: Award },
    { value: "50+", label: "Industry Partners", icon: Users },
    { value: "20+", label: "Years of Excellence", icon: Calendar },
    { value: "95+", label: "Experienced Faculty", icon: GraduationCap }
  ];

  const programs = [
    {
      title: "MBA",
      duration: "2 Year Program",
      description: "Master of Business Administration",
      fullDescription: "Comprehensive management education with specializations in Finance, Marketing, HR, and Operations. Develop leadership skills and strategic thinking.",
      color: "program-mba",
      gradient: "linear-gradient(135deg, #a8b5d1 0%, #8b9bb0 100%)"
    },
    {
      title: "B.Tech",
      duration: "4 Year Program", 
      description: "Bachelor of Technology",
      fullDescription: "Engineering excellence across multiple disciplines including Computer Science, Electronics, Mechanical, and Civil Engineering with modern curriculum.",
      color: "program-btech",
      gradient: "linear-gradient(135deg, #b8c5d1 0%, #9fb8c7 100%)"
    }
  ];

  const upcomingEvents = [
    {
      date: "15",
      month: "JUN",
      year: "2025",
      title: "Industry Connect Summit",
      time: "10:00 AM - 4:00 PM",
      location: "Main Auditorium"
    },
    {
      date: "22",
      month: "JUN",
      year: "2025",
      title: "Tech Innovation Workshop",
      time: "2:00 PM - 5:00 PM",
      location: "Innovation Lab"
    },
    {
      date: "28",
      month: "JUN",
      year: "2025",
      title: "Career Guidance Seminar",
      time: "11:00 AM - 1:00 PM",
      location: "Conference Hall"
    },
    {
      date: "05",
      month: "JUL",
      year: "2025",
      title: "Alumni Meet & Greet",
      time: "6:00 PM - 9:00 PM",
      location: "Campus Garden"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate programs carousel
  useEffect(() => {
    const programTimer = setInterval(() => {
      setCurrentProgram((prev) => (prev + 1) % programs.length);
    }, 3500); // Change every 3.5 seconds
    return () => clearInterval(programTimer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const contentSection = document.getElementById('content-section');
    if (contentSection) {
      observer.observe(contentSection);
    }

    return () => observer.disconnect();
  }, []);

  // New effect for stats animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setStatsVisible(true);
    }, 500); // Start animation after component mounts
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="homepage">
      <div className="header-spacing">
        
        {/* Carousel Section */}
        <div className="carousel-container">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentSlide ? 'active' : 
                index < currentSlide ? 'prev' : 'next'
              }`}
            >
              <img
                src={image}
                alt={`Carousel ${index + 1}`}
                className="carousel-image"
              />
              <div className="carousel-overlay"></div>
            </div>
          ))}

          {/* Carousel Controls */}
          <button onClick={prevSlide} className="carousel-control prev">
            <ChevronLeft className="icon" />
          </button>
          <button onClick={nextSlide} className="carousel-control next">
            <ChevronRight className="icon" />
          </button>

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section - Positioned below carousel with spacing */}
        <div className="stats-section">
          <div className="stats-container">
            <div className="stats-grid">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index} 
                    className={`stat-card ${statsVisible ? 'animate-in' : ''}`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="stat-content">
                      <div className="stat-icon-container">
                        <div className="stat-icon-bg-pulse"></div>
                        <div className="stat-icon-bg-animate"></div>
                        <div className="stat-icon-border"></div>
                        <IconComponent className="stat-icon" />
                      </div>
                      <div className="stat-value-container">
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                      </div>
                    </div>
                    <div className="stat-card-glow"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Welcome Section with Programs */}
        <div className="welcome-programs-section">
          <div className="container">
            <div className="welcome-programs-grid">
              
              {/* Left Side - Welcome Content (Shrinked) */}
              <div className="welcome-content">
                <div className="welcome-card">
                  <h1 className="welcome-title">
                    Welcome to <span className="gradient-text">BMCE</span>
                  </h1>
                  <p className="welcome-description">
                    Baselios Mathews II College of Engineering (BMCE) is named after its founder, the late Η H Moran Mar Baselios Marthoma Mathews II, the sixth Catholicons of the East and the Malankara Metropolitan of Malankara Orthodox Church. This renowned college is managed by Dr. C T Eapen Trust under Malankara Orthodox Syrian Church.
                  </p>
                  <p className="welcome-description">
                    The institution started functioning in 2002 with the monumental objective of promoting academic excellence and competence in students, especially in the fast-growing global domain of Engineering and Technology.
                  </p>
                </div>
              </div>

              {/* Right Side - Programs Carousel */}
              <div className="programs-carousel-section">
                <h2 className="section-title">Our Programs</h2>
                <div className="section-underline"></div>
                
                <div className="program-carousel-container">
                  <div className="program-carousel-wrapper">
                    {programs.map((program, index) => (
                      <div
                        key={index}
                        className={`program-carousel-card ${
                          index === currentProgram ? 'active' : 'inactive'
                        }`}
                        style={{
                          background: program.gradient,
                          transform: `translateX(${(index - currentProgram) * 100}%)`,
                        }}
                      >
                        <div className="program-carousel-overlay"></div>
                        <div className="program-carousel-content">
                          <div className="program-badge">
                            <span className="program-duration">{program.duration}</span>
                          </div>
                          <h3 className="program-carousel-title">{program.title}</h3>
                          <p className="program-carousel-subtitle">{program.description}</p>
                          <p className="program-carousel-description">{program.fullDescription}</p>
                          <div className="program-features">
                            <div className="feature-dot"></div>
                            <div className="feature-dot"></div>
                            <div className="feature-dot"></div>
                          </div>
                        </div>
                        <div className="program-glow-effect"></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Program Indicators */}
                  <div className="program-indicators">
                    {programs.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProgram(index)}
                        className={`program-indicator ${index === currentProgram ? 'active' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Events Section */}
        {/*<div id="content-section" className="content-section">
          <div className="container">
            <div className="events-section">
              <h2 className="section-title">Upcoming Events</h2>
              <div className="section-underline"></div>

              <div className="events-grid">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`event-card ${
                      isVisible ? 'fade-in-up' : 'hidden'
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="event-content">
                      <div className="event-date">
                        <span className="event-date-number">{event.date}</span>
                        <span className="event-date-month">{event.month}</span>
                      </div>
                      
                      <div className="event-details">
                        <h3 className="event-title">{event.title}</h3>
                        <div className="event-info">
                          <div className="event-info-item">
                            <Clock className="event-icon" />
                            <span>{event.time}</span>
                          </div>
                          <div className="event-info-item">
                            <MapPin className="event-icon" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>*/}

      </div>
    </div>
  );
};

export default HomePage;