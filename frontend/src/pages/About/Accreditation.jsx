import React, { useEffect, useState } from "react";
import logo from "../../assets/finalelogo.png";
import nba from "../../assets/nbalogo.png";
import naac from "../../assets/naaclogo.png";
import "./Accreditation.css";

const OurCampus = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen py-10 px-6">

      {/* Header Section */}
      <div className="header-container">
        <div className="logo-section">
          <img src={logo} alt="BMCE Logo" className="logo-image" />
          <div className="college-name"></div>
        </div>

        <div className="apply-button-wrapper">
          <button className="apply-button">Apply For Admission</button>
        </div>
      </div>

      {/* Campus Title */}
      <div className="main-background">
        <h1 className="main-text">Accreditation</h1>
      </div>

      {/* Main Heading */}
      <div className="main-big-header">
        <h1>NBA Accreditation</h1>
      </div>

      {/* Bar */}
      <div className="accreditation-wrapper">
        {[
          "BTech Mechanicaal Engineering (Academic Year 2022-23, 2023-24and 2024-25, i.e., upto 30-06-2025",
          "BTech Cmputer Science & Engineering",
        ].map((cycle, index) => (
          <div key={index} className="accreditation-box">
            {cycle}
          </div>
        ))}
      </div>

      {/* Trust Section */}
      <div className="nba-container">
        <div className="nba-left">
          <img src={nba} alt="Trust" className="nba-image" />
        </div>
        <div className="nba-right">
          <iframe
            src="/pdf/nba.pdf"
            title="Eapen Trust PDF"
            width="100%"
            height="500px"
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              overflow: "auto",
              objectFit: "contain"
            }}
          ></iframe>
        </div>
      </div>

      {/* NAAC */}
      
      <div className="main-big-header">
        <h1>NAAC Accreditation</h1>
      </div>

      <div className="accreditation-cycles-wrapper">
  {[
    "Accredited with B+ grade by NAAC",
  ].map((cycle, index) => (
    <div key={index} className="accreditation-box2">
      {cycle}
    </div>
  ))}
</div>

      {/* Accreditation Section */}
<div className="accreditation-section">
  {/* Now iframe is on the left */}
  <div className="accreditation-left">
    <iframe
      src="/pdf/naac.pdf"
      title="NAAC Accreditation PDF"
      width="100%"
      height="500px"
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "auto",
        objectFit: "contain"
      }}
    ></iframe>
  </div>

  {/* Image moved to the right */}
  <div className="accreditation-right">
    <img src={naac} alt="NBA Logo" className="naac-image" />
  </div>
</div>


    </div>
  );
};

export default OurCampus;
