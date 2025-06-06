import React, { useEffect, useState } from 'react';
import { Users, Monitor, TrendingUp, FlaskConical, Calendar, MapPin, Phone, Mail, Quote } from 'lucide-react';
import './dept.css'; // Import the CSS file
import axios from 'axios';
import { useParams } from 'react-router-dom';





export default function EeeDepartmentPage() {
  const [activeTab, setActiveTab] = useState('Overview');
  const { departmentName } = useParams();  // captures 'cse', 'me', etc.
  const [faculty, setFaculty] = useState([]);

  const strengths = [
    {
      icon: <Users className="strength-icon" />,
      title: "Expert Faculty",
      description: "Our department boasts a team of highly qualified faculty members with expertise in various domains of Computer Science."
    },
    {
      icon: <Monitor className="strength-icon" />,
      title: "Modern Infrastructure",
      description: "State-of-the-art laboratories equipped with the latest hardware and software resources."
    },
    {
      icon: <TrendingUp className="strength-icon" />,
      title: "Excellent Placements",
      description: "Consistent record of excellent placements in top companies with competitive packages."
    },
    {
      icon: <FlaskConical className="strength-icon" />,
      title: "Research Focus",
      description: "Strong emphasis on research with dedicated labs for various specializations."
    }
  ];

  const navigationItems = [
    "Overview", "Vision & Mission", "PEO PSO", "Syllabus", "Infrastructure",
    "Activities", "Faculty & Staff", "Publications", "MoUs", "Research",
    "Placements", "Results", "Study Materials", "Mentoring System",
    "Gallery", "Distinguished Alumni"
  ];


  useEffect(() => {
    if (activeTab === "Faculty & Staff") {
      axios.get("http://localhost:8000/api/staff/eee/") // <-- 'cse' is department name
        .then(response => {
          setFaculty(response.data);
        })
        .catch(error => {
          console.error("Error fetching CSE staff:", error);
        });
    }
  }, [activeTab]);

  console.log("faculty", faculty)


  const renderTabContent = () => {


    switch (activeTab) {
      case 'Overview':
        return (
          <div>
            {/* About Section */}
            <div className="about-section">
              <h2 className="section-header">ABOUT OUR DEPARTMENT</h2>
              <div className="about-text-container">
                <p className="about-text">The Department of Electrical and Electronics Engineering was established in the year 2006 with the under graduate program to fulfill the aspiration of common people to make their wards professionally qualified Electrical and Electronics Engineers. The Department has always exerted the best of its effort to meet the objectives of achieving technical excellence in the areas of Electrical and Electronics Engineering such as Electrical Machines and Drives ,Instrumentation and Automation and Power systems supported by a high ended software training to take up Electrical Engineering System Design
               </p>
             
              </div>
            </div>

            {/* Strengths Section */}
            <div className="strengths-section">
              <h2 className="section-header">Our Strengths</h2>
              <div className="strengths-grid">
                {strengths.map((strength, index) => (
                  <div key={index} className="strength-card">
                    <div className="strength-icon-container">
                      {strength.icon}
                    </div>
                    <h3 className="strength-title">{strength.title}</h3>
                    <p className="strength-description">{strength.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* HOD Message Section */}
            <div className="hod-section">
              <h2 className="section-header">MESSAGE FROM HOD</h2>
              <div className="hod-message-container">
                <div className="hod-profile-section">
                  <div className="hod-image-container">
                    <div className="hod-image">
                      <img
                        src="/btech/cse/hodcse.jpg"
                        alt="Dr. Dennise Mathew"
                      />
                    </div>
                    <div className="hod-details">
                      <h3 className="hod-name">Dennise Mathew</h3>
                      <p className="hod-title">Head of Department</p>
                      <p className="hod-phone">945174441</p>
                    </div>
                  </div>
                  <div className="hod-message-content">
                    <Quote className="quote-icon" />
                    <blockquote className="hod-message-text">
                      <p className="italic">
                        "Welcome to the Department of Computer Science. Our department is committed to
                        providing quality education and fostering innovation in the field of computer science."
                      </p>
                      <p>
                        The Department of Computer Science has been consistently striving for excellence in education and
                        research. Our focus is on preparing students for the challenges of the rapidly evolving tech industry
                        while inculcating in them a spirit of lifelong learning.
                      </p>


                    </blockquote>
                    <div className="hod-contact">
                      <strong>Contact:</strong> dennisemathew@gmail.com | 9451744441
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Latest Announcements */}
            <div className="announcements-container">
              <h3 className="announcements-header">
                <Calendar className="announcements-icon" />
                Latest Announcements
              </h3>
              <div className="announcements-list">
                <div className="announcement-item">
                  <h4 className="announcement-title">Upcoming Workshop on AI</h4>
                  <p className="announcement-date">Date: October 15, 2023</p>
                </div>
                <div className="announcement-item">
                  <h4 className="announcement-title">Research Symposium 2024</h4>
                  <p className="announcement-date">Registration now open</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Vision & Mission':
        return (
          <div>
            <h2 className="section-header">Vision & Mission</h2>
            <div className="vision-mission-container">
              <div className="vision-card">
                <h3 className="vision-title">Vision</h3>
                <p className="about-text">
                  To mould globally proficient, dynamic Electrical engineers and successful entrepreneurs contributing to nation's economic growth. </p>
              </div>
              <div className="mission-card">
                <h3 className="mission-title">Mission</h3>
                <ul className="mission-list">
                  <li>To Provide comprehensive training in the field of Electrical Engineering and there by bridging the gap between industry and academia.</li>
                  <li>To Equip Students as socially committed citizens and resourceful professionals.</li>
                  </ul>
              </div>
            </div>
          </div>
        );
        case 'PEO PSO':
        return (
          <div>
            <h2 className="section-header">PEO PSO</h2>
            <div className="vision-mission-container">
              
              <div className="mission-card">
                <h3 className="mission-title">PROGRAM EDUCATIONAL OBJECTIVES</h3>
                <ul className="mission-list">
                  <p className="about-text">
                  <li>PEO: Graduate of the program will specify, design, and develop solutions to meet the requirements of the industry.</li>
                  <li>PEO2: Graduates can able to develop analytical and research mind by adapting innovative ideas in the ever-growing technology through lifelong learning.</li>
                  <li>PEO3: Graduates can demonstrate communication skill, leadership qualities and professional competence for developing start-up's.</li>
                  <li>PEO4: Graduates can acquire technical skills with ethical attitude to develop sustainable solution for global and social needs.</li>
                   </p>
                </ul>
              </div>
              <div className="mission-card">
                <h3 className="mission-title">PROGRAM SPECIFIC OUTCOMES (PSOS)</h3>
                <ul className="mission-list">
                  <p className="about-text">
                  <li>PSO 1: Analyze, design and solve problems in the field of Electrical and Electronics Engineering by applying knowledge acquired from Power Systems, Electrical Machines, Control Systems and Solid State Devices.</li>
                  <li>PSO 2: Apply modern software tools for design, simulation and analysis of Electrical Systems to engage in lifelong learning.</li>
                  <li>PSO 3: Solve ethically and professionally various Electrical Engineering problems in societal and environmental context and communicate efficiently.</li>
                  <li>PSO 4: Ability to implement electrical system design skills for planning, estimating and designing.</li>
                  </p>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'Faculty & Staff':
        return (
          <div>
            <h2 className="section-header">Faculty & Staff</h2>
            <div className="faculty-grid">
              {faculty.map((staff, index) => (
                <div className="faculty-card" key={index}>
                  <img
                    src={staff.photo} // ✅ correct
                    className="faculty-avatar-img"
                    alt={staff.name}
                  />
                  <h3 className="faculty-name">{staff.name}</h3>
                  <p className="faculty-position">{staff.designation}</p>
                </div>
              ))}

            </div>
          </div>
        );


      default:
        return (
          <div>
            <h2 className="section-header">{activeTab}</h2>
            <p className="about-text">Content for {activeTab} will be added here.</p>
          </div>
        );
    }
  };

  return (
    <div className="cs-department-page">
      {/* Banner Section */}
      <div className="banner-section">

        <div className="banner-overlay"></div>
        <div className="banner-gradient"></div>

        {/* Geometric patterns */}
        <div className="banner-pattern-1"></div>
        <div className="banner-pattern-2"></div>
        <div className="banner-pattern-3"></div>

        <div className="banner-content">
          <div>
            <h1 className="banner-title">
              Department of electrical & Electronics  Engineering<br />
              {/* <span className="banner-subtitle">Computer Science</span> */}
            </h1>
            <p className="banner-description">
              Shaping tomorrow's technology leaders through excellence in education and innovation
            </p>
          </div>
        </div>
      </div>

      <div className="main-container">
        {/* Main Content */}
        <div className="content-card">
          {renderTabContent()}
        </div>

        {/* Sidebar */}
        <div className="rightbar">
          <div className="navigation-card">
            {/* <div className="navigation-header">
              <h3 className="navigation-title">Quick Navigation</h3>
            </div> */}
            <div className="navigation-list">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(item)}
                  className={`navigation-item ${activeTab === item ? 'active' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>


        </div>
      </div>

      {/* Footer spacing */}
      <div className="footer-spacing"></div>
    </div>
  );
}