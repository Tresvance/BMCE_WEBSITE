import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Award, BookOpen, Users, Building, ChevronRight, ExternalLink, GraduationCap, Shield, Heart, Target } from 'lucide-react';
import '../Administration/Administration.css';

const CollegeAdministrationPage = () => {
  const [activeTab, setActiveTab] = useState('our-team');

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

  const objectives = [
    "To provide quality technical education with moral and ethical values",
    "To develop technically competent and socially responsible engineers",
    "To promote research and innovation in engineering and technology",
    "To foster industry-academia collaboration for practical learning",
    "To create leaders who can contribute to national development",
    "To maintain high standards of academic excellence and integrity"
  ];

  return (
    <div className="admin-page">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1>ADMINISTRATION</h1>
          <p>Excellence in Technical Education</p>
          <div className="breadcrumb">
            <span>Home</span>
            <ChevronRight size={16} />
      
          </div>
        </div>
      </header>

      <div className="main-container">
        <div className="grid-layout">
          {/* Main Content */}
          <div>
            {/* Our Team Section */}
            {activeTab === 'our-team' && (
              <div className="content-section">
                <div className="section-header">
                  <h2>Our Team</h2>
                </div>
                
                <div className="team-grid">
                  {administrationTeam.map((member, index) => (
                    <div key={index} className="team-member">
                      <div className="member-layout">
                        <div className="member-image">
                          <img src={member.image} alt={member.name} />
                        </div>
                        <div className="member-info">
                          <h3 className="member-name">{member.name}</h3>
                          <p className="member-position">{member.position}</p>
                          <p className="member-bio">{member.bio}</p>
                          <div className="contact-info">
                            <div className="contact-item">
                              <Mail size={14} />
                              <span>{member.email}</span>
                            </div>
                            <div className="contact-item">
                              <Phone size={14} />
                              <span>{member.phone}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Governing Body Section */}
            {activeTab === 'governing-body' && (
              <div className="content-section">
                <div className="section-header">
                  <h2>Governing Body</h2>
                </div>
                <div className="governing-grid">
                  {governingBody.map((member, index) => (
                    <div key={index} className="governing-member">
                      <div className="governing-avatar">
                        <User size={20} />
                      </div>
                      <div>
                        <h4 className="governing-name">{member.name}</h4>
                        <p className="governing-position">{member.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Objectives Section */}
            {activeTab === 'objectives' && (
              <div className="content-section">
                <div className="section-header">
                  <h2>Objectives</h2>
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
            )}

            {/* Vision Section */}
            {activeTab === 'vision' && (
              <div className="content-section">
                <div className="section-header">
                  <h2>Vision & Mission</h2>
                </div>
                <div className="vision-mission">
                  <div className="vision-card">
                    <h3 className="vision-title">Vision</h3>
                    <p className="vision-text">
                      To be a center of excellence in technical education, fostering innovation, research, and holistic development of students while upholding moral and ethical values to create globally competent engineers and leaders.
                    </p>
                  </div>
                  <div className="mission-card">
                    <h3 className="mission-title">Mission</h3>
                    <p className="mission-text">
                      Our mission is to provide quality technical education integrated with spiritual and moral values, promote research and innovation, foster industry collaboration, and develop socially responsible engineers who contribute to the betterment of society and nation.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Committees Section */}
            {activeTab === 'committees' && (
              <div className="content-section">
                <div className="section-header">
                  <h2>Committees & Cells</h2>
                </div>
                <div className="committees-grid">
                  {committees.map((committee, index) => (
                    <div key={index} className="committee-item">
                      <div className="committee-header">
                        <div className="committee-dot"></div>
                        <h4 className="committee-name">{committee.name}</h4>
                      </div>
                      <p className="committee-head">Head: {committee.head}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Default/Other sections with placeholder content */}
            {!['our-team', 'governing-body', 'objectives', 'vision', 'committees'].includes(activeTab) && (
              <div className="content-section">
                <div className="section-header">
                  <h2 style={{ textTransform: 'capitalize' }}>{activeTab.replace('-', ' ')}</h2>
                </div>
                <div className="placeholder-content">
                  <BookOpen size={48} className="placeholder-icon" />
                  <p>Content for this section is being updated. Please check back soon.</p>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar Navigation */}
          <div className="rightmenu">
            <div className="rightmenu-header">
              <h3 className="rightmenu-title">Administration</h3>
            </div>
            <nav className="rightmenu-nav">
              {[
                { id: 'governing-body', label: 'Governing Body', icon: Shield },
                { id: 'our-team', label: 'Our Team', icon: Users },
                { id: 'directors-message', label: "Director's Message", icon: User },
                { id: 'principals-message', label: "Principal's Message", icon: GraduationCap },
                { id: 'deans', label: 'Deans', icon: Award },
                { id: 'organogram', label: 'Organogram', icon: Building },
                { id: 'objectives', label: 'Objectives', icon: Target },
                { id: 'vision', label: 'Vision', icon: Heart },
                { id: 'functions-benefits', label: 'Functions & Benefits', icon: BookOpen },
                { id: 'committees', label: 'Committees & Cell', icon: Users }
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`nav-button ${activeTab === item.id ? 'active' : 'inactive'}`}
                  >
                    <IconComponent size={16} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CollegeAdministrationPage;