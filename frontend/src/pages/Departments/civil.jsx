import React, { useEffect, useState } from 'react';
import { Users, Monitor, TrendingUp, FlaskConical, Calendar, MapPin, Phone, Mail, Quote } from 'lucide-react';
import './dept.css'; // Import the CSS file
import axios from 'axios';
import { useParams } from 'react-router-dom';





export default function CivilDepartmentPage() {
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
    "Activities","Association", "Faculty & Staff", "Publications", "MoUs", "Research",
    "Placements", "Results", "Study Materials", "Mentoring System",
    "Gallery", "Distinguished Alumni"
  ];


  useEffect(() => {
    if (activeTab === "Faculty & Staff") {
      axios.get("http://localhost:8000/api/staff/civil/") // <-- 'cse' is department name
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
                 The Department of Civil Engineering was established at BMCE in the year of 2008 with a mission of offering technical education and effective interactions with industries. Civil engineering department has a galaxy of experienced faculties. The staff and management are student centric and hence we have a rich library both at the institutional level and department level. Also institute has state of art laboratories with the latest instruments and well trained technical staff.

As a continuous Endeavour to improve the quality of education, we are very strict about student's attendance at class and laboratories to train them to toil to achieve targets. We have devised a system of faculty advisors for each student who continuously monitors both academic and extracurricular progress of students. Parents are well informed about the progress of their wards.

To keep abreast with development in the field, technical seminars, short term training programme, on the job Training (OJT), field visits and technical visits to the construction sites are the perpetual activity at civil department. Students are encouraged to work on site during vacations to get field exposure

With Growth of Economy and Infrastructure development in the country, a tremendous increase in opportunities for civil engineers is envisaged both in private and government sectors, in ensuing years to come. BMCE is one of the best college of Kerala to start self finance program in engineering.


                </p>
                <p className="about-text">
                  Our department offers undergraduate, postgraduate, and doctoral programs in Computer Science and related
                  fields. The curriculum is designed to provide students with a strong foundation in core computer science concepts,
                  along with exposure to emerging technologies and research areas.
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
                  To be an outstanding academic centre that brings out competent civil engineers to serve as a valuable resource for industry and society.
                </p>
              </div>
              <div className="mission-card">
                <h3 className="mission-title">Mission</h3>
                <ul className="mission-list">
                 <li>To develop skilled graduates by imparting effective teaching methodologies and ICT tools.</li>
                  <li>To groom socially committed consultants, Entrepreneurs and researchers.</li>
                  <li>To train the students to meet the challenges of future through lifelong learning and problem solving skills.</li>
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
                  <li>PO1. Graduates will be able to analyze and solve industrial demands with professional ethics.</li>
                  <li>PO2. Graduates excel in multidisciplinary projects with administrative skills, communicative Skills and professional skills.</li>
                  <li>PO3: Pursue higher education and research to contribute for sustainable development.</li>
                  <li>PO4. Bring out innovative solutions through dynamic interactions with industry and society.</li>
                   </p>
                </ul>
              </div>
              <div className="mission-card">
                <h3 className="mission-title">PROGRAM SPECIFIC OUTCOMES (PSOS)</h3>
                <ul className="mission-list">
                  <p className="about-text">
                  <li>PSO 1: Design a cost effective and optimized solution for Civil Engineering problems by using modern techniques.</li>
                  <li>PSO 2: Plan, Analyze, Design and execute the Civil Engineering projects using eco-friendly construction materials with technical knowledge.</li>
                  <li>PSO 1: To offer consultancy and engineering services with professional and ethical responsibility.</li>
                  <li>PSO 2: Students will refresh and apply the basic concepts in natural sciences in engineering in general in Civil Engineering in particular and they will develop the confidence of solving real life problems in Civil Engineering by classroom exercise.</li>
                  </p>
                </ul>
              </div>
            </div>
          </div>);

       case 'Infrastructure':
        return (
          
          <div>
            <h2 className="section-header">Infrastructure</h2>
            <div className="vision-mission-container">
              
              <div className="about-text-container">
                <p className="about-text">
                 Our lab facilities equipped with most modern equipments including Strength of Materials Lab. Survey Lab, Geotechnical Engineering Lab, Transportation Engineering Lab, Concrete Lab, Environmental Lab, and Computer Aided Design and Drafting Lab etc.The equipments functioning properly in an attractive feature of the labs, so that students can utilize them for their project works also.

              Survey camp is conducted for students outside the college premises every year to improve the practical knowledge.

              To cope up with the university curriculum and modern technological development, the Department has following laboratories:

              <li>Fluid Mechanics lab</li>
              <li>Environmental Engineering Lab</li>
              <li>Strength of Material lab</li>
              <li>CAD lab</li>
              <li>Geotechnical lab</li>
              <li>Concrete lab</li>
              <li>Survey lab</li>
              <li>Transportation lab</li>
              All these laboratories are well equipped and well furnished. The department owns special equipments like Universal testing machine, Compression testing machine, Total station, and One second thedolite. The departmental CAD lab. has latest computers with latest software such as Build master, timber line, auto cad, StaddPro & ETAB. The department has student association CESA (Civil Engineering Students Association) for departmental student's activities.

                              </p>
               
              </div>
              </div>
             
              

          </div>
        );
        case 'Association':
        return (
          <div>
            <h2 className="section-header">DEPARTMENT OF CIVILENGINEERING ASSOCIATION INAGURATION</h2>
            <div className="vision-mission-container">

              <div className="mission-card">
                
                <ul className="mission-list">
                  <p className="about-text">
                  The formal inauguration of the Civil Engineering Association “CIVIERA” at Baselious Mathews II College of Engineering was held on October 06, 2023, at 12.00 p.m. by Mr Ablemon J L, Assistant Executive Engineer, PWD Roads Division.

Ms Anjali Nair, Assistant Professor and Staff Coordinator of Association of Civil Engineering delivered a welcome address. The introductory remarks were done by Ms. Athira Siddharthan, Head of the Dapartment of Civil Engineering. This was followed by the lighting of the lamp by the dignitaries thereby officially launching the Civil Engineering Association CIVIERA. Dr. L Padma Suresh, Principal has delivered a keynote address during the remarkable occasion. Further, Dr. Madhusoodhanan Pillai, Vice Principal, Rev. Fr. Thomas Varghese, Director and Rev. Fr. K M Koshy Vaidyan, Dean of Student Affairs addressed the gathering and showered their blessings. As a token of appreciation toppers of each semester Miss. Sheba Mariam Saju, Miss. Safa Vahab of pass out batch, Mr. Sanath M Karayodil of S7 CE, Miss. Anupriya J of S5 CE and Miss. Sreelekshmi S of S3 CE were awarded a momento in the ceremony.About 12:45 pm logo launching event were conducted at the shuttle court by the chief guest. Further a cash prize was awarded to the student Mr. Abhin Thulasi of S5 CE for designing the logo. Mr Vishnu Vijayan, Dean of Corporate affairs and Liaison expressed his wishes to the program.

The chief guest of the day Mr Ablemon J L addressed the students on the various challenges faced by a civil engineer in field and also in thedepartment works. He also gave an insight about the various works done by the government .The talk by Ablemon sir lasted for over an hour. In the end there was a platform for raising question.

Office bearers for this year of CIVIERA, Mr. Ajay John, President, Miss. Thanuja T, Vice President, Mr. Athil Krishna M, Secretary, Miss. Rachel Varghese, Treasurer and Mr. Abhiram Krishna, Joint secretary were introduced and acknowledged in the event. As a gratitude for his graceful presencea momento was handed overto thechief guest by MrVishnu Vijayan, Dean of Corporate affairs and Liaison. Lastly, Ms Reshma M Raju Assistant Professor and Staff Coordinator of Association proposed a vote of thanks. A cultural program was conducted after the inauguration ceremony. </p>
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

        <div className="banner-overlay"></div>
        <div className="banner-gradient"></div>

        {/* Geometric patterns */}
        <div className="banner-pattern-1"></div>
        <div className="banner-pattern-2"></div>
        <div className="banner-pattern-3"></div>

        <div className="banner-content">
          <div>
            <h1 className="banner-title">
              Department of Civil Engineering<br />
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