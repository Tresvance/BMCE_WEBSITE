import { MapPin, Phone } from "lucide-react";
import "./Header.css";
import collegeLogo from "../../assets/BMCElogo.png";
import bmcAccredation1 from "../../assets/bnaaclogo.png";
import bmcAccredation2 from "../../assets/nbalogo.png";
import bmcAccredation3 from "../../assets/stqc_logo.png";
import applyImage from "../../assets/founder.png";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  const collegeName = "BASELIOUS MATHEWS II COLLEGE OF ENGINEERING";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Only show header at the very top on mobile/tablet
      if (window.innerWidth <= 1024) {
        setHideHeader(window.scrollY > 0);
      } else {
        setHideHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      className={`head-main-header${scrolled ? " head-scrolled" : ""}${hideHeader ? " head-hide" : ""}`}
    >
      {/* Top bar moved to leftmost side */}
      <div className="head-top-bar">
        <div className="head-contact-info">
          <div className="head-info-item">
            <MapPin size={14} />
            <span>Sasthamcotta, Kollam</span>
          </div>
          <div className="head-info-item">
            <Phone size={14} />
            <span>+91-XXXXXXXXXX</span>
          </div>
        </div>
      </div>

      <div className="head-header-content">
        <div className="head-logo-title-wrapper">
          <div className="head-logo-section">
            <img
              src={collegeLogo}
              alt="College Logo"
              className="head-college-logo"
            />
          </div>

          <div className="head-title-section">
            <h1
              className={`head-neon-drawing${animationStarted ? " head-animate" : ""}`}
            >
              {collegeName}
            </h1>
            <p>Approved by AICTE | Affiliated to KTU</p>
          </div>
        </div>

        <div className="head-right-section">
          <div className="head-apply-section">
            <button className="head-apply-btn">Apply Now</button>
            <div className="head-vertical-line"></div>
            <div className="head-founder-image-container">
              <div className="head-apply-card">
                <img
                  src={applyImage}
                  alt="Founder Image"
                  className="head-apply-image"
                />
              </div>
            </div>
          </div>

          <div className="head-accreditations">
            <img src={bmcAccredation1} alt="accredation1" />
            <img src={bmcAccredation2} alt="accredation2" />
            <img src={bmcAccredation3} alt="accredation3" />
          </div>
        </div>
      </div>
    </header>
  );
}
