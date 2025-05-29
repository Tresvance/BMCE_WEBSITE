import { MapPin, Phone } from 'lucide-react';
import './Header.css';
import collegeLogo from '../../assets/finallogo1.png';
import bmcAccredation1 from '../../assets/bnaaclogo.png'
import bmcAccredation2 from '../../assets/nbalogo.png'
import bmcAccredation3 from '../../assets/stqc_logo.png'

export default function Header() {
  return (
    <header className="top-header">
      <div className="header-content">
        <div className="left-info">
          <div className="info-item">
            <MapPin size={16} />
            <span>BMCE College, Sasthamcotta, Kollam</span>
          </div>
          <div className="info-item">
            <Phone size={16} />
            <span>+91-XXXXXXXXXX</span>
          </div>
        </div>
      </div>
      <div className="logo-bar">
        <div className="logo-left">
          <img src={collegeLogo} alt="College Logo" className="college-logo" />
        </div>
        <div className='accredations'>
            <img src={bmcAccredation1} alt="accredation1" className='accred-logo' />
            <img src={bmcAccredation2} alt="accredation2" className='accred-logo' />
            <img src={bmcAccredation3} alt="accredation3" className='accred-logo' />
        </div>
        <button className="apply-button">Apply Now</button>
      </div>
    </header>
  );
}