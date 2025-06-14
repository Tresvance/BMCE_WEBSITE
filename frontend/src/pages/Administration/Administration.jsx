import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Award, BookOpen, Users, Building, ChevronRight, ExternalLink, GraduationCap, Shield, Heart, Target, ChevronUp, ChevronDown } from 'lucide-react';
import '../Administration/Administration.css';

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
      image: "https://res.cloudinary.com/dupfhhrzi/image/upload/v1749494286/Baselius_Marthoma_Mathews_III-3_qxke3j.jpg",
      email: "patron@college.edu",
      phone: "+91-9876543210",
      bio: "His Holiness stands for education with spiritual enlightenment, adhering to the principles of academic integrity, thereby transforming students into technically competent professionals, for a bright and promising future of the society and nation."
    },
    {
      name: "H.G. Yakob Mar Elias Metropolitan",
      position: "METROPOLITAN & MANAGER",
      image: "https://res.cloudinary.com/dupfhhrzi/image/upload/v1749402363/mar-eliyas-photo_qpiaud.jpg",
      email: "manager@college.edu",
      phone: "+91-9876543211",
      bio: "Imparting Education along moral values, ethics and concern for the fellow beings has been the focus of our institution. We believe in raising a generation of students with enthusiasm and passion who serve as responsible leaders focused on identifying human and environmental problems and finding solutions for them."
    },
    {
      name: "Rev. Fr. Thomas Varghese",
      position: "DIRECTOR",
      image: "https://res.cloudinary.com/dupfhhrzi/image/upload/v1749402739/thomasvarghese_myn0vo.jpg",
      email: "director@college.edu",
      phone: "+91-9876543212",
      bio: "Noble as our thoughts- our institution has one of the finest and most efficient administration network in place. We realize the importance of an effective administration in education and our students' results is proof of the pudding. The college has grown by leaps and bounds thanks to the efforts of many individuals and the students."
    },
    {
      name: "Prof. Dr. L. Padma Suresh",
      position: "PRINCIPAL",
      image: "https://res.cloudinary.com/dupfhhrzi/image/upload/v1749492679/principal_image_azivsz.jpg",
      email: "principal@college.edu",
      phone: "+91-9876543213",
      bio: "The college is truly blessed to be under the guidance of Prof. Dr. L. Padma Suresh, M.E, Ph.D (EEE), Ph.D (CSE), MISTE, with his vast experience and knowledge, he is certainly one of our most prized possessions. The College is sure to go places under his able and effective administration."
    }
  ];

  const governingBody = [ { name: "His Holiness Mar Thomas Mathews III", position: "Chairman & Patron" },
    { name: "H .G. Yakob Mar Elias Metropolitan", position: "Manager" },
    { name: " H. G. Dr. Joseph Mar Dionysius Metropolitan", position: "Executive Member" },
    { name: "H G Zacharias Mar Aprem Metropolitan", position: "Executive Member" },
    { name: " Very Rev. C. Daniel  Ramban", position: "Executive Member" },
    { name: "Rev. Fr. Thomas Varghese", position: "Director" },
    { name: "Dr. George Varghese Koppara", position: "Executive Member" },
    { name: "Prof D. K John ", position: "Executive Member" },
    { name: "Er. Binu M Issac", position: "Executive Member" },
    { name: "Adv. Philip Mathew", position: "Executive Member" },
    { name: "Prof. Dr. L. Padma Suresh", position: "Principal" },
    { name: "Prof. Oomman Samuel", position: "Ex.Officio" },
    { name: "Prof. Dennise Mathew", position: "Vice Principal" }
    
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
          <div className="adcontent-section">
            <div className="adsection-header">
              <h2>Our Team</h2>
              <p>Meet our dedicated leadership team committed to excellence in education</p>
            </div>
            
            <div className="adteam-grid">
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
          <div className="adcontent-section">
            <div className="adsection-header">
              <h2>Governing Body</h2>
              <p>The distinguished members who guide our institution</p>
            </div>
            <div className="governing-grid">
              {governingBody.map((member, index) => (
                <div key={index} className="adgoverning-member">
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

      case 'organogram':
        return (
    <div className="org-chart-container">
      <div className="org-chart">
        {/* Level 1 - Principal */}
        <div className="level level-1">
          <div className="position principal">
            <div className="position-title">Principal</div>
          </div>
        </div>

        {/* Level 2 - Vice Principals */}
        <div className="level level-2">
          <div className="position vp academic">
            <div className="position-title">Academic</div>
            <div className="position-subtitle">Vice Principal</div>
          </div>
          <div className="position vp dean">
            <div className="position-title">Dean</div>
          </div>
          <div className="position vp discipline">
            <div className="position-title">Discipline</div>
            <div className="position-subtitle">Vice Principal</div>
          </div>
          <div className="position vp administrative">
            <div className="position-title">Administrative</div>
          </div>
          <div className="position vp library">
            <div className="position-title">Library</div>
          </div>
        </div>

        {/* Level 3 - Department Heads */}
        <div className="level level-3">
          <div className="department-group">
            <div className="position dept-head">
              <div className="position-title">HODs</div>
            </div>
            <div className="position dept-head">
              <div className="position-title">Academic</div>
            </div>
            <div className="position dept-head">
              <div className="position-title">Quality Assurance</div>
            </div>
            <div className="position dept-head">
              <div className="position-title">Guidance Counseling</div>
            </div>
          </div>
          
          <div className="department-group">
            <div className="position dept-head">
              <div className="position-title">Student Affairs</div>
            </div>
            <div className="position dept-head">
              <div className="position-title">Accounts</div>
            </div>
            <div className="position dept-head">
              <div className="position-title">Administrative</div>
            </div>
          </div>
          
          <div className="department-group">
            <div className="position dept-head">
              <div className="position-title">Librarian</div>
            </div>
          </div>
        </div>

        {/* Level 4 - Staff */}
        <div className="level level-4">
          <div className="staff-group">
            <div className="position staff">
              <div className="position-title">Faculty Members</div>
            </div>
            <div className="position staff">
              <div className="position-title">Technical Staff</div>
            </div>
            <div className="position staff">
              <div className="position-title">Non Teaching Staff Members</div>
            </div>
            <div className="position staff">
              <div className="position-title">Professional Secretaries</div>
            </div>
          </div>
          
          <div className="staff-group">
            <div className="position staff">
              <div className="position-title">Training & Placement Officer</div>
            </div>
            <div className="position staff">
              <div className="position-title">Training & Placement Staff</div>
            </div>
          </div>
          
          <div className="staff-group">
            <div className="position staff">
              <div className="position-title">Finance Officer</div>
            </div>
            <div className="position staff">
              <div className="position-title">Office Staff</div>
            </div>
            <div className="position staff">
              <div className="position-title">Accounts Staff</div>
            </div>
          </div>
          
          <div className="staff-group">
            <div className="position staff">
              <div className="position-title">Office Staff</div>
            </div>
            <div className="position staff">
              <div className="position-title">Security Staff</div>
            </div>
            <div className="position staff">
              <div className="position-title">Hostel Staff</div>
            </div>
            <div className="position staff">
              <div className="position-title">Transportation Staff</div>
            </div>
          </div>
          
          <div className="staff-group">
            <div className="position staff">
              <div className="position-title">Library Staff</div>
            </div>
          </div>
        </div>

        {/* Level 5 - Bottom Level */}
        <div className="level level-5">
          <div className="position bottom-level">
            <div className="position-title">Alumni Association</div>
          </div>
          <div className="position bottom-level">
            <div className="position-title">Technical Education</div>
          </div>
          <div className="position bottom-level">
            <div className="position-title">NSS Unit</div>
          </div>
          <div className="position bottom-level">
            <div className="position-title">Placement Cell</div>
          </div>
          <div className="position bottom-level">
            <div className="position-title">Social Work</div>
          </div>
        </div>
      </div>
    </div>
  );


    case 'directors-message':
      
          return (
            <section className="administration-message">
              <div className="administration-container">
                <div className="administrationcontent-wrapper">
                  <div className="administrationheader-section">
                    <h2 className="section-title">Director's Message</h2>
                    <div className="title-underline"></div>
                  </div>
                  
                  <div className="administrationmessage-content">
                    <div className="administration-image">
                      <img 
                        src="/administration/director.jpg" 
                        alt="Director" 
                        className="administration-photo"
                      />
                      <div className="administrationimage-overlay"></div>
                    </div>
                    
                    <div className="message-text">
                      <div className="quote-mark">"</div>
                      <p className="message-paragraph">
                        Welcome to our esteemed institution, where excellence in education meets innovation and tradition. 
                        As we continue our journey of academic excellence, we remain committed to nurturing young minds 
                        and preparing them for the challenges of tomorrow.
                      </p>
                      <p className="message-paragraph">
                        Our college stands as a beacon of knowledge, fostering an environment where students can explore, 
                        learn, and grow into responsible global citizens. We believe in holistic development that encompasses 
                        not just academic prowess but also character building and leadership skills.
                      </p>
                      <p className="message-paragraph">
                        Together, we shall continue to reach new heights of achievement and make our mark in the world 
                        of higher education. I invite you to be part of this extraordinary journey.
                      </p>
                      
                      <div className="administrationsignature-section">
                        <div className="administrationsignature-line"></div>
                        <div className="administrationdirector-details">
                          <h4 className="administrationdirector-name">Rev. Fr. Thomas Varghese</h4>
                          <p className="director-title">Director</p>
                          <p className="college-name">Baselios Mathews II College of Engineering</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );

  case 'principals-message':
      
          return (
            <section className="administration-message">
              <div className="administration-container">
                <div className="administrationcontent-wrapper">
                  <div className="administrationheader-section">
                    <h2 className="section-title">Principal's Message</h2>
                    <div className="title-underline"></div>
                  </div>
                  
                  <div className="administrationmessage-content">
                    <div className="administration-image">
                      <img 
                        src="https://res.cloudinary.com/dupfhhrzi/image/upload/v1749492679/principal_image_azivsz.jpg" 
                        alt="Director" 
                        className="administration-photo"
                      />
                      <div className="administrationimage-overlay"></div>
                    </div>
                    
                    <div className="message-text">
                      <div className="quote-mark">"</div>
                      <p className="message-paragraph">
                        Let you empower yourself with the Wings of Knowledge and Power of Innovation and with this Empowerment imbibe an attitude akin to a positive and proactive thinking, an eagerness to serve and excel in your chosen domain of activity throughout your lifetime. Students should always think and review; discover the cause and effect of every happening, and they should not surrender or become a slave to youthful fancies and indulgences.
                      </p>
                      <p className="message-paragraph">
                       The special emphasis on the academic activities concentrates on helping the students to gain an excellent theoretical knowledge base and in the development of skills to implement them. We are constantly reviewing our set up to update and improve while making sure that students gain thinking skills, analytical frameworks, entrepreneurial skills, interpersonal and communication skills.
                      </p>
                      <p className="message-paragraph">
                        The aim of the Management and Faculty who are committed to continually improve and deliver competitive quality technical education to the utmost satisfaction of students, their parents and the potential employers. The evolution of the institute over the past decade has witnessed strong blend of state-of-the-art infrastructure and intricately intertwined human resource committed to provide professional education with thrust on creativity and innovation.
                      </p>
                      
                      <div className="administrationsignature-section">
                        <div className="administrationsignature-line"></div>
                        <div className="administrationdirector-details">
                          <h4 className="administrationdirector-name"></h4>
                          <p className="director-title">Principal</p>
                          <p className="college-name">Baselios Mathews II College of Engineering</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );


      case 'iqac-objectives':
        return (
          <div className="adcontent-section">
            <div className="adsection-header">
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
          <div className="adcontent-section">
            <div className="adsection-header">
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
          <div className="adcontent-section">
            <div className="adsection-header">
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
        <div className="adhero-content">
          <h1 className="hero-title">ADMINISTRATION</h1>
          <p className="hero-subtitle">Excellence in Technical Education & Leadership</p>
          <div className="breadcrumb">
            <span>Home</span>
            <ChevronRight size={16} />
            <span>Administration</span>
          </div>
        </div>
      </div>

      <div className="admain-container">
        <div className="content-wrapper">
          {/* Main Content */}
          <div className="admain-content">
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

      
    </div>
  );  
};

export default CollegeAdministrationPage;