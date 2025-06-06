
import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Award, BookOpen, Users, Building, ChevronRight, ExternalLink, GraduationCap, Shield, Heart, Target, ChevronUp, ChevronDown } from 'lucide-react';

const CollegeAdministrationPage = () => {
  const [activeTab, setActiveTab] = useState('governing-body');
  const [expandedMenus, setExpandedMenus] = useState({
    iqac: false,
    committees: false
  });

  const toggleMenu = (menuName) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  const administrationTeam = [
    {
      name: "His Holiness Mar Thomas Mathews",
      position: "MANAGING TRUSTEE & PATRON",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
      email: "patron@college.edu",
      phone: "+91-9876543210",
      bio: "His Holiness stands for education with spiritual enlightenment, adhering to the principles of academic integrity, thereby transforming students into technically competent professionals, for a bright and promising future of the society and nation."
    },
    {
      name: "Most Rev. Dr. Joseph Kallarangatt",
      position: "METROPOLITAN & MANAGER",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      email: "manager@college.edu",
      phone: "+91-9876543211",
      bio: "Imparting Education along moral values, ethics and concern for the fellow beings has been the focus of our institution. We believe in raising a generation of students with enthusiasm and passion who serve as responsible leaders focused on identifying human and environmental problems and finding solutions for them."
    },
    {
      name: "Rev. Fr. Thomas Varghese",
      position: "DIRECTOR",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      email: "director@college.edu",
      phone: "+91-9876543212",
      bio: "Noble as our thoughts- our institution has one of the finest and most efficient administration network in place. We realize the importance of an effective administration in education and our students' results is proof of the pudding. The college has grown by leaps and bounds thanks to the efforts of many individuals and the students."
    },
    {
      name: "Prof. Dr. L. Padma Suresh",
      position: "PRINCIPAL",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      email: "principal@college.edu",
      phone: "+91-9876543213",
      bio: "The college is truly blessed to be under the guidance of Prof. Dr. L. Padma Suresh, M.E, Ph.D (EEE), Ph.D (CSE), MISTE, with his vast experience and knowledge, he is certainly one of our most prized possessions. The College is sure to go places under his able and effective administration."
    }
  ];

  const governingBody = [
    { name: "His Holiness Mar Thomas Mathews", position: "Chairman & Patron" },
    { name: "Most Rev. Dr. Joseph Kallarangatt", position: "Metropolitan" },
    { name: "Rev. Fr. Thomas Varghese", position: "Director" },
    { name: "Prof. Dr. L. Padma Suresh", position: "Principal" },
    { name: "Dr. Sarah Wilson", position: "Vice Principal (Academic)" },
    { name: "Dr. Michael Johnson", position: "Vice Principal (Administration)" },
    { name: "Prof. Mary Thomas", position: "Controller of Examinations" },
    { name: "Dr. James Rodriguez", position: "Dean of Student Affairs" }
  ];

  const objectives = [
    "To provide quality technical education with moral and ethical values",
    "To develop technically competent and socially responsible engineers",
    "To promote research and innovation in engineering and technology",
    "To foster industry-academia collaboration for practical learning",
    "To create leaders who can contribute to national development",
    "To maintain high standards of academic excellence and integrity"
  ];

  const rightmenuItems = [
    { id: 'governing-body', label: 'Governing Body', icon: Shield },
    { id: 'our-team', label: 'Our Team', icon: Users },
    { id: 'directors-message', label: "Director's Message", icon: User },
    { id: 'principals-message', label: "Principal's Message", icon: GraduationCap },
    { id: 'deans', label: 'Deans', icon: Award },
    { id: 'organogram', label: 'Organogram', icon: Building },
    { id: 'phd-holders', label: 'Ph.D Holders', icon: GraduationCap },
    {
      id: 'iqac',
      label: 'IQAC',
      icon: Shield,
      hasDropdown: true,
      subItems: [
        { id: 'iqac-objectives', label: 'OBJECTIVES' },
        { id: 'iqac-vision', label: 'Vision' },
        { id: 'iqac-functions', label: 'FUNCTIONS & BENEFITS' },
        { id: 'iqac-policies', label: 'QUALITY POLICIES' },
        { id: 'iqac-aqar', label: 'AQAR REPORT' },
        { id: 'iqac-members', label: 'IQAC Members' }
      ]
    },
    {
      id: 'committees',
      label: 'Committees & Cell',
      icon: Users,
      hasDropdown: true,
      subItems: [
        { id: 'anti-ragging', label: 'Anti-ragging Committee' },
        { id: 'women-cell', label: 'Women Cell' },
        { id: 'sc-st', label: 'SC/ST Committee' },
        { id: 'grievance', label: 'Grievance Redressal Committee' },
        { id: 'anti-harassment', label: 'Anti-sexual Harassment Committee' },
        { id: 'exam-cell', label: 'Exam Cell' },
        { id: 'discipline', label: 'Discipline Committee' },
        { id: 'placement', label: 'Career Guidance and Placement Unit' },
        { id: 'student-welfare', label: 'Student Welfare Committee' },
        { id: 'library-council', label: 'Library Council' },
        { id: 'counselling', label: 'Counselling Cell' },
        { id: 'alumni', label: 'Alumni Association' },
        { id: 'online-grievance', label: 'Online Grievance Redressal Portal' }
      ]
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'our-team':
        return (
          <div className="content-section animate-fade-in">
            <div className="section-header">
              <div className="header-badge">
                <Users size={20} />
                <span>Leadership Team</span>
              </div>
              <h2>Our Distinguished Team</h2>
              <p>Meet our dedicated leadership team committed to excellence in education and holistic development of students</p>
            </div>
            
            <div className="team-grid">
              {administrationTeam.map((member, index) => (
                <div key={index} className="team-member" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="member-card">
                    <div className="member-image-container">
                      <div className="member-image">
                        <img src={member.image} alt={member.name} />
                      </div>
                      <div className="member-status"></div>
                    </div>
                    <div className="member-content">
                      <div className="member-header">
                        <h3 className="member-name">{member.name}</h3>
                        <span className="member-position">{member.position}</span>
                      </div>
                      <p className="member-bio">{member.bio}</p>
                      <div className="member-contact">
                        <div className="contact-item">
                          <div className="contact-icon">
                            <Mail size={16} />
                          </div>
                          <span>{member.email}</span>
                        </div>
                        <div className="contact-item">
                          <div className="contact-icon">
                            <Phone size={16} />
                          </div>
                          <span>{member.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'governing-body':
        return (
          <div className="content-section animate-fade-in">
            <div className="section-header">
              <div className="header-badge">
                <Shield size={20} />
                <span>Governance</span>
              </div>
              <h2>Governing Body</h2>
              <p>The distinguished members who provide strategic guidance and oversight to our institution</p>
            </div>
            <div className="governing-body-container">
              {governingBody.map((member, index) => (
                <div key={index} className="governing-member" style={{ animationDelay: `${index * 50}ms` }}>
                  <div className="governing-avatar">
                    <User size={24} />
                  </div>
                  <div className="governing-details">
                    <h4 className="governing-name">{member.name}</h4>
                    <p className="governing-position">{member.position}</p>
                  </div>
                  <div className="governing-badge">
                    <Shield size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'iqac-objectives':
        return (
          <div className="content-section animate-fade-in">
            <div className="section-header">
              <div className="header-badge">
                <Target size={20} />
                <span>Quality Assurance</span>
              </div>
              <h2>IQAC Objectives</h2>
              <p>Our comprehensive framework for maintaining and enhancing educational quality standards</p>
            </div>
            <div className="objectives-container">
              {objectives.map((objective, index) => (
                <div key={index} className="objective-card" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="objective-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="objective-content">
                    <div className="objective-icon">
                      <Target size={24} />
                    </div>
                    <p className="objective-text">{objective}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'iqac-vision':
        return (
          <div className="content-section animate-fade-in">
            <div className="section-header">
              <div className="header-badge">
                <Heart size={20} />
                <span>Our Direction</span>
              </div>
              <h2>Vision & Mission</h2>
              <p>Guiding principles that shape our commitment to educational excellence</p>
            </div>
            <div className="vision-mission-container">
              <div className="vision-card">
                <div className="card-header">
                  <div className="card-icon vision-icon">
                    <Heart size={32} />
                  </div>
                  <h3>Our Vision</h3>
                </div>
                <div className="card-content">
                  <p>
                    To be a center of excellence in technical education, fostering innovation, research, and holistic development of students while upholding moral and ethical values to create globally competent engineers and leaders.
                  </p>
                </div>
              </div>
              <div className="mission-card">
                <div className="card-header">
                  <div className="card-icon mission-icon">
                    <Target size={32} />
                  </div>
                  <h3>Our Mission</h3>
                </div>
                <div className="card-content">
                  <p>
                    Our mission is to provide quality technical education integrated with spiritual and moral values, promote research and innovation, foster industry collaboration, and develop socially responsible engineers who contribute to the betterment of society and nation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="content-section animate-fade-in">
            <div className="section-header">
              <div className="header-badge">
                <BookOpen size={20} />
                <span>Information</span>
              </div>
              <h2 style={{ textTransform: 'capitalize' }}>{activeTab.replace('-', ' ')}</h2>
              <p>Detailed information about this section</p>
            </div>
            <div className="placeholder-content">
              <div className="placeholder-icon">
                <BookOpen size={64} />
              </div>
              <h3>Content Under Development</h3>
              <p>This section is currently being developed with comprehensive information. Please check back soon for detailed updates and resources.</p>
              <div className="placeholder-actions">
                <button className="btn-secondary">
                  <Mail size={16} />
                  Contact for Info
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="administration-page">
      <style jsx>{`
        /* Professional College Administration Styles */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700&display=swap');

        /* CSS Variables for consistent theming */
        :root {
          --primary-color: #1543C1FF;
          --primary-light: #3b82f6;
          --primary-dark: #1e40af;
          --secondary-color: #7c3aed;
          --accent-color: #f59e0b;
          --success-color: #10b981;
          --error-color: #ef4444;
          --warning-color: #f59e0b;
          
          --text-primary: #1f2937;
          --text-secondary: #6b7280;
          --text-light: #9ca3af;
          
          --bg-primary: #ffffff;
          --bg-secondary: #f9fafb;
          --bg-tertiary: #f3f4f6;
          --bg-overlay: rgba(0, 0, 0, 0.5);
          
          --border-color: #e5e7eb;
          --border-light: #f3f4f6;
          
          --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          
          --radius-sm: 0.375rem;
          --radius-md: 0.5rem;
          --radius-lg: 0.75rem;
          --radius-xl: 1rem;
          
          --transition-fast: 0.15s ease-in-out;
          --transition-normal: 0.25s ease-in-out;
          --transition-slow: 0.35s ease-in-out;
        }

        /* Animation Keyframes */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Base Styles */
        .administration-page {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: var(--bg-secondary);
          min-height: 100vh;
          color: var(--text-primary);
          line-height: 1.6;
        }

        /* Utility Classes */
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slide-in {
          animation: slideInRight 0.5s ease-out;
        }

        .animate-scale-in {
          animation: scaleIn 0.4s ease-out;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          height: 30vh;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=1080&fit=crop&crop=center');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(30, 58, 138, 0.85) 0%,
            rgba(124, 58, 237, 0.85) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          color: white;
          max-width: 800px;
          padding: 0 2rem;
          animation: fadeIn 1s ease-out;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 2rem;
          animation: slideInRight 0.8s ease-out 0.2s both;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 700;
          margin: 0 0 1.5rem 0;
          letter-spacing: -0.02em;
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          animation: fadeIn 1s ease-out 0.4s both;
        }

        .hero-subtitle {
          font-size: clamp(1.125rem, 3vw, 1.5rem);
          font-weight: 400;
          margin: 0 0 3rem 0;
          opacity: 0.95;
          animation: fadeIn 1s ease-out 0.6s both;
        }

        .hero-stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 3rem;
          animation: fadeIn 1s ease-out 0.8s both;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          font-family: 'Playfair Display', serif;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.875rem;
          opacity: 0.9;
          font-weight: 500;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.3);
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          opacity: 0.9;
          animation: fadeIn 1s ease-out 1s both;
        }

        .breadcrumb span:last-child {
          font-weight: 600;
        }

        .hero-decoration {
          position: absolute;
          top: 20%;
          right: 10%;
          z-index: 5;
        }

        .decoration-circle {
          width: 200px;
          height: 200px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          position: absolute;
          animation: float 6s ease-in-out infinite;
        }

        .decoration-circle:nth-child(2) {
          width: 150px;
          height: 150px;
          top: 50px;
          left: 30px;
          animation-delay: -2s;
        }

        .decoration-circle:nth-child(3) {
          width: 100px;
          height: 100px;
          top: 100px;
          left: 60px;
          animation-delay: -4s;
        }

        /* Main Container */
        .main-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 2rem 2rem;
        }

        .content-layout {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 3rem;
          align-items: start;
        }

        /* Main Content */
        .main-content {
          background: var(--bg-primary);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
          animation: fadeIn 0.8s ease-out;
        }

        .content-section {
          padding: 3rem;
        }

        .section-header {
          margin-bottom: 3rem;
          text-align: center;
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, var(--primary-light), var(--secondary-color));
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          box-shadow: var(--shadow-md);
        }

        .section-header h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          margin: 0 0 1rem 0;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-header p {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Team Grid */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .team-member {
          animation: fadeIn 0.6s ease-out both;
        }

        .member-card {
          background: var(--bg-primary);
          border-radius: var(--radius-xl);
          padding: 2rem;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-light);
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
        }

        .member-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(135deg, var(--primary-light), var(--secondary-color));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform var(--transition-normal);
        }

        .member-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
        }

        .member-card:hover::before {
          transform: scaleX(1);
        }

        .member-image-container {
          position: relative;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .member-image {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto;
          position: relative;
          border: 4px solid var(--border-light);
          transition: all var(--transition-normal);
        }

        .member-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-normal);
        }

        .member-card:hover .member-image img {
          transform: scale(1.1);
        }

        .member-status {
          position: absolute;
          bottom: 8px;
          right: 8px;
          width: 20px;
          height: 20px;
          background: var(--success-color);
          border: 3px solid var(--bg-primary);
          border-radius: 50%;
        }

        .member-content {
          text-align: center;
        }

        .member-header {
          margin-bottom: 1rem;
        }

        .member-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 0.5rem 0;
        }

        .member-position {
          display: inline-block;
          background: linear-gradient(135deg, var(--primary-light), var(--secondary-color));
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .member-bio {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 1.5rem 0;
        }

        .member-contact {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: var(--bg-tertiary);
          border-radius: 50%;
          color: var(--primary-light);
        }

        /* Governing Body */
        .governing-body-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
        }

        .governing-member {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: var(--bg-primary);
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-light);
          transition: all var(--transition-normal);
          animation: fadeIn 0.5s ease-out both;
          position: relative;
          overflow: hidden;
        }

        .governing-member::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(135deg, var(--primary-light), var(--secondary-color));
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform var(--transition-normal);
        }

        .governing-member:hover {
          transform: translateX(8px);
          box-shadow: var(--shadow-lg);
        }

        .governing-member:hover::before {
          transform: scaleY(1);
        }

        .governing-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary-light), var(--secondary-color));
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .governing-details {
          flex: 1;
        }

        .governing-name {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 0.25rem 0;
        }

        .governing-position {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .governing-badge {
          color: var(--primary-light);
          opacity: 0.7;
        }

        /* Objectives */
        .objectives-container {
          display: grid;
          gap: 1.5rem;
        }

        .objective-card {
          display: flex;
          gap: 1.5rem;
          background: var(--bg-primary);
          padding: 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-light);
          transition: all var(--transition-normal);
          animation: fadeIn 0.6s ease-out both;
          position: relative;
          overflow: hidden;
        }

        .objective-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(135deg, var(--primary-light), var(--secondary-color));
          opacity: 0;
          transition: opacity var(--transition-normal);
        }

        .objective-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .objective-card:hover::before {
          opacity: 1;
        }

        .objective-number {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-light);
          min-width: 60px;
          text-align: center;
          align-self: flex-start;
        }

        .objective-content {
          flex: 1;
        }

        .objective-icon {
          color: var(--secondary-color);
          margin-bottom: 1rem;
        }

        .objective-text {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin: 0;
        }

        /* Vision & Mission */
        .vision-mission-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .vision-card,
        .mission-card {
          background: var(--bg-primary);
          border-radius: var(--radius-xl);
          padding: 2.5rem;
          border: 1px solid var(--border-light);
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
        }

        .vision-card::before,
        .mission-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          transition: transform var(--transition-normal);
          transform: scaleX(0);
          transform-origin: left;
        }

        .vision-card::before {
          background: linear-gradient(135deg, var(--primary-light), var(--accent-color));
        }

        .mission-card::before {
          background: linear-gradient(135deg, var(--secondary-color), var(--primary-light));
        }

        .vision-card:hover,
        .mission-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
        }

        .vision-card:hover::before,
        .mission-card:hover::before {
          transform: scaleX(1);
        }

        .card-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .card-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: white;
        }

        .vision-icon {
          background: linear-gradient(135deg, var(--primary-light), var(--accent-color));
        }

        .mission-icon {
          background: linear-gradient(135deg, var(--secondary-color), var(--primary-light));
        }

        .card-header h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          font-weight: 700;
          margin: 0;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card-content p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin: 0;
        }

        /* Placeholder Content */
        .placeholder-content {
          text-align: center;
          padding: 4rem 2rem;
          color: var(--text-secondary);
        }

        .placeholder-icon {
          margin-bottom: 2rem;
          color: var(--text-light);
        }

        .placeholder-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: var(--text-primary);
        }

        .placeholder-content p {
          font-size: 1.1rem;
          max-width: 500px;
          margin: 0 auto 2rem;
        }

        .placeholder-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .btn-secondary {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-tertiary);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-md);
          font-weight: 500;
          transition: all var(--transition-normal);
          cursor: pointer;
        }

        .btn-secondary:hover {
          background: var(--primary-light);
          color: white;
          border-color: var(--primary-light);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

       /* Rightbar */
.rightmenu {
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  position: sticky;
  top: 3rem;
  border: 1px solid #e2e8f0;
}
 


.rightbar-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  backdrop-filter: blur(10px);
}

.rightbar-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.rightbar-header p {
  font-size: 0.95rem;
  opacity: 0.9;
  margin: 0;
}

.rightbar-nav {
  padding: 1rem 0;
}




        .nav-group {
          margin-bottom: 0.25rem;
        }

        .nav-link {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          transition: all var(--transition-normal);
          font-size: 0.95rem;
          color: var(--text-secondary);
          border-left: 3px solid transparent;
          position: relative;
        }

        .nav-link-content {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nav-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-md);
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          transition: all var(--transition-normal);
        }

        .nav-text {
          font-weight: 500;
        }

        .nav-link:hover {
          background: var(--bg-tertiary);
          color: var(--primary-light);
          border-left-color: var(--primary-light);
        }

        .nav-link:hover .nav-icon {
          background: var(--primary-light);
          color: white;
          transform: scale(1.05);
        }

        .nav-link.active {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(124, 58, 237, 0.1));
          color: var(--primary-light);
          border-left-color: var(--primary-light);
          font-weight: 600;
        }

        .nav-link.active .nav-icon {
          background: var(--primary-light);
          color: white;
        }

        .active-indicator {
          position: absolute;
          right: 1rem;
          width: 8px;
          height: 8px;
          background: var(--primary-light);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .dropdown-toggle.expanded {
          background: var(--bg-tertiary);
          color: var(--primary-light);
        }

        .dropdown-indicator {
          transition: transform var(--transition-normal);
        }

        .dropdown-toggle.expanded .dropdown-indicator {
          transform: rotate(180deg);
        }

        .dropdown-content {
          background: var(--bg-tertiary);
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--transition-normal);
        }

        .dropdown-content.expanded {
          max-height: 500px;
        }

        .sub-link {
          padding: 0.75rem 1.5rem 0.75rem 3.5rem;
          font-size: 0.875rem;
          border-left: 3px solid transparent;
        }

        .sub-link:hover {
          background: var(--bg-secondary);
          color: var(--primary-light);
          border-left-color: var(--primary-light);
        }

        .sub-link.active {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(124, 58, 237, 0.1));
          color: var(--primary-light);
          border-left-color: var(--primary-light);
          font-weight: 600;
        }

      

        .contact-card {
          background: var(--bg-tertiary);
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          text-align: center;
        }

        .contact-card h4 {
          font-size: 1.125rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: var(--text-primary);
        }

        .contact-card p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin: 0 0 1rem 0;
        }

        .contact-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          background: var(--primary-light);
          color: white;
          border: none;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .contact-button:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .content-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .sidebar {
            position: static;
            max-height: none;
            order: -1;
          }

          .hero-stats {
            gap: 1rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .main-container {
            margin-right: 300px; /* Adjust to match sidebar width */

            padding: 2rem 1rem;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            height: 80vh;
            min-height: 500px;
          }

          .hero-content {
            padding: 0 1rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 1rem;
          }

          .stat-divider {
            width: 40px;
            height: 1px;
          }

          .content-section {
            padding: 2rem 1.5rem;
          }

          .team-grid {
            grid-template-columns: 1fr;
          }

          .governing-body-container {
            grid-template-columns: 1fr;
          }

          .vision-mission-container {
            grid-template-columns: 1fr;
          }

          .objective-card {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .objective-number {
            align-self: center;
          }

          .nav-link {
            padding: 0.875rem 1rem;
            font-size: 0.9rem;
          }

          .sub-link {
            padding: 0.75rem 1rem 0.75rem 2.5rem;
            font-size: 0.825rem;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            height: 70vh;
            min-height: 400px;
          }

          .content-section {
            padding: 1.5rem 1rem;
          }

          .member-card {
            padding: 1.5rem;
          }

          .member-image {
            width: 100px;
            height: 100px;
          }

          .sidebar-header {
            padding: 1.5rem;
          }

          .sidebar-icon {
            width: 50px;
            height: 50px;
          }

          .sidebar-header h3 {
            font-size: 1.25rem;
          }

          .hero-decoration {
            display: none;
          }
        }
      `}</style>

      {/* Enhanced Hero Section */}
      <div className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
        
          <h1 className="hero-title">ADMINISTRATION</h1>
          <p className="hero-subtitle">Excellence in Technical Education & Leadership</p>
          
          <div className="breadcrumb">
            <span>Home</span>
            <ChevronRight size={16} />
            <span>Administration</span>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="decoration-circle"></div>
          <div className="decoration-circle"></div>
          <div className="decoration-circle"></div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-container">
        <div className="content-layout">
          {/* Primary Content */}
          <main className="main-content">
            {renderContent()}
          </main>

          {/* Enhanced Sidebar */}
         <aside className="rightbar">


  <nav className="rightbar-nav">
    {rightmenuItems.map((item) => {
      const IconComponent = item.icon;
      return (
        <div key={item.id} className="nav-group">
          {item.hasDropdown ? (
            <>
              <button
                onClick={() => toggleMenu(item.id)}
                className={`nav-link dropdown-toggle ${expandedMenus[item.id] ? 'expanded' : ''}`}
              >
                <div className="nav-link-content">
                  <div className="nav-icon">
                    <IconComponent size={18} />
                  </div>
                  <span className="nav-text">{item.label}</span>
                </div>
                <div className="dropdown-indicator">
                  {expandedMenus[item.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </button>
              <div className={`dropdown-content ${expandedMenus[item.id] ? 'expanded' : ''}`}>
                {item.subItems.map((subItem) => (
                  <button
                    key={subItem.id}
                    onClick={() => setActiveTab(subItem.id)}
                    className={`nav-link sub-link ${activeTab === subItem.id ? 'active' : ''}`}
                  >
                    <span className="nav-text">{subItem.label}</span>
                    {activeTab === subItem.id && <div className="active-indicator"></div>}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <button
              onClick={() => setActiveTab(item.id)}
              className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
            >
              <div className="nav-link-content">
                <div className="nav-icon">
                  <IconComponent size={18} />
                </div>
                <span className="nav-text">{item.label}</span>
              </div>
              {activeTab === item.id && <div className="active-indicator"></div>}
            </button>
          )}
        </div>
      );
    })}
  </nav>


</aside>

        </div>
      </div>
    </div>
  );
};

export default CollegeAdministrationPage;