import { MapPin, Phone } from 'lucide-react';
import './Header.css';
import collegeLogo from '../../assets/BMCElogo.png';
import bmcAccredation1 from '../../assets/bnaaclogo.png';
import bmcAccredation2 from '../../assets/nbalogo.png';
import bmcAccredation3 from '../../assets/stqc_logo.png';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  
  const collegeName = "Baselious Mathews II College of Engineering";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="top-bar">
        <div className="contact-info">
          <div className="info-item">
            <MapPin size={14} />
            <span>Sasthamcotta, Kollam</span>
          </div>
          <div className="info-item">
            <Phone size={14} />
            <span>+91-XXXXXXXXXX</span>
          </div>
        </div>
      </div>

      <div className="header-content">
        <div className="logo-section">
          <img src={collegeLogo} alt="College Logo" className="college-logo" />
        </div>

        <div className="title-section">
          {/* Choose one of these amazing animations */}
          
          {/* Neon Light Drawing */}
          { <h1 className={`neon-drawing ${animationStarted ? 'animate' : ''}`}>
            {collegeName}
          </h1> }
          <p>Approved by AICTE | Affiliated to KTU</p>
        </div>

        <div className="right-section">
          <div className="accreditations">
            <img src={bmcAccredation1} alt="accredation1" />
            <img src={bmcAccredation2} alt="accredation2" />
            <img src={bmcAccredation3} alt="accredation3" />
          </div>
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
    </header>
  );
}