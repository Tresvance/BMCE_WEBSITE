import React, { useEffect, useState } from "react";
import iedclogo from "../../assets/finalelogo.png";
import nssImage from "../../assets/NSSlogo.png";
import "./NSS.css";
import img1 from "../../assets/nssgallery/img1.jpg";
import img2 from "../../assets/nssgallery/img2.jpg";
import img3 from "../../assets/nssgallery/img3.jpg";
import img4 from "../../assets/nssgallery/img4.jpg";
import img5 from "../../assets/nssgallery/img5.jpg";
import img6 from "../../assets/nssgallery/img6.jpg";
import img7 from "../../assets/nssgallery/img7.jpg";
import img8 from "../../assets/nssgallery/img8.jpg";
import img9 from "../../assets/nssgallery/img9.jpg";

const NSS = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const galleryItems = [
    { image: img1, caption: "Teachers Day" },
    { image: img2, caption: "Stem Cell Collection" },
    { image: img3, caption: "Organ Donation Info Session" },
    { image: img4, caption: "Women's Day Celebration" },
    { image: img5, caption: "Independence Day Celebration" },
    { image: img6, caption: "Volunteer's Day Celebration" },
    { image: img7, caption: "World Coconut Day" },
    { image: img8, caption: "Anti Drug Awareness Class" },
    { image: img9, caption: "International Yoga Day" },
  ];

  return (
    <div className="bg-blue-50 min-h-screen py-10 px-6">
      {/* Header */}
      <div className="aboutiedc-container">
        <div className="logo-section">
          <img src={iedclogo} alt="BMCE Logo" className="logo-image" />
          <div className="college-name"></div>
        </div>

        <div className="apply-button-wrapper">
          <button className="apply-button">Apply For Admission</button>
        </div>
      </div>

      <div className="nssbanner-background">
        <h1 className="main-text">National Service Scheme</h1>
        <h1 className="animated-text">
          <span className="word" style={{ animationDelay: "0s" }}>"NOT</span>
          <span className="word" style={{ animationDelay: "0.5s" }}>Me</span>
          <span className="word" style={{ animationDelay: "1s" }}>But</span>
          <span className="word" style={{ animationDelay: "1.5s" }}>You"</span>
        </h1>
      </div>

      {/* First Container */}
      <div className="nsslibrary-container reverse">
        <div className="nsslibrary-right">
          <h2 className="nsslibrary-founder">Overview</h2>
          <h3 className="nsslibrary-heading">National Service Scheme</h3>
          <p className={`nsslibrary-description ${visible ? "visible" : ""}`}>
            The National Service Scheme (NSS) is a Central Sector Scheme of Government of India, Ministry of Youth Affairs & Sports. It provides opportunity to the student youth of 11th & 12th Class of schools at +2 Board level and student youth of Technical Institution, Graduate & Post Graduate at colleges and University level of India to take part in various government led community service activities & programmes. The sole aim of the NSS is to provide hands-on experience to young students in delivering community service.
          </p>
          <h2 className="afternss-founder">Benefits</h2>
          <div className="benefit-item">
            <span className="tick-icon">✔</span>
            <p className="benefitnss-text">To understand the community in which they work</p>
          </div>
          <div className="benefitnss-item">
            <span className="tick-icon">✔</span>
            <p className="benefitnss-text">To develop a sense of social and civic responsibility</p>
          </div>
          <div className="benefitnss-item">
            <span className="tick-icon">✔</span>
            <p className="benefitnss-text">To gain skills in mobilizing community participation</p>
          </div>
          <div className="benefitnss-item">
            <span className="tick-icon">✔</span>
            <p className="benefitnss-text">To foster respect for labor and dignity of work</p>
          </div>
        </div>

        <div className="nsslibrary-left">
          <img src={nssImage} alt="Legacy" className="nsslibrary-image" />
        </div>
      </div>

      {/* Gallery Section */}
      <div className="nss-gallery-container">
        <h2 className="gallery-title">CAMPUS PROGRAMMES</h2>
        <br />
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div className="gallery-item" key={index}>
              <img src={item.image} alt={`Gallery ${index + 1}`} className="gallery-image" />
              <p className="gallery-caption">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
      <br/>
      <br/>
    </div>
  );
};

export default NSS;
