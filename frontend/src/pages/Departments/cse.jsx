import React, { useEffect, useState } from 'react';
import { Users, Monitor, TrendingUp, FlaskConical, Calendar, MapPin, Phone, Mail, Quote } from 'lucide-react';
import './dept.css'; // Import the CSS file
import axios from 'axios';
import { useParams } from 'react-router-dom';





export default function CSDepartmentPage() {
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
      axios.get("http://localhost:8000/api/staff/cse/") // <-- 'cse' is department name
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
                  The Department of Computer Science was established in the year 2000 with a vision to become a center of
                  excellence in Computer Science education and research. Over the years, the department has grown significantly
                  and has been consistently ranked among the top Computer Science departments in the region.
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
                  To be a leading department of computer science that produces innovative, ethical, and globally
                  competitive professionals who contribute to technological advancement and societal development.
                </p>
              </div>
              <div className="mission-card">
                <h3 className="mission-title">Mission</h3>
                <ul className="mission-list">
                  <li>Provide quality education in computer science with emphasis on both theoretical foundations and practical applications</li>
                  <li>Foster research and innovation in emerging areas of computer science</li>
                  <li>Develop ethical and socially responsible computing professionals</li>
                  <li>Establish partnerships with industry and academia for mutual benefit</li>
                  <li>Contribute to the advancement of computer science through research and development</li>
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
              <div className="vision-card">
                <h3 className="vision-title">PROGRAM OUTCOMES</h3>
                <p className="about-text">
                  <li>PO1. Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</li>
                  <li>PO2. Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</li>
                  <li>PO3: Design/development of solutions : Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.</li>
                  <li>PO4. Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</li>
                  <li>PO5. Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.</li>
                  <li>PO6. The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</li>
                  <li>PO7. Environment and sustainability Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</li>
                  <li>PO8. Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</li>
                  <li>PO9. Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</li>
                  <li>PO10. Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</li>
                  <li>PO11. Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</li>
                  <li>PO12. Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</li>
               </p>
              </div>
              <div className="mission-card">
                <h3 className="mission-title">PROGRAM EDUCATIONAL OBJECTIVES</h3>
                <ul className="mission-list">
                  <p className="about-text">
                  <li>PO1. Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</li>
                  <li>PO2. Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</li>
                  <li>PO3: Design/development of solutions : Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.</li>
                  <li>PO4. Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</li>
                   </p>
                </ul>
              </div>
              <div className="mission-card">
                <h3 className="mission-title">PROGRAM SPECIFIC OUTCOMES (PSOS)</h3>
                <ul className="mission-list">
                  <p className="about-text">
                  <li>PSO 1: The ability to understand, analyze and develop computer programs in the areas related to algorithms, system software, multimedia, web design, big data analytics, and networking for efficient design of computer-based systems of varying complexity.</li>
                  <li>PSO 2: Develop their skills to solve problems in the broad area of programming concepts and appraise environmental and social issues with ethics and manage different projects </li>
                  </p>
                </ul>
              </div>
            </div>
          </div>
        );
        case 'Infrastructure':
        return (
          
          <div>
            <h2 className="section-header">Infrastructure</h2>
            <div className="vision-mission-container">
              
              <div className="about-text-container">
                <p className="about-text">
                  Through this quality education the graduates acquire with the ability to visualize, collect information, analyze, solving complex problems, and making decisions. Training the students with technical skills and advanced technology that makes them more employable. Laboratories are well-equipped with advanced and excellent facilities. Systems are provided for students in the ratio of 1:1. The department is equipped with 8 laboratories, each has desktops, printers and switches.

                </p>
               
              </div>
              </div>
              <div className="vision-card">
                <h3 className="vision-title">System software and java programming lab</h3>
                <p className="about-text">
                  The ultimate aim of this lab is to prepare students in familiarize with the Standard Java technologies of J2SE and helps to excel in Object Oriented programming and to succeed as a Java Developer through global rigorous education. This lab instills students with a solid foundation in Object Oriented programming fundamentals, to solve programming problems and also to learn Advanced Java topics like J2ME, J2EE, JSP, and JavaScript.

<h5>Faculty in Charge: Prof. KAVITHA V K </h5>               </p>
              </div>
             <div className="vision-card">
                <h3 className="vision-title">Programming and Database lab</h3>
                <p className="about-text">
                   Programming and database lab
This lab is specially followed by Students who are interested in understanding Structured Query Language and programming concepts in the Computer science and engineering field and wants to gain enhance knowledge about power of SQL Language in Relational Database Management System Development. The manual covers practical point of view in all aspects of Database and SQL including DDL, DML, and DCL sublanguages.

<h5>Faculty in Charge: Prof. DEEPA RAJAN S  </h5>           </p>
              </div>
            <div className="vision-card">
                <h3 className="vision-title">Project lab</h3>
                <p className="about-text">
                 Students are creating and implementing their own ideas to explore their technical knowledge. 
<h5>Faculty in Charge: Prof. STEPHIE SARA PHILIPOSE  </h5>           </p>
              </div>
              <div className="vision-card">
                <h3 className="vision-title">Microprocessor lab</h3>
                <p className="about-text">
                To apply the concepts in the design of microprocessor/microcontroller based systems in existent. The student will learn the internal organization of popular 8086/8051, hardware and software interaction and integration microprocessors/microcontrollers.
                <h5>Faculty in Charge: Prof. MANOLEKSHMI I </h5>           </p>
              </div>
              <div className="vision-card">
                <h3 className="vision-title">Free and open source software lab</h3>
                <p className="about-text">
                To expose students to FOSS environment and introduce them to use open source packages in open source platform.
                 <h5>Faculty in Charge: Prof. JUBY MARY ABRAHAM</h5>           </p>
              </div>
               <div className="vision-card">
                <h3 className="vision-title">Algorithm, Network and Operating Systems Lab</h3>
                <p className="about-text">
               To understand the functionalities of various layers of OSI model, difference between hardware, software, operating systems, programs and files. Students can understand the purpose of different software applications.
                  <h5>Faculty in Charge: Prof. Jayakrishnan R</h5>           </p>
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
                Department of Computer Science Engineering
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

 

    </div>
  );
}