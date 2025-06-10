import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import { Target, Eye, Users, GraduationCap, UserCheck, ThumbsUp } from 'lucide-react';
import bmceAboutBg from "../../assets/img_about/bmceaboutbg.jpg";
import IMG_3623 from "../../assets/img_about/IMG_3623.JPG";
import IMC1 from "../../assets/img_about/IMC1.jpg";
import founter from "../../assets/img_about/founter.jpg";
import management1 from "../../assets/img_about/management1.png";
import management2 from "../..//assets/img_about/management2.png";
import management3 from "../../assets/img_about/management3.png";
import { FaQuestionCircle, FaCertificate, FaChalkboardTeacher } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";


function CountUpNumber({ number, duration = 2000, start = false }) {
  const [count, setCount] = useState(0);
  const [shaking, setShaking] = useState(false);


  function parseNumber(str) {
    let n = str.replace(/,/g, "").toUpperCase();
    let multiplier = 1;
    if (n.endsWith("K")) {
      multiplier = 1000;
      n = n.slice(0, -1);
    } else if (n.endsWith("M")) {
      multiplier = 1000000;
      n = n.slice(0, -1);
    } else if (n.endsWith("%")) {
      n = n.slice(0, -1);
      multiplier = 1;
    }
    let val = parseFloat(n);
    return isNaN(val) ? 0 : val * multiplier;
  }

  const finalNumber = parseNumber(number);

  useEffect(() => {
    if (!start) {
      setCount(0);
      setShaking(false);
      return;
    }

    setShaking(true);
    let current = 0;
    const increment = finalNumber / (duration / 30);

    const interval = setInterval(() => {
      current += increment;
      if (current >= finalNumber) {
        setCount(finalNumber);
        setShaking(false);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(interval);
  }, [start, finalNumber, duration]);

  
  function formatCount() {
    if (!start) return 0; 

    if (number.endsWith("K")) {
      return (count / 1000).toFixed(0) + " K";
    } else if (number.endsWith("M")) {
      return (count / 1000000).toFixed(1) + " M";
    } else if (number.endsWith("%")) {
      return count.toFixed(0) + "%";
    }
    return count;
  }

  return (
    <div className={`stat-number ${shaking ? "shaking" : ""}`}>
      {formatCount()}
    </div>
  );
}

function About() {
  const cards = [
    {
      icon: <FaQuestionCircle size={40} color="#fff" />,
      title: "Why Study At BMCE",
      desc: "Studying at BMCE equips students with cutting-edge technical knowledge, hands-on experience, and industry exposure, preparing them to become innovative and skilled engineering professionals.",
    },
    {
      icon: <FaCertificate size={40} color="#fff" />,
      title: "Accreditation",
      desc: "Studying at BMCE equips students with cutting-edge technical knowledge, hands-on experience, and industry exposure, preparing them to become innovative and skilled engineering professionals.",
    },
    {
      icon: <GiGraduateCap size={40} color="#fff" />,
      title: "Placement",
      desc: "BMCE has a dedicated placement cell that ensures excellent career opportunities through industry collaboration, skill development, and expert guidance.",
    },
    {
      icon: <FaChalkboardTeacher size={40} color="#fff" />,
      title: "Skilled Lecturers",
      desc: "BMCE is proud to have a team of skilled lecturers who bring a blend of academic expertise and real-world experience to deliver high-quality engineering education.",
    },
  ];

  const stats = [
    {
      icon: <Users size={48} />,
      number: "118 K",
      label: "Our Happy Students"
    },
    {
      icon: <GraduationCap size={48} />,
      number: "150 K",
      label: "Enrolled Students"
    },
    {
      icon: <UserCheck size={48} />,
      number: "120+",
      label: "Expert Instructor"
    },
    {
      icon: <ThumbsUp size={48} />,
      number: "96%",
      label: "Satisfaction Rate"
    }
  ];

  
  const statsRef = useRef(null);
  const [startCountUp, setStartCountUp] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCountUp(true);
          observer.disconnect(); 
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="main">

      {/* Banner */}
      
      <div className="banner-section">
        <img src={bmceAboutBg} alt="College" />
        <div className="info-cards">
          {cards.map((item, idx) => (
            <div className="info-card" key={idx}>
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="about-left">
          <div className="about-images-container">
            <img src={IMC1} alt="Event" className="about-img about-img-1" />
            <img src={IMG_3623} alt="Event" className="about-img about-img-2" />
          </div>
          <div className="est-text">EST 2002</div>
        </div>

        <div className="about-right">
          <div className="about-heading">ABOUT OUR COLLEGE</div>
          <h3 className="about-title">
            We shape future engineers with innovation, excellence, and industry-ready skills.
          </h3>
          <p className="about-text">
            Baselios Mathews II College of Engineering (BMCE), established in 2002, is a
            self-financed institution under the Malankara Orthodox Syrian Church, managed by the Dr. C.I Tresa Trust. Named after its
            visionary founder, H.H. Baselios Marthoma Mathews II, BMCE is
            committed to technical excellence, creativity, and service to
            humanity. Located in the scenic Muthupilakadu, Sasthamcotta,
            Kollam, the college offers 6 AICTE-approved undergraduate
            courses and features modern infrastructure. BMCE is affiliated with
            APJ Abdul Kalam Technological University and strives to shape
            competent engineers for the global stage.
          </p>

          <div className="about-columns">
            <div className="mission-vision-item">
              <div className="icon-wrapper">
                <Eye size={32} />
              </div>
              <h4>Our Mission</h4>
              <p>Our mission is to empower students with technical excellence, ethical values, innovative thinking, and a global outlook to serve society.</p>
            </div>

            <div className="mission-vision-item">
              <div className="icon-wrapper">
                <Target size={32} />
              </div>
              <h4>Our Vision</h4>
              <p>Our vision is to be a center of excellence in engineering education, fostering innovation to build a better future.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Banner Section */}
      <div className="stats-banner" ref={statsRef}>
        <div className="stats-container">
          <div className="stats-card">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                  <CountUpNumber number={stat.number} start={startCountUp} />
                  <div className="stat-label">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="founder-container">
        <div className="founder-card">
          <div className="founder-image">
            <img src={founter} alt="Moran Mar Baselios Marthoma Mathews II" />
          </div>
          <div className="founder-text">
            <h4 className="founder-title">Founder</h4>
            <h2 className="founder-name">Moran Mar Baselios Marthoma Mathews II (1915 - 2006)</h2>
            <p className="founder-description">
              Moran Mar Baselios Marthoma Mathews II (1915 - 2006) was the Supreme head of Malankara Orthodox Syrian Church.
              His Holiness was successor to the Holy Apostolic Throne of St. Thomas and Catholicos of the East and Malankara
              Metropolitan. His Holiness was born at Perinad in Kollam district of Kerala, and had his theological education at Old Seminary
              Kottayam and also at Basil Dayara, Pathanamthitta. Later His Holiness joined Bishop's College, Calcutta for his B.D. Degree, and
              studied Theology at the General Theological Seminary, New York. His Holiness was ordained as deacon in 1938 then as priest in 1941.
              On 15 May 1953 His Holiness was ordained as bishop Mathews Mar Coorilos at the age of 38 by the Catholicos Baselios Geevarghese II.
              Mar Coorilos was elevated to the throne of St Thomas as Baselios Marthoma Mathews II, Catholicos of the East and Malankara Metropolitan
              on 29 April 1991. Due to ill health from old age Mathews II resigned his position as the Catholicos on 29 October 2005.
              His Holiness died on 26 January 2006, and was interred at Mount Horeb Chapel, in Sasthamkotta.
            </p>
          </div>
        </div>
      </div>

      {/* Management Section */}
      <div className="management-section">
        <h2 className="management-heading">Management</h2>
        <div className="management-cards">
          <div className="management-card">
            <img
              src={management2}
              alt="Principal"
              className="management-img"
            />
            <h3 className="management-name">Prof. Dr. L. Padma Suresh, Ph.D</h3>
            <p className="management-role">Principal</p>
          </div>
          <div className="management-card">
            <img
              src={management3}
              alt="Director"
              className="management-img"
            />
            <h3 className="management-name">Rev. Fr. Thomas Varghese</h3>
            <p className="management-role">Director</p>
          </div>
          <div className="management-card">
            <img
              src={management1}
              alt="Vice Principal"
              className="management-img"
            />
            <h3 className="management-name">Dennise Mathew</h3>
            <p className="management-role">Vice Principal</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;