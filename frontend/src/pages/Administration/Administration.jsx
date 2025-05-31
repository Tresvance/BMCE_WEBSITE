import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Award, BookOpen, Users, Building, ChevronRight, ExternalLink, GraduationCap, Shield, Heart, Target, ChevronUp, ChevronDown } from 'lucide-react';
import '../Administration/Administration.css';

const CollegeAdministrationPage = () => {
  const [activeTab, setActiveTab] = useState('our-team');
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

  const committees = [
    { name: "Anti-ragging Committee", head: "Dr. Sarah Wilson" },
    { name: "Women Cell", head: "Prof. Mary Thomas" },
    { name: "SC/ST Committee", head: "Dr. Michael Johnson" },
    { name: "Grievance Redressal Committee", head: "Dr. James Rodriguez" },
    { name: "Anti-sexual Harassment Committee", head: "Prof. Lisa Anderson" },
    { name: "Exam Cell", head: "Dr. Robert Chen" },
    { name: "Discipline Committee", head: "Rev. Fr. Thomas Varghese" },
    { name: "Career Guidance and Placement Unit", head: "Dr. Emily Davis" },
    { name: "Student Welfare Committee", head: "Prof. David Martinez" },
    { name: "Library Council", head: "Dr. Rachel Green" },
    { name: "Counselling Cell", head: "Dr. Alex Kumar" },
    { name: "Alumni Association", head: "Prof. Maria Santos" },
    { name: "Online Grievance Redressal Portal", head: "Dr. Tech Support" }
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
          <div className="content-section">
            <div className="section-header">
              <h2>Our Team</h2>
              <p>Meet our dedicated leadership team committed to excellence in education</p>
            </div>
            
            <div className="team-grid">
              {administrationTeam.map((member, index) => (
                <div key={index} className="team-member">
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-position">{member.position}</p>
                    <p className="member-bio">{member.bio}</p>
                    <div className="contact-info">
                      <div className="contact-item">
                        <Mail size={16} />
                        <span>{member.email}</span>
                      </div>
                      <div className="contact-item">
                        <Phone size={16} />
                        <span>{member.phone}</span>
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
          <div className="content-section">
            <div className="section-header">
              <h2>Governing Body</h2>
              <p>The distinguished members who guide our institution</p>
            </div>
            <div className="governing-grid">
              {governingBody.map((member, index) => (
                <div key={index} className="governing-member">
                  <div className="governing-avatar">
                    <User size={24} />
                  </div>
                  <div className="governing-info">
                    <h4 className="governing-name">{member.name}</h4>
                    <p className="governing-position">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'iqac-objectives':
        return (
          <div className="content-section">
            <div className="section-header">
              <h2>IQAC Objectives</h2>
              <p>Our commitment to quality and continuous improvement</p>
            </div>
            <div className="objectives-list">
              {objectives.map((objective, index) => (
                <div key={index} className="objective-item">
                  <Target size={20} className="objective-icon" />
                  <p className="objective-text">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'iqac-vision':
        return (
          <div className="content-section">
            <div className="section-header">
              <h2>IQAC Vision & Mission</h2>
            </div>
            <div className="vision-mission">
              <div className="vision-card">
                <div className="card-icon">
                  <Heart size={32} />
                </div>
                <h3 className="vision-title">Vision</h3>
                <p className="vision-text">
                  To be a center of excellence in technical education, fostering innovation, research, and holistic development of students while upholding moral and ethical values to create globally competent engineers and leaders.
                </p>
              </div>
              <div className="mission-card">
                <div className="card-icon">
                  <Target size={32} />
                </div>
                <h3 className="mission-title">Mission</h3>
                <p className="mission-text">
                  Our mission is to provide quality technical education integrated with spiritual and moral values, promote research and innovation, foster industry collaboration, and develop socially responsible engineers who contribute to the betterment of society and nation.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="content-section">
            <div className="section-header">
              <h2 style={{ textTransform: 'capitalize' }}>{activeTab.replace('-', ' ')}</h2>
            </div>
            <div className="placeholder-content">
              <BookOpen size={64} className="placeholder-icon" />
              <h3>Content Coming Soon</h3>
              <p>This section is currently being developed. Please check back soon for updates.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="admin-page">
      {/* Hero Banner */}
      <div className="hero-banner">
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
      </div>

      <div className="main-container">
        <div className="content-wrapper">
          {/* Main Content */}
          <div className="main-content">
            {renderContent()}
          </div>

          {/* Right Sidebar */}
          <div className="rightmenu">
            <div className="rightmenu-header">
              <h3>Administration</h3>
            </div>
            <nav className="rightmenu-nav">
              {rightmenuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.id} className="nav-item">
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => toggleMenu(item.id)}
                          className={`nav-button dropdown-toggle ${expandedMenus[item.id] ? 'expanded' : ''}`}
                        >
                          <div className="nav-button-content">
                            <IconComponent size={18} />
                            <span>{item.label}</span>
                          </div>
                          {expandedMenus[item.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                        {expandedMenus[item.id] && (
                          <div className="dropdown-menu">
                            {item.subItems.map((subItem) => (
                              <button
                                key={subItem.id}
                                onClick={() => setActiveTab(subItem.id)}
                                className={`nav-button sub-item ${activeTab === subItem.id ? 'active' : ''}`}
                              >
                                <span>{subItem.label}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <button
                        onClick={() => setActiveTab(item.id)}
                        className={`nav-button ${activeTab === item.id ? 'active' : ''}`}
                      >
                        <div className="nav-button-content">
                          <IconComponent size={18} />
                          <span>{item.label}</span>
                        </div>
                      </button>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      <style jsx>{`
        .admin-page {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          min-height: 100vh;
          background: #f8fafc;
        }

        .hero-banner {
          position: relative;
          height: 400px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          background-image: url('https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=400&fit=crop&crop=top');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          padding: 0 20px;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          margin: 0 0 1rem 0;
          text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
          letter-spacing: 2px;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 300;
          margin: 0 0 2rem 0;
          opacity: 0.95;
          text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 1rem;
          opacity: 0.9;
        }

        .breadcrumb span:last-child {
          font-weight: 600;
        }

        .main-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem;
        }

        .content-wrapper {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 3rem;
          align-items: start;
        }

        .main-content {
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          overflow: hidden;
        }

        .content-section {
          padding: 2.5rem;
        }

        .section-header {
          margin-bottom: 2.5rem;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 1.5rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a202c;
          margin: 0 0 0.5rem 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-header p {
          font-size: 1.1rem;
          color: #718096;
          margin: 0;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .team-member {
          background: #f8fafc;
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .team-member:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .member-image {
          width: 120px;
          height: 120px;
          margin: 0 auto 1.5rem auto;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #667eea;
          box-shadow: 0 8px 16px rgba(102, 126, 234, 0.2);
        }

        .member-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .member-info {
          text-align: center;
        }

        .member-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1a202c;
          margin: 0 0 0.5rem 0;
        }

        .member-position {
          font-size: 1rem;
          font-weight: 600;
          color: #667eea;
          margin: 0 0 1rem 0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .member-bio {
          font-size: 1rem;
          color: #4a5568;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: #718096;
        }

        .governing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .governing-member {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .governing-member:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-color: #667eea;
        }

        .governing-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .governing-info {
          flex: 1;
        }

        .governing-name {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1a202c;
          margin: 0 0 0.25rem 0;
        }

        .governing-position {
          font-size: 1rem;
          color: #718096;
          margin: 0;
        }

        .objectives-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .objective-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 12px;
          border-left: 4px solid #667eea;
        }

        .objective-icon {
          color: #667eea;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }

        .objective-text {
          font-size: 1.1rem;
          color: #4a5568;
          margin: 0;
          line-height: 1.6;
        }

        .vision-mission {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .vision-card, .mission-card {
          background: white;
          border-radius: 16px;
          padding: 2.5rem;
          text-align: center;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .vision-card:hover, .mission-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .vision-card {
          border-top: 4px solid #667eea;
        }

        .mission-card {
          border-top: 4px solid #764ba2;
        }

        .card-icon {
          margin: 0 auto 1.5rem auto;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .vision-title, .mission-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .vision-text, .mission-text {
          font-size: 1.1rem;
          color: #4a5568;
          line-height: 1.7;
          margin: 0;
        }

        .placeholder-content {
          text-align: center;
          padding: 4rem 2rem;
          color: #718096;
        }

        .placeholder-icon {
          margin: 0 auto 1.5rem auto;
          color: #cbd5e0;
        }

        .placeholder-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: #4a5568;
        }

        .rightmenu {
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          position: sticky;
          top: 2rem;
          max-height: calc(100vh - 4rem);
          overflow-y: auto;
        }

        .rightmenu-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1.5rem;
          text-align: center;
        }

        .rightmenu-header h3 {
          font-size: 1.3rem;
          font-weight: 700;
          margin: 0;
          letter-spacing: 1px;
        }

        .rightmenu-nav {
          padding: 1rem 0;
        }

        .nav-item {
          margin-bottom: 0.25rem;
        }

        .nav-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          color: #4a5568;
          border-left: 3px solid transparent;
        }

        .nav-button-content {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nav-button:hover {
          background: #f7fafc;
          color: #667eea;
          border-left-color: #e2e8f0;
        }

        .nav-button.active {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          color: #667eea;
          border-left-color: #667eea;
          font-weight: 600;
        }

        .nav-button.dropdown-toggle.expanded {
          background: #f7fafc;
          color: #667eea;
        }

        .dropdown-menu {
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
        }

        .nav-button.sub-item {
          padding: 0.75rem 1.5rem 0.75rem 3rem;
          font-size: 0.9rem;
          color: #718096;
          border-left: 3px solid transparent;
        }

        .nav-button.sub-item:hover {
          background: #edf2f7;
          color: #667eea;
          border-left-color: #cbd5e0;
        }

        .nav-button.sub-item.active {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          color: #667eea;
          border-left-color: #667eea;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .rightmenu {
            position: static;
            max-height: none;
          }

          .hero-title {
            font-size: 3rem;
          }

          .hero-subtitle {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 768px) {
          .main-container {
            padding: 1rem;
          }

          .content-section {
            padding: 1.5rem;
          }

          .team-grid {
            grid-template-columns: 1fr;
          }

          .governing-grid {
            grid-template-columns: 1fr;
          }

          .vision-mission {
            grid-template-columns: 1fr;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.125rem;
          }

          .hero-banner {
            height: 300px;
          }

          .section-header h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .hero-banner {
            height: 250px;
          }

          .member-image {
            width: 100px;
            height: 100px;
          }

          .section-header h2 {
            font-size: 1.75rem;
          }

          .nav-button {
            padding: 0.875rem 1rem;
            font-size: 0.9rem;
          }

          .nav-button.sub-item {
            padding: 0.75rem 1rem 0.75rem 2.5rem;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CollegeAdministrationPage;