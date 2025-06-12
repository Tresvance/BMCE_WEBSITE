import React, { useEffect, useState } from 'react';
import { Users, Monitor, TrendingUp, FlaskConical, Calendar, MapPin, Phone, Mail, Quote } from 'lucide-react';
import './dept.css'; // Import the CSS file
import axios from 'axios';
import { useParams } from 'react-router-dom';





export default function MechDepartmentPage() {
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
      axios.get("http://localhost:8000/api/staff/mech/") // <-- 'cse' is department name
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
                <p className="about-text">
                 Since its inception in 2010, the Department of Mechanical Engineering of BMCE is one of the top rated among other engineering colleges affiliated to Kerala university. Department was started with a sanctioned intake of 60 students with 15 teaching faculties and mentorship of Dr F.V Albin. Later in 2015, department is re-affiliated to the APJ Abdul Kalam Technological University (KTU) and continues its successful journey in moulding talented mechanical engineers.

The Department has well equipped laboratories with new high end machines, sophisticated equipment and qualified personnel. The department has 9 laboratories with provisions for research activities. The department is well equipped with computational facilities and is having a computer integrated manufacturing lab.

Mechanical engineering association of the department ‘MEQNZO’ initiates co-curricular and extra-curricular activities for overall development of students. Numerous initiatives have already been carried out towards the employability of students. The department has signed MoU with CAD Centre Kollam and Kerala Electrical & Allied Engg. Co.Ltd., which provide an exposure to industry environment. 
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
                        src="/btech/hodmech.jpg"
                        alt="Mr. Abraham Sam Thomas"
                      />
                    </div>
                    <div className="hod-details">
                      <h3 className="hod-name">Mr. Abraham Sam Thomas</h3>
                      <p className="hod-title">Head of Department</p>
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
                      {/* <strong>Contact:</strong> dennisemathew@gmail.com | 9451744441 */}
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
                 To nurture students and equip them with fundamental and innovative concepts in Mechanical Engineering, thereby making them passionate for technical research, career and social development. </p>
              </div>
              <div className="mission-card">
                <h3 className="mission-title">Mission</h3>
                <ul className="mission-list">
                  <li>To provide a challenging atmosphere to impart creativity and innovation, thereby moulding students to focus on latest advancements in mechanical engineering.</li>
                  <li>Smarten up students to become self sustained professionals to explore all opportunities for holistic development upholding moral and ethical values.</li>
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
                  <li>PO1. Graduates of the program with solid foundation in core and allied areas of mechanical Engineering to become a competent professional.</li>
                  <li>PO2. Graduates will recognize the need for innovations and entrepreneurship to attain sustainable technical development in the industry and society.</li>
                  <li>PO3: Graduates will efficiently develop multidisciplinary products by adopting analytical, numerical and experimental techniques along with strict professional ethics and leadership skills.</li>
                  <li>PO4. Graduates inculcate an urge for higher studies, research and other career developmental activities.</li>
                   </p>
                </ul>
              </div>
              <div className="mission-card">
                <h3 className="mission-title">PROGRAM OBJECTIVE (PO)</h3>
                <ul className="mission-list">
                  <p className="about-text">
                  <li>PO 1: Engineering Knowledge</li>
                  <li>PO 2: Problem Analysis</li>
                  <li>PO 3: Design/development of solutions</li>
                  <li>PO 4: Conduct investigations of complex Problems</li>
                  <li>PO 5: Modern tool usage</li>
                  <li>PO 6: The engineer and society</li>
                  <li>PO 7: Environment and sustainability</li>
                  <li>PO 8: Ethics</li>
                  <li>PO 9: Individual and team work</li>
                  <li>PO 10: Communication</li>
                  <li>PO 11: Project management and finance</li>
                  <li>PO 12: Life-long learning</li>
                  </p>
                </ul>
              </div>
              <div className="mission-card">
                <h3 className="mission-title">PROGRAMME SPECIFIC OUTCOMES (PSOS)</h3>
                <ul className="mission-list">
                  <p className="about-text">
                  <li>PSO 1: Apply their knowledge in the domain of engineering mechanics, thermal and fluid sciences to solve engineering problems utilizing advanced technology.</li>
                  <li>PSO 2: Successfully apply the principles of design, analysis and implementation of mechanical systems/processes which have been learned as a part of the curriculum.</li>
                  <li>PSO 3: Develop and implement new ideas on product design and development in the field of mechanical engineering with the help of modern CAD/CAM tools, while ensuring best manufacturing practices.</li>
                  </p>
                </ul>
              </div>
            </div>
          </div>);

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
          <div className="banner-image">
            <img
              src="https://res.cloudinary.com/dnqzz8qlz/image/upload/v1749750835/cld-sample-2.jpg"
              alt="Banner"
            />
            <div className="banner-overlay"></div>
          </div>
          <div className="banner-content">
            <div>
              <h1 className="banner-title">
                Department of Mechanical Engineering
              </h1>
              <p className="banner-subtitle">
                Innovation, Excellence & Empowerment
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