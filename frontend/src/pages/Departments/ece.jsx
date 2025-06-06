import React, { useEffect, useState } from 'react';
import { Users, Monitor, TrendingUp, FlaskConical, Calendar, MapPin, Phone, Mail, Quote } from 'lucide-react';
import './dept.css'; // Import the CSS file
import axios from 'axios';
import { useParams } from 'react-router-dom';





export default function EceDepartmentPage() {
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
      axios.get("http://localhost:8000/api/staff/ece/") // <-- 'cse' is department name
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
                 Electronics And Communication Engineering at BMCE has a long standing tradition of excellence. The course provides a sound foundation for people wishing to pursue a career in the field of communications,automation,artificial intelligence, control systems,biomedical,embedded systems, robotics ,sensor systems etc, through a diverse range of theoretical skills and practical experience, presented in the context of real applications and design experience. Electronic systems have made deep inroads into every aspect of daily life. One need only look around homes, offices & industrial plants to see that they feature almost everywhere.</p>
                <p className="about-text">
                 The Department provides and encourages active industry-institute partnership by identifying key areas of interest. The syllabus features core courses like Theory of Communication, DSP Architectures and Systems, Computer Networks, Embedded Systems,Analog & Digital Communication, Electronic Circuits, Microwave Components and Circuits, Satellite Communication, Photonic Devices and Systems, Object Oriented Programming , Real Time Opearating Systems etc giving a balanced coverage of the theory and practice of modern Communication Engineering. The department was given sufficient resources by the management in terms of excellent workforce, equipments, books, International and National Journals, Laboratories, accessories, class rooms, seminar hall, etc. and it started offering the course, from 2002. </p>
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
                  To mould perfect electronics and communication engineers by providing them with value added technical education and lead them to serve societal needs across the globe. </p>
              </div>
              <div className="mission-card">
                <h3 className="mission-title">Mission</h3>
                <ul className="mission-list">
               <p className="about-text">
                  Enroot highly potential, professional and disciplined technocrats abiding academic excellence and motivate them to take up research and innovations.
                  
                  Impart computational and simulation skills in the state of art electronics and communication engineering to sense the infirmity of nature and its conservation with societal commitment</p>
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
              <div className="mission-list">
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
                   In the first three to five years on the career after graduation, the Electronics and Communication Engineering programme graduates should be able to: 
                  <li>PEO 1: Edify for a high degree of employability in both public and private sector industries, round the globe, by initiating in them professional competence, ethical administrative perspicacity and ability to handle critical situations.</li>
                  <li>PEO 2: Converse effectively and manage resources deftly as members and leaders of the profession..</li>
                  <li>PEO 3:Continue their education to emerge as competent technologist, experts, educators and researchers.</li>
                  <li>PEO 4: Foster ethical and moral behavior with social responsibilities ..</li>
                   </p>
                </ul>
              </div>
              <div className="mission-card">
                <h3 className="mission-title">PROGRAM SPECIFIC OUTCOMES (PSOS)</h3>
                <ul className="mission-list">
                  <p className="about-text">
                  <li>PSO 1: (SOLVE EMERGING REAL-WORLD PROBLEMS)
                  Analyse real world problems in the domain of electronics and communiction engineering by applying fundamental concepts of basic science ,mathematics and core engineering subjects.</li>
                  <li>PSO 2:  (SYSTEM DEVELOPMENT)
                  Design and develop integrated electronic engineering systems by using cutting edge engineering hardware and software</li>
                  <li>PSO 3: (ACQUAINTANCE OF SOCIO- ENVIRONMENTAL AWARENESS)
                  Impart contextual learning skills relevant to electronics and communication engineering to understand the fragility of our environment and the importance of its protection with professional ethics</li>
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
              As emerging technology becomes ever-increasingly complex, there has never been a more exciting time to pursue a degree in Electronics and Communication engineering. The course is designed to give the students both the theoretical and practical background in all frontier areas of Electronics and Communication so that they are constantly aware of the rapid changes taking place in this field.  
              <li> Communication Engineering Lab</li>
              <li> Electronic Crcuits Lab</li>
              <li> Microwave and Optical Communication Lab</li>
              <li> Electronic Product Design Lab</li>
              <li> Digital Signal Processing Lab</li>
              <li> Embedded System Lab</li>
              <li> Digital Electronics Lab</li>
              <li> Project Lab</li>
              <li> Seminar Hall</li>
              <li> Department Library</li>
              All these laboratories are well equipped and well furnished. 

               </p>
               
              </div>
              </div>
             
              

          </div>
        );
         case 'Activities':
        return (
          
          <div>
            <h2 className="section-header">Activities</h2>
            <div className="vision-mission-container">
              
              <div className="about-text-container">
                <p className="about-text">
               <h4>Departmental Association</h4>
The Electronics and Communication Engineering Department's association named "CRESCENDO" was inaugurated by former ISRO chairman Dr.G Madhavan Nair."Cresendo" initiates to conducts seminars, short-term training programs, workshops and conferences periodically. Invited lectures by experts drawn from industries and academic field are arranged regularly. The students are also encouraged to present papers in national and international conferences. This has helped the students to improve their communication skills and update their technical knowledge.
             <h4>Activities</h4> 
             
             <li>Technical workshops</li>
              <li>Vocational education training</li>
            <li>MOOC courses</li>
            <li>Technical Talks</li>
            <li>Quizzes</li>
            <li>Technical festival- Aura</li>
            <li>Project Exhibitions</li>
            <li>Group Discussions</li>
            <li>Seminar by students</li>
            <li>Soft skill development programme</li>
           <li> Faculty development programme</li>
            <li>Placement training </li>

              <h4>Profrssional Activities and Memberships</h4> 
              <b>The Institution of Engineers of India (IEI) and activities</b>- The Institution of Engineers of India (IEI) was established in 1920 in Madras with Sir Thomas R J Ward as the founding president. It was formally inaugurated in 1921 by Lord Chelmsford, then-Viceroy of British India. In 1935, after a successful petition from Sir Thomas Guthrie Russell (IEI President 1933-1934), the IEI obtained a royal charter of incorporation from King George V to promote and advance the science, practice, and business of engineering.. A Student Branch falls under the auspices of a local Section. IEI was founded to help its members share information in ways that promote innovation. Members of the Institute engage in technical and professional activities designed to advance the theory and practice of electro-technology.The Institute strives to be supportive and responsive to Members' needs by seeking to anticipate and manage change in ways that will benefit members and the societies in which they live. Further, the IEI promotes public understanding and appreciation of the contributions of electronics engineers.

<b>Indian Society for Technical Education</b>

The Indian Society for Technical Education (ISTE) is the leading National Professional non-profit making Society for the Technical Education System in our country with the motto of Career Development of Teachers and Personality Development of Students and overall development of our Technical Education System.
<h4>Internship</h4>
Internship also called as training, means to get in the industrial environment and to get exposure of day to day industrial work and how it is carried out. At internships, students are trained to give them a first hand industrial experience about what they'll be doing after their course.All students of ECE branch have undergone internship in various industrial units like Keltron,KEL,KMML,BSNL etc. This will help to expose the students to the industrial atmosphere which will enable them to get placements after graduation.


</p>
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
              Department of ELECTRONICS AND commucation  Engineering<br />
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