import React, { useEffect, useState } from "react";
import logo from "../../assets/finalelogo.png";
import trustImage from "../../assets/eapen.jpg";
import libraryImage from "../../assets/Library2.JPG";
import secondImage from "../../assets/Library1.jpg";
import chapelImage from "../../assets/chapel.jpg";
import meditationImage from "../../assets/meditation.jpg";
import "./OurCampus.css";

const OurCampus = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen py-10 px-6">

    
      {/* Campus Title */}
      <div className="campus-background">
        <h1 className="campus-text">Our Campus</h1>
      </div>

      {/* Trust Section */}
      <div className="trust-container">
        <div className="trust-left">
          <img src={trustImage} alt="Trust" className="trust-image" />
        </div>
        <div className="trust-right">
          <h3 className="trust-heading">DR. C. T. EAPEN TRUST</h3>
          <p className={`trust-description ${visible ? "visible" : ""}`}>
            Rev. Dr. C. T. Eapen, an educationist, theologian, and devoted priest of the Orthodox Church, made significant contributions to both church and society. Born into the Nellimoottil Chavadiyil family in Adoor, he earned his M.A. and Ph.D. in Education from the University of Chicago and later founded a Residential School in Sasthamcotta, dedicating himself to shaping young minds. Ordained by Patriarch Mar Aphrem and H.G. Kuriakose Mar Gregorios, he served in various church roles, including the Malankara Association and Orthodox Theological Seminary. He represented the Church at the W.C.C. Assembly (1954) and Vatican Council (1962), and inspired youth through his leadership in the Orthodox Student Conference. Though elected to the episcopate, he humbly declined, focusing instead on ecumenical efforts like his journal The Star of the East. His legacy continues through a Trust once chaired by H.G. Mathews Mar Coorilos.
          </p>
        </div>
      </div>

      {/* Additional Trust Section */}
<div className="library-container reverse">
  <div className="library-right">
    <h2 className="library-founder">Library</h2>
    <h3 className="library-heading">Your Gateway to Knowledge</h3>
    <p className={`library-description ${visible ? "visible" : ""}`}>
      The BMCE College Library is a central hub for academic learning and research. It provides access to a wide range of resources, including textbooks, reference books, journals, and online databases. The library offers a quiet, comfortable space for individual study as well as facilities for group discussions. Computer access, printing services, and Wi-Fi are available to support students' academic needs. Trained library staff are always ready to help users find the information they need and navigate digital resources.
    </p>

    {/* Animated Explore, Learn, Grow text */}
    <div className="explore-learn-grow">
      <div className="word-wrapper">
        <div className="word-list">
          <span>Explore</span>
          <span>Learn</span>
          <span>Grow</span>
        </div>
      </div>
    </div>
  </div>

  <div className="library-left">
    <img src={libraryImage} alt="Legacy" className="library-image" />
    <img src={secondImage} alt="Overlay" className="overlay-image" />
  </div>
</div>

<div className="chapel-container">
        <div className="chapel-left">
          <img src={chapelImage} alt="Trust" className="chapel-image" />
        </div>
        <div className="chapel-right">
          <h2 className="chapel-founder">Chapel</h2>
          <h3 className="chapel-heading">Mount Horeb Ashramam</h3>
          <p className={`chapel-description ${visible ? "visible" : ""}`}>
            Mount Horeb Ashramam stands as a symbol of the college’s commitment to nurturing not just academic excellence but also inner peace and moral values. The chapel regularly hosts prayer meetings, spiritual talks, and special services that encourage a sense of community and spiritual well-being. Its tranquil atmosphere inspires reflection and fosters a deeper connection with one’s faith and purpose. Surrounded by nature and thoughtfully designed for contemplation, Mount Horeb Ashramam invites everyone to pause, pray, and find solace amid the rhythm of campus life.
          </p>
        </div>
      </div>

<div className="library-container reverse">
  <div className="library-right">
    <h2 className="library-founder">Meditation Room</h2>
    <h3 className="library-heading">Calm Within the Campus</h3>
    <p className={`library-description ${visible ? "visible" : ""}`}>
      BMCE provides a dedicated Meditation Room on campus, offering a peaceful environment where students and staff can relax, reflect, and recharge amidst their academic routines. This tranquil space encourages mindfulness and mental well-being, promoting focus, emotional balance, and stress relief. Whether for quiet contemplation or spiritual practice, the Meditation Room stands as a sanctuary for inner peace and personal growth within the college community.
    </p>

    {/* Animated Explore, Learn, Grow text */}
    
  </div>

  <div className="library-left">
    <img src={meditationImage} alt="Legacy" className="library-image" />
  </div>
</div>
    </div>
  );
};

export default OurCampus;
