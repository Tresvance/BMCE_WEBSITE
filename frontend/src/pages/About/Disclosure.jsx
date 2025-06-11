import React, { useEffect, useState } from "react";
import dislogo from "../../assets/finalelogo.png";
import "./Disclosure.css";

const OurCampus = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen py-10 px-6">

      {/* Header Section */}
      <div className="disclosure-container">
        <div className="logo-section">
          <img src={dislogo} alt="BMCE Logo" className="logo-image" />
          <div className="college-name"></div>
        </div>

        <div className="apply-button-wrapper">
          <button className="apply-button">Apply For Admission</button>
        </div>
      </div>


{/* Banner section */}

<div className="main-background">
        <h1 className="main-text">Mandatory Disclosure</h1>
      </div>

{/* Disclosure Bar */}
      <div className="disclosure-bar">
        <span className="disclosure-title">Mandatory Disclosure 2024</span>
        <a
          href="/pdf/disclosure.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="view-button"
        >
          View
        </a>
      </div>

      


    </div>
  );
};

export default OurCampus;
