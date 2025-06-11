import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Award, Calendar, GraduationCap, Clock, MapPin } from 'lucide-react';
import './Home.css';
import {  BookOpen, ArrowRight, Star } from 'lucide-react';

// Import images from assets folder
import image1 from '../../assets/bmce1.jpg';
import image2 from '../../assets/bmce2.jpg';
import princi from '../../assets/principal.png'
import aarbee from '../../assets/aarbee.png';
import alliance from '../../assets/alliance.png';
import armstech from '../../assets/armstech.jpg';
import esaf from '../../assets/esaf.png';
import infosys from '../../assets/infosys.png';
import lulu from '../../assets/lulu.png';
import pnb from '../../assets/pnb.png';
import qspiders from '../../assets/qspiders.png';
import reliance from '../../assets/reliance.png';
import scheider from '../../assets/scheider.png';
import sutherland from '../../assets/sutherland.jpg';
import talrop from '../../assets/talrop.webp';
import techmagi from '../../assets/techmagi.webp';
import industrialParkImg from '../../assets/n-1.jpg';
import conferenceImg from '../../assets/ns-1.jpg';
import industrialVisitImg from '../../assets/ns-2.jpg';
import cseImage from '../../assets/cse.jpg';
import aiImage from '../../assets/ai.jpg';
import mechImage from '../../assets/mechanical.jpg';
import eeImage from '../../assets/electrical.jpg';
import civilImage from '../../assets/civil.jpg';
import brainBulbImage from '../../assets/entrepreneurialhum.png';
import teamMeetingImage from '../../assets/entrepreneurialbulb.png';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [currentProgram, setCurrentProgram] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Images imported from assets folder
  const carouselImages = [
    { src: image1, alt: 'College Campus View 1' },
    { src: image2, alt: 'College Campus View 2' }
  ];
  const cards = [
    {
      id: 1,
      title: 'Industrial Park',
      image: industrialParkImg
    },
    {
      id: 2,
      title: 'International Conference',
      image: conferenceImg
    },
    {
      id: 3,
      title: 'Industrial Visit',
      image: industrialVisitImg
    }
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
  const testimonials = [
    {
      id: 1,
      quote: "Staying on campus has truly enriched my college experience—it gave me the confidence to grow independently while staying connected to a supportive and inspiring community.",
      name: "Anand Raj",
      title: "Graphic Designer"
    },
    {
      id: 2,
      quote: "Staying on campus has truly enriched my college experience—it gave me the confidence to grow independently while staying connected to a supportive and inspiring community.",
      name: "Samuel T. G",
      title: "Business Man"
    }
  ];
  const companyLogos = [
    { id: 1, src: aarbee, alt: 'Aarbee', name: 'Aarbee' },
    { id: 2, src: alliance, alt: 'Alliance', name: 'Alliance' },
    { id: 3, src: armstech, alt: 'Armstech', name: 'Armstech' },
    { id: 4, src: esaf, alt: 'ESAF', name: 'ESAF' },
    { id: 5, src: infosys, alt: 'Infosys', name: 'Infosys' },
    { id: 6, src: lulu, alt: 'Lulu', name: 'Lulu' },
    { id: 7, src: pnb, alt: 'PNB', name: 'PNB' },
    { id: 8, src: qspiders, alt: 'QSpiders', name: 'QSpiders' },
    { id: 9, src: reliance, alt: 'Reliance', name: 'Reliance' },
    { id: 10, src: scheider, alt: 'Schneider', name: 'Schneider' },
    { id: 11, src: sutherland, alt: 'Sutherland', name: 'Sutherland' },
    { id: 12, src: talrop, alt: 'Talrop', name: 'Talrop' },
    { id: 13, src: techmagi, alt: 'Techmagi', name: 'Techmagi' },
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
  const courses = [
    {
      id: 1,
      title: "Computer Science & Engineering",
      image: cseImage,
      hodName: "Dennis Mathew",
      hodTitle: "Head Of Department"
    },
    {
      id: 2,
      title: "Artificial Intelligence",
      image: aiImage, 
      hodName: "Dennis Mathew",
      hodTitle: "Head Of Department"
    },
    {
      id: 3,
      title: "Mechanical Engineering",
      image: mechImage,
      hodName: "Dennis Mathew", 
      hodTitle: "Head Of Department"
    },
    {
      id: 4,
      title: "Electrical Engineering",
      image: eeImage,
      hodName: "Sarah Johnson",
      hodTitle: "Head Of Department"
    },
    {
      id: 5,
      title: "Civil Engineering",
      image: civilImage,
      hodName: "Michael Chen",
      hodTitle: "Head Of Department"
    }
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
  const dNextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === courses.length - 3 ? 0 : prevIndex + 1
    );
  };

  const dPrevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? courses.length - 3 : prevIndex - 1
    );
  };
  return (
    <div className="home-homepage">
      <div className="home-header-grid">
  <div className="home-left-section">
    <div className="home-stats-section">
      <div className="home-stats-grid">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div 
              key={index} 
              className={`home-stat-card ${statsVisible ? 'home-visible' : ''}`}
              style={{ 
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="home-stat-content">
                <div className="home-stat-icon-container">
                  <IconComponent className="home-stat-icon" />
                </div>
                <div className="home-stat-value">
                  {stat.value}
                </div>
                <div className="home-stat-label">
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    {/* Programs Carousel Section - Simplified */}
    <div className="home-programs-elegant-section">
      <div className="home-programs-header">
        <h2 className="home-programs-elegant-title">Our Programs</h2>
        <div className="home-programs-title-underline"></div>
      </div>
      
      <div className="home-programs-elegant-container">
        <div className="home-programs-carousel-wrapper">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`home-program-elegant-slide ${currentProgram === index ? 'home-active' : ''}`}
              style={{
                transform: `translateX(${(index - currentProgram) * 100}%)`
              }}
            >
              <div className={`home-program-elegant-card home-program-elegant-${program.color}`}>
                <div className="home-program-elegant-content">
                  <h3 className="home-program-elegant-title">
                    {program.title}
                  </h3>
                  <div className="home-program-duration-badge">
                    <Clock className="home-duration-icon" />
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
  <div className="home-carousel-container">
    {carouselImages.map((image, index) => (
      <div
        key={index}
        className="home-carousel-slide"
        style={{
          transform: `translateX(${(index - currentSlide) * 100}%)`
        }}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="home-carousel-image"
        />
        <div className="home-carousel-overlay"></div>
      </div>
    ))}
    {/* Carousel Controls */}
    <button 
      onClick={prevSlide} 
      className="home-carousel-control home-prev"
    >
      <ChevronLeft />
    </button>
    <button 
      onClick={nextSlide}
      className="home-carousel-control home-next"
    >
      <ChevronRight />
    </button>
    {/* Carousel Indicators */}
    <div className="home-carousel-indicators">
      {carouselImages.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`home-carousel-indicator ${index === currentSlide ? 'home-active' : ''}`}
        />
      ))}
    </div>
  </div>
</div>

      {/* Welcome Section */}
<div className="home-welcome-and-events">
  <div className="home-welcome-section">
    <div className="home-welcome-container">
      <div className="home-welcome-card">
        <h1 className="home-welcome-title">
          Welcome to <span className="home-gradient-text">BMCE</span>
        </h1>
        <p className="home-welcome-description">
          Baselios Mathews II College of Engineering (BMCE) is named after its founder, the late H H Moran Mar Baselios Marthoma Mathews II, the sixth Catholicon of the East and the Malankara Metropolitan of Malankara Orthodox Church. He was also the first Chairman of the institution. This renowned college is managed by Dr. C T Eapen Trust under Malankara Orthodox Syrian Church.
        </p>
        <p className="home-welcome-description">
          The institution started functioning in 2002 with the monumental objective of promoting academic excellence and competence in students, especially in the fast-growing global domain of Engineering and Technology.
        </p>
        <p className="home-welcome-description">
          Located in the picturesquely beautiful Muthupilakadu in Sasthamcotta in the Kollam district of Kerala, the college stands out for its magnificent buildings and ultra-modern infrastructure; a fascinating blend of architectural excellence and functional values.
        </p>
        <p className="home-welcome-description">
          Affiliated to the University of Kerala and later to APJ Abdul Kalam Technological University, this self-financed institute currently provides 6 AICTE-approved UG courses.
        </p>
      </div>
    </div>
  </div>

  {/* Events Section */}
  <div id="content-section" className="home-events-section">
    <div className="home-events-container">
      <h2 className="home-section-title">Upcoming Events</h2>
      <div className="home-section-underline"></div>

      {/* Scrollable Events List */}
      <div className="home-scrolling-events-list">
        <div className="home-scrolling-events">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="home-event-card">
              <div className="home-event-content">
                <div className="home-event-date">
                  <div className="home-event-date-number">{event.date}</div>
                  <div className="home-event-date-month">{event.month}</div>
                </div>
                <div className="home-event-details">
                  <h3 className="home-event-title">{event.title}</h3>
                  <div className="home-event-info">
                    <div className="home-event-info-item">
                      <Clock className="home-event-icon" />
                      <span>{event.time}</span>
                    </div>
                    <div className="home-event-info-item">
                      <MapPin className="home-event-icon" />
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
<div className="home-academic-programs-wrapper">
  <div className="home-academic-programs-container">
    {/* Section Header 
    <div className="home-programs-header">
      <div className="home-header-decoration">
        <div className="home-floating-elements">
          <div className="home-float-element home-element-1"></div>
          <div className="home-float-element home-element-2"></div>
          <div className="home-float-element home-element-3"></div>
        </div>
      </div>
    </div>*/}

    {/* Programs Grid */}
    <div className="home-programs-grid">
      {/* B.Tech Program - Left Aligned */}
      <div className="home-program-row home-row-left">
        <div className="home-program-card home-btech-program">
          <div className="home-card-glow"></div>
          <div className="home-card-header">
            <div className="home-program-icon">
              <BookOpen size={24} />
            </div>
            <div className="home-program-meta">
              <h3 className="home-program-title">Bachelor of Technology</h3>
              <div className="home-program-badge home-approved-badge">
                <Star size={14} />
                AICTE Approved
              </div>
            </div>
          </div>

          <div className="home-specializations-container">
            <div className="home-specializations-grid">
              <span className="home-spec-chip">Computer Science</span>
              <span className="home-spec-chip">Civil Engineering</span>
              <span className="home-spec-chip">Electronics</span>
              <span className="home-spec-chip">Mechanical</span>
            </div>
          </div>

          <div className="home-program-details">
            <div className="home-detail-item">
              <Clock size={16} />
              <span>4 Years Duration</span>
            </div>
            <div className="home-detail-item">
              <Users size={16} />
              <span>120 Seats Available</span>
            </div>
          </div>

          <div className="home-program-features">
            <div className="home-feature-list">
              <div className="home-feature-item">
                <div className="home-feature-marker"></div>
                Industry-Ready Curriculum
              </div>
              <div className="home-feature-item">
                <div className="home-feature-marker"></div>
                State-of-Art Laboratories
              </div>
              <div className="home-feature-item">
                <div className="home-feature-marker"></div>
                100% Placement Assistance
              </div>
            </div>
          </div>

          <div className="home-card-footer">
            <button className="home-enroll-button">
              <span>Explore Program</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="home-program-visual">
          <div className="home-visual-content">
            <div className="home-stats-card">
              <div className="home-stat-item">
                <div className="home-stat-number">500+</div>
                <div className="home-stat-label">Graduates</div>
              </div>
              <div className="home-stat-item">
                <div className="home-stat-number">95%</div>
                <div className="home-stat-label">Placement Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MBA Program - Right Aligned */}
      <div className="home-program-row home-row-right">
        <div className="home-program-visual">
          <div className="home-visual-content home-mba-visual">
            <div className="home-achievement-badge">
              <Award size={20} />
              <span>Top Ranked</span>
            </div>
            <div className="home-floating-icons">
              <div className="home-icon-float home-icon-1"></div>
              <div className="home-icon-float home-icon-2"></div>
              <div className="home-icon-float home-icon-3"></div>
            </div>
          </div>
        </div>

        <div className="home-program-card home-mba-program">
          <div className="home-card-glow"></div>
          <div className="home-card-header">
            <div className="home-program-icon">
              <Users size={24} />
            </div>
            <div className="home-program-meta">
              <h3 className="home-program-title">Master of Business Administration</h3>
              <div className="home-program-badge home-limited-badge">
                <Star size={14} />
                Limited Intake
              </div>
            </div>
          </div>

          <div className="home-program-details">
            <div className="home-detail-item">
              <Clock size={16} />
              <span>2 Years Duration</span>
            </div>
            <div className="home-detail-item">
              <Users size={16} />
              <span>60 Seats Only</span>
            </div>
          </div>

          <div className="home-program-features">
            <div className="home-feature-list">
              <div className="home-feature-item">
                <div className="home-feature-marker"></div>
                International Faculty
              </div>
              <div className="home-feature-item">
                <div className="home-feature-marker"></div>
                Industry Partnerships
              </div>
              <div className="home-feature-item">
                <div className="home-feature-marker"></div>
                Global Exposure Programs
              </div>
            </div>
          </div>

          <div className="home-card-footer">
            <button className="home-enroll-button">
              <span>Explore Program</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Polytechnic Program - Left Aligned */}
      <div className="home-program-row home-row-left">
        <div className="home-program-card home-polytechnic-program">
          <div className="home-card-glow"></div>
          <div className="home-card-header">
            <div className="home-program-icon">
              <Award size={24} />
            </div>
            <div className="home-program-meta">
              <h3 className="home-program-title">Polytechnic Diploma</h3>
              <div className="home-program-badge home-success-badge">
                <Star size={14} />
                100% Placement
              </div>
            </div>
          </div>

          <div className="home-specializations-container">
            <div className="home-specializations-grid">
              <span className="home-spec-chip">Mechanical</span>
              <span className="home-spec-chip">Electrical</span>
              <span className="home-spec-chip">Civil</span>
            </div>
          </div>

          <div className="home-program-details">
            <div className="home-detail-item">
              <Clock size={16} />
              <span>3 Years Duration</span>
            </div>
            <div className="home-detail-item">
              <Users size={16} />
              <span>180 Seats Available</span>
            </div>
          </div>

          <div className="home-program-features">
            <div className="home-feature-list">
              <div className="home-feature-item">
                <div className="home-feature-marker"></div>
                Hands-on Training
              </div>
              <div className="home-feature-item">
                <div className="home-feature-marker"></div>
                Industry Workshops
              </div>
              <div className="home-feature-item">
                <div className="home-feature-marker"></div>
                Skill Development Focus
              </div>
            </div>
          </div>

          <div className="home-card-footer">
            <button className="home-enroll-button">
              <span>Explore Program</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="home-program-visual">
          <div className="home-visual-content home-polytechnic-visual">
            <div className="home-skill-indicators">
              <div className="home-skill-ring">
                <div className="home-skill-progress" style={{'--progress': '90%'}}></div>
                <span className="home-skill-text">Practical Skills</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 {/* Principal Content */}
<div className="home-principal-background">
  <div className="home-college-welcome-container">
    <div className="home-welcome-section">
      <div className="home-welcome-content">
        <h2 className="home-pwelcome-title">Welcome from the College Principal</h2>
        <p className="home-welcome-text">
          Welcome to BMCE, where we strive to shape dedicated and inspiring educators. 
          At BMCE, we focus on academic excellence, character building, and innovative 
          teaching practices. Our committed faculty and supportive learning environment 
          help students grow into confident and responsible professionals. We warmly 
          invite you to be a part of our vibrant academic community.
        </p>
      </div>
      <div className="home-principal-image">
        <img 
          src={princi} 
          alt="College Principal" 
          className="home-principal-photo"
        />
      </div>
    </div>
  </div>
</div>
     {/* navbuttons */}
<div className="home-principal-buttons">
  {navigationItems.map((item) => (
    <button 
      key={item.id}
      className="home-principal-btn"
      onClick={() => handleNavigation(item.id)}
    >
      {item.label}
    </button>
  ))}
</div>
    {/*Placement section*/}
    <section className="home-placement-section">
  <div className="home-container">
    <h2 className="home-placement-title">Our Placement Partners</h2>
    <p className="home-placement-subtitle">
      Leading companies trust our graduates for their excellence and innovation
    </p>
    
    <div className="home-pcarousel-container">
      <div className="home-carousel-track">
        {/* First set of logos */}
        {companyLogos.map((company) => (
          <div key={`first-${company.id}`} className="home-company-card">
            <img 
              src={company.src} 
              alt={company.alt}
              className="home-company-logo"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {companyLogos.map((company) => (
          <div key={`second-${company.id}`} className="home-company-card">
            <img 
              src={company.src} 
              alt={company.alt}
              className="home-company-logo"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
    {/*Happenings*/}
    <div className="home-happenings-container">
  <h2 className="home-happenings-title">Happenings at BMCE</h2>
  <div className="home-cards-container">
    {cards.map((card) => (
      <div key={card.id} className="home-card">
        <div className="home-card-image">
          <img src={card.image} alt={card.title} />
        </div>
        <div className="home-card-overlay">
          <h3 className="home-card-title">{card.title}</h3>
        </div>
      </div>
    ))}
  </div>
</div>
    {/*Our Courses*/}
    <div className="home-dcarousel-container">
  <div className="home-dheader-section">
    <h1 className="home-dmain-title">Our Courses</h1>
    <h2 className="home-dsub-heading">Access Our Learning Resources Next</h2>
  </div>
  
  <div className="home-dcarousel-wrapper">
    <button className="home-dcarousel-btn home-prev-btn" onClick={dPrevSlide}>
      <ChevronLeft size={24} />
    </button>
    
    <div className="home-dcarousel-track">
      <div 
        className="home-dcarousel-content"
        style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
      >
        {courses.map((course) => (
          <div key={course.id} className="home-dcourse-card">
            <div className="home-dcard-image">
              <img src={course.image} alt={course.title} />
            </div>
            <div className="home-dcard-content">
              <h3 className="home-dcourse-title">{course.title}</h3>
              <div className="home-dhod-info">
                <div className="home-dhod-avatar"></div>
                <div className="home-dhod-details">
                  <p className="home-dhod-name">{course.hodName}</p>
                  <p className="home-dhod-title">{course.hodTitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <button className="home-dcarousel-btn home-dnext-btn" onClick={dNextSlide}>
      <ChevronRight size={24} />
    </button>
  </div>
  
  <div className="home-dcarousel-indicators">
    {Array.from({ length: Math.max(1, courses.length - 2) }).map((_, index) => (
      <button
        key={index}
        className={`home-indicator ${index === currentIndex ? 'home-active' : ''}`}
        onClick={() => setCurrentIndex(index)}
      />
    ))}
  </div>
</div>
    {/*Entrepreneurialship Cell */}
    <section className="home-eentrepreneurial-cell">
  <div className="home-econtainer">
    <h2 className="home-esection-title">Entrepreneurial Cell</h2>
    
    <div className="home-econtent-wrapper">
      <div className="home-eleft-image">
        <img src={brainBulbImage} alt="Brain with lightbulb representing innovation" />
      </div>

      <div className="home-econtent">
        <p>
          The Innovation and Entrepreneurship Development Cell (IEDC) is
          dedicated to fostering creativity and entrepreneurial thinking among
          students. It provides a supportive ecosystem where innovative ideas
          can be transformed into viable products or startups. Through
          workshops, mentorship programs, and industry collaborations, IEDC
          equips aspiring entrepreneurs with the skills and guidance they need.
          The cell plays a crucial role in building a culture of innovation within
          the academic community.
        </p>
      </div>

      <div className="home-eright-image">
        <img src={teamMeetingImage} alt="Team meeting with lightbulb concept" />
      </div>
    </div>
  </div>
</section>
    {/*Campus Life */}
<div className="home-cf-campus-facilities">
  {/* Hero Section */}
  <div className="home-cf-hero-section">
    <div className="home-cf-hero-overlay">
      <div className="home-cf-hero-content">
        <h2 className="home-cf-hero-subtitle">Infrastructure</h2>
        <h1 className="home-cf-hero-title">Campus Facilities</h1>
        <p className="home-cf-hero-description">
          Living on campus also fosters a strong sense of community, allowing students to collaborate, 
          share ideas, and build lifelong friendships in a vibrant academic environment.
        </p>
      </div>
    </div>
  </div>

  {/* Facilities Grid Section */}
  <div className="home-cf-facilities-section">
    <div className="home-cf-facilities-overlay">
      <div className="home-cf-facilities-content">
        <div className="home-cf-facilities-grid">
          <div className="home-cf-facility-card home-cf-campus-facilities-card">
            <h3>Campus Facilities</h3>
            <ul>
              <li>Student Societies & Club Infrastructure</li>
              <li>Auditorium / Seminar Hall</li>
            </ul>
          </div>
          
          <div className="home-cf-facility-card home-cf-academic-facilities-card">
            <h3>Academic Facilities</h3>
            <ul>
              <li>Classrooms</li>
              <li>Laboratories</li>
              <li>Library</li>
            </ul>
          </div>
          
          <div className="home-cf-facility-card home-cf-sports-health-card">
            <h3>Sports & Health Facilities</h3>
            <ul>
              <li>Sports</li>
              <li>Counseling</li>
              <li>Medical Room</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    {/*What people say */}
    <section className="home-testimonials-section">
  <div className="home-testimonials-container">
    <h2 className="home-testimonials-heading">WHAT PEOPLE SAY</h2>
    
    <div className="home-testimonials-grid">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="home-testimonial-card">
          <div className="home-quote-icon">"</div>
          <p className="home-testimonial-text">{testimonial.quote}</p>
          <div className="home-closing-quote">"</div>
          
          <div className="home-testimonial-author">
            <div className="home-author-avatar"></div>
            <div className="home-author-info">
              <h4 className="home-author-name">{testimonial.name}</h4>
              <p className="home-author-title">{testimonial.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  </div>
  );
};

export default HomePage;