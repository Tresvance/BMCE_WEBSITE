import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Award, Calendar, GraduationCap, Clock, MapPin } from 'lucide-react';
import './Home.css';
import {  BookOpen, ArrowRight, Star } from 'lucide-react';

// Import images from assets folder
import image1 from '../../assets/bmce1.jpg';
import image2 from '../../assets/bmce2.jpg';
import princi from '../../assets/principal.png'

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [currentProgram, setCurrentProgram] = useState(0);

  // Images imported from assets folder
  const carouselImages = [
    { src: image1, alt: 'College Campus View 1' },
    { src: image2, alt: 'College Campus View 2' }
  ];

  const stats = [
    { value: "95+", label: "Placement Rate", icon: Award },
    { value: "50+", label: "Industry Partners", icon: Users },
    { value: "20+", label: "Yrs of Excellence", icon: Calendar },
    { value: "95+", label: "Experienced Faculty", icon: GraduationCap }
  ];

  const programs = [
    {
      title: "MBA",
      duration: "2 Year Program",
      color: "mba"
    },
    {
      title: "B.Tech",
      duration: "4 Year Program",
      color: "btech"
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
    }
  ];
  const navigationItems = [
    { id: 'accreditation', label: 'Accreditation' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'placement', label: 'Placement' },
    { id: 'academics', label: 'Academics' }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  useEffect(() => {
    const programTimer = setInterval(() => {
      setCurrentProgram((prev) => (prev + 1) % programs.length);
    }, 3500);
    return () => clearInterval(programTimer);
  }, [programs.length]);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const nextProgram = () => {
    setCurrentProgram((prev) => (prev + 1) % programs.length);
  };

  const prevProgram = () => {
    setCurrentProgram((prev) => (prev - 1 + programs.length) % programs.length);
  };

  return (
    <div className="homepage">
      
      {/* Header Section with Stats and Carousel */}
      <div className="header-grid">
        
        {/* Left Side - Stats and Programs */}
        <div className="left-section">
          {/* Stats Section */}
          <div className="stats-section">
            <div className="stats-grid">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index} 
                    className={`stat-card ${statsVisible ? 'visible' : ''}`}
                    style={{ 
                      transitionDelay: `${index * 150}ms`
                    }}
                  >
                    <div className="stat-content">
                      <div className="stat-icon-container">
                        <IconComponent className="stat-icon" />
                      </div>
                      <div className="stat-value">
                        {stat.value}
                      </div>
                      <div className="stat-label">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Programs Carousel Section - Simplified */}
          <div className="programs-elegant-section">
            <div className="programs-header">
              <h2 className="programs-elegant-title">Our Programs</h2>
              <div className="programs-title-underline"></div>
            </div>
            
            <div className="programs-elegant-container">
              <div className="programs-carousel-wrapper">
                {programs.map((program, index) => (
                  <div
                    key={index}
                    className={`program-elegant-slide ${currentProgram === index ? 'active' : ''}`}
                    style={{
                      transform: `translateX(${(index - currentProgram) * 100}%)`
                    }}
                  >
                    <div className={`program-elegant-card program-elegant-${program.color}`}>
                      <div className="program-elegant-content">
                        <h3 className="program-elegant-title">
                          {program.title}
                        </h3>
                        <div className="program-duration-badge">
                          <Clock className="duration-icon" />
                          {program.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Main Carousel */}
        <div className="carousel-container">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className="carousel-slide"
              style={{
                transform: `translateX(${(index - currentSlide) * 100}%)`
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="carousel-image"
              />
              <div className="carousel-overlay"></div>
            </div>
          ))}

          {/* Carousel Controls */}
          <button 
            onClick={prevSlide} 
            className="carousel-control prev"
          >
            <ChevronLeft />
          </button>
          
          <button 
            onClick={nextSlide}
            className="carousel-control next"
          >
            <ChevronRight />
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
      </div>

      {/* Welcome Section */}
      <div className="welcome-and-events">
        {/* Welcome Section */}
        <div className="welcome-section">
          <div className="welcome-container">
            <div className="welcome-card">
              <h1 className="welcome-title">
                Welcome to <span className="gradient-text">BMCE</span>
              </h1>

              <p className="welcome-description">
                Baselios Mathews II College of Engineering (BMCE) is named after its founder, the late H H Moran Mar Baselios Marthoma Mathews II, the sixth Catholicon of the East and the Malankara Metropolitan of Malankara Orthodox Church. He was also the first Chairman of the institution. This renowned college is managed by Dr. C T Eapen Trust under Malankara Orthodox Syrian Church.
              </p>

              <p className="welcome-description">
                The institution started functioning in 2002 with the monumental objective of promoting academic excellence and competence in students, especially in the fast-growing global domain of Engineering and Technology.
              </p>

              <p className="welcome-description">
                Located in the picturesquely beautiful Muthupilakadu in Sasthamcotta in the Kollam district of Kerala, the college stands out for its magnificent buildings and ultra-modern infrastructure; a fascinating blend of architectural excellence and functional values.
              </p>

              <p className="welcome-description">
                Affiliated to the University of Kerala and later to APJ Abdul Kalam Technological University, this self-financed institute currently provides 6 AICTE-approved UG courses.
              </p>
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div id="content-section" className="events-section">
          <div className="events-container">
            <h2 className="section-title">Upcoming Events</h2>
            <div className="section-underline"></div>

            {/* Scrollable Events List */}
            <div className="scrolling-events-list">
              <div className="scrolling-events">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="event-card">
                    <div className="event-content">
                      <div className="event-date">
                        <div className="event-date-number">{event.date}</div>
                        <div className="event-date-month">{event.month}</div>
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
        </div>
      </div>

      {/* Academic Programs Cards Section */}
      <div className="academic-programs-wrapper">
  <div className="academic-programs-container">
    {/* Section Header 
    <div className="programs-header">
      <div className="header-decoration">
        <div className="floating-elements">
          <div className="float-element element-1"></div>
          <div className="float-element element-2"></div>
          <div className="float-element element-3"></div>
        </div>
      </div>
    </div>*/}

    {/* Programs Grid */}
    <div className="programs-grid">
      {/* B.Tech Program - Left Aligned */}
      <div className="program-row row-left">
        <div className="program-card btech-program">
          <div className="card-glow"></div>
          <div className="card-header">
            <div className="program-icon">
              <BookOpen size={24} />
            </div>
            <div className="program-meta">
              <h3 className="program-title">Bachelor of Technology</h3>
              <div className="program-badge approved-badge">
                <Star size={14} />
                AICTE Approved
              </div>
            </div>
          </div>

          <div className="specializations-container">
            <div className="specializations-grid">
              <span className="spec-chip">Computer Science</span>
              <span className="spec-chip">Civil Engineering</span>
              <span className="spec-chip">Electronics</span>
              <span className="spec-chip">Mechanical</span>
            </div>
          </div>

          <div className="program-details">
            <div className="detail-item">
              <Clock size={16} />
              <span>4 Years Duration</span>
            </div>
            <div className="detail-item">
              <Users size={16} />
              <span>120 Seats Available</span>
            </div>
          </div>

          <div className="program-features">
            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-marker"></div>
                Industry-Ready Curriculum
              </div>
              <div className="feature-item">
                <div className="feature-marker"></div>
                State-of-Art Laboratories
              </div>
              <div className="feature-item">
                <div className="feature-marker"></div>
                100% Placement Assistance
              </div>
            </div>
          </div>

          <div className="card-footer">
            <button className="enroll-button">
              <span>Explore Program</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="program-visual">
          <div className="visual-content">
            <div className="stats-card">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Graduates</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Placement Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MBA Program - Right Aligned */}
      <div className="program-row row-right">
        <div className="program-visual">
          <div className="visual-content mba-visual">
            <div className="achievement-badge">
              <Award size={20} />
              <span>Top Ranked</span>
            </div>
            <div className="floating-icons">
              <div className="icon-float icon-1"></div>
              <div className="icon-float icon-2"></div>
              <div className="icon-float icon-3"></div>
            </div>
          </div>
        </div>

        <div className="program-card mba-program">
          <div className="card-glow"></div>
          <div className="card-header">
            <div className="program-icon">
              <Users size={24} />
            </div>
            <div className="program-meta">
              <h3 className="program-title">Master of Business Administration</h3>
              <div className="program-badge limited-badge">
                <Star size={14} />
                Limited Intake
              </div>
            </div>
          </div>

          <div className="program-details">
            <div className="detail-item">
              <Clock size={16} />
              <span>2 Years Duration</span>
            </div>
            <div className="detail-item">
              <Users size={16} />
              <span>60 Seats Only</span>
            </div>
          </div>

          <div className="program-features">
            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-marker"></div>
                International Faculty
              </div>
              <div className="feature-item">
                <div className="feature-marker"></div>
                Industry Partnerships
              </div>
              <div className="feature-item">
                <div className="feature-marker"></div>
                Global Exposure Programs
              </div>
            </div>
          </div>

          <div className="card-footer">
            <button className="enroll-button">
              <span>Explore Program</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Polytechnic Program - Left Aligned */}
      <div className="program-row row-left">
        <div className="program-card polytechnic-program">
          <div className="card-glow"></div>
          <div className="card-header">
            <div className="program-icon">
              <Award size={24} />
            </div>
            <div className="program-meta">
              <h3 className="program-title">Polytechnic Diploma</h3>
              <div className="program-badge success-badge">
                <Star size={14} />
                100% Placement
              </div>
            </div>
          </div>

          <div className="specializations-container">
            <div className="specializations-grid">
              <span className="spec-chip">Mechanical</span>
              <span className="spec-chip">Electrical</span>
              <span className="spec-chip">Civil</span>
            </div>
          </div>

          <div className="program-details">
            <div className="detail-item">
              <Clock size={16} />
              <span>3 Years Duration</span>
            </div>
            <div className="detail-item">
              <Users size={16} />
              <span>180 Seats Available</span>
            </div>
          </div>

          <div className="program-features">
            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-marker"></div>
                Hands-on Training
              </div>
              <div className="feature-item">
                <div className="feature-marker"></div>
                Industry Workshops
              </div>
              <div className="feature-item">
                <div className="feature-marker"></div>
                Skill Development Focus
              </div>
            </div>
          </div>

          <div className="card-footer">
            <button className="enroll-button">
              <span>Explore Program</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="program-visual">
          <div className="visual-content polytechnic-visual">
            <div className="skill-indicators">
              <div className="skill-ring">
                <div className="skill-progress" style={{'--progress': '90%'}}></div>
                <span className="skill-text">Practical Skills</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    {/*Principal Content*/}
    <div className="principal-background">
      <div className="college-welcome-container">
        <div className="welcome-section">
          <div className="welcome-content">
            <h2 className="welcome-title">Welcome from the College Principal</h2>
            <p className="welcome-text">
              Welcome to BMCE, where we strive to shape dedicated and inspiring educators. 
              At BMCE, we focus on academic excellence, character building, and innovative 
              teaching practices. Our committed faculty and supportive learning environment 
              help students grow into confident and responsible professionals. We warmly 
              invite you to be a part of our vibrant academic community.
            </p>
          </div>
          <div className="principal-image">
            <img 
              src={princi} 
              alt="College Principal" 
              className="principal-photo"
            />
          </div>
        </div>
      </div>
    </div>
     {/*navbuttons*/}
     <div className="principal-buttons">
      {navigationItems.map((item) => (
        <button 
          key={item.id}
          className="principal-btn"
          onClick={() => handleNavigation(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>
  </div>
  );
};

export default HomePage;