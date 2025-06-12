import React, { useEffect, useState } from "react";
import bulbImage from "../../assets/bulb.jpg";
import paperImage from "../../assets/paper.jpg";
import "./IEDC.css";

const IEDC = () => {
  const [visible, setVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2025);

  useEffect(() => {
    setVisible(true);
  }, []);

  const programs = {
    2017: "Entrepreneurs & Entrepreneurship Workshop",
    2018: [
      "Technical Ecosystem for Entrepreneurship Technical Talk - 24 November 2018",
      "Industry-Institution Interaction FDP - 10 December 2018",
    ],
    2019: [
      "How to Become a Successful Entrepreneur Workshop - 29 January 2019",
      "Inter-Collegiate Startup Expo - 15 February 2019",
      "Idea Expo - 3 March 2019",
      "How to Become a Successful Entrepreneur Workshop - 4 September 2019",
    ],
      2020: 
      ["Entrepreneurship Activities after Covid-19 - 15 May 2020",
        "India Startups & Entrepreneurial Orientation - 31 October 2020",
      ],
        2021: 
        ["How to Start an Enterprise Webinar - 4 February 2021",
          "'I M-POSSIBLE Webinar' - 27 February 2021",
          "The Art of Entrepreneurial Leadership Webinar - 6 March 2021",
          "Induction Program - 17 Nov 2021",
          "Abhyudi’21 - 4 December 2021",
        ],
    2022:[ 
    "IEDC Summit’22 SJCET - 2 March 2022",
    "Workshop on Microsoft Excel - 13 May 2022",
    "Induction Program - 2 July 2022",
    "First Year Orientation - 28 October 2022",
    "Orientation Class & Zonal Meet -  11 November 2022",
    "Entrepreneurship Bootcamp’23 - 2 December 2022",
      ],
    2023:[ 
    "IEDC Sumit’23 RSET Visit - 7 March 2023",
    "Social Innovation Program - 10 March 2023",
    "Ideathon’23 - 1 April 2023",
    "IEDC Summit’23 CET Visit - 12 October 2023",
    ],
    2024: [
      "Launchpad - 28 September 2024",
      "IEDC Summit’24 Visit - 30 September 2024",
      "Entreprenext - 25 October 2024",
      "Idea Pitching - 11 November 2024",
      "Project Expo - 11 November 2024",
    ],
      2025: "Idea Bootcamp - 30 - 31 January 2025",
  };

  return (
    <div className="bg-blue-50 min-h-screen py-10 px-6">
      {/* Header */}
      <div className="aboutiedc-container">
    

      </div>

      {/* Campus Title */}
      <div className="banner-background">
        <h1 className="main-text">Innovation & Entrepreneurship Development Cell</h1>
      </div>

      {/* IEDC Double image container */}
      <div className="afterbanner-container reverse">
        <div className="afterbanner-right">
          <h2 className="afterbanner-founder">Overview</h2>
          <h3 className="afterbanner-heading">Innovation & Entrepreneurship Development Cell</h3>
          <p className={`afterbanner-description ${visible ? "visible" : ""}`}>
            The Innovation & Entrepreneurship Development Cell (IEDC) is established with the vision to promote innovation, creativity, and entrepreneurship among students and faculty members. The cell aims to foster a culture of innovation and support individuals in transforming their innovative ideas into scalable and sustainable business ventures.
          </p>

          <h2 className="afterbanner-founder">Benefits</h2>
          <div className="benefit-item">
            <span className="tick-icon">✔</span>
            <p className="benefit-text">Encourages entrepreneurial thinking and innovation</p>
          </div>
          <div className="benefit-item">
            <span className="tick-icon">✔</span>
            <p className="benefit-text">Provides mentorship and funding support</p>
          </div>
          <div className="benefit-item">
            <span className="tick-icon">✔</span>
            <p className="benefit-text">Connects students with industry leaders and incubators</p>
          </div>
          <div className="benefit-item">
            <span className="tick-icon">✔</span>
            <p className="benefit-text">Hands-on training through workshops and hackathons</p>
          </div>

          <h2 className="afterbanner-founder">Key Initiatives</h2>
          <h4 className="bar-label">Startup Incubation Support</h4>
          <div className="mission-bar"></div>
          <h4 className="skill-label">Skill Development Programs</h4>
          <div className="skill-bar"></div>
          <h4 className="awareness-label">Entrepreneurship Awareness Camps</h4>
          <div className="awareness-bar"></div>
        </div>

        <div className="afterbanner-left">
          <img src={bulbImage} alt="Legacy" className="afterbanner-image" />
          <img src={paperImage} alt="Overlay" className="iedcoverlay-image" />
        </div>
      </div>

      {/* Gallery */}
      <div className="gallery-section">
        <h2 className="gallery-heading">Snapshots</h2>
        <div className="gallery-grid">
          {Array.from({ length: 16 }).map((_, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={`../images/gallery${index + 1}.jpg`}
                alt={`Gallery ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scrollable Year Section */}
      <h2 className="gallery-heading">IEDC Activities</h2>
      <div className="year-section-container">
        <div className="year-list">
          {Object.keys(programs).map((year) => (
            <div
              key={year}
              onClick={() => setSelectedYear(Number(year))}
              className={`year-item ${selectedYear === Number(year) ? "selected-year" : ""}`}
            >
              {year}
            </div>
          ))}
        </div>

        <div className="program-details">
          <h3 className="program-year">{selectedYear}</h3>
          <div className="program-description">
            {Array.isArray(programs[selectedYear]) ? (
              <ul>
                {programs[selectedYear].map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            ) : (
              <p>{programs[selectedYear]}</p>
            )}
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default IEDC;
