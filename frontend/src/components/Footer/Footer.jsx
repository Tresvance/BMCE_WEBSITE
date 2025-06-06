import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import footerImage from "../../assets/images/logos/finalelogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section - Logo and Address */}
        <div className="footer-section">
          <div className="logo-section">
            <img
              src={footerImage}
              alt="College Logo"
              className="college-logo"
            />
            <div className="college-info">
              {/* <h3 className="college-name">BMCE SASTHAMCOTTA</h3> */}
              <div className="college-address">
                {/* <p>Sasthamcotta</p> */}
                <p>Sasthamcotta || Kollam || Kerala</p>
                <p>India</p>
                <p className="contact-info">
                  <span>Phone: (0476) 2835579</span>
                  <span>Email: bm2coe@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - Quick Navigation */}
        <div className="footer-section">
          <h4 className="section-title">Quick Links</h4>
          <div className="nav-links">
            <div className="nav-column">
              <a href="/about" className="footer-link">
                About Us
              </a>
              <a href="/academics" className="footer-link">
                Academics
              </a>
              <a href="/admissions" className="footer-link">
                Admissions
              </a>
              <a href="/research" className="footer-link">
                Research
              </a>
            </div>
            <div className="nav-column">
              <a href="/campus-life" className="footer-link">
                Campus Life
              </a>
              <a href="/athletics" className="footer-link">
                Athletics
              </a>
              <a href="/library" className="footer-link">
                Library
              </a>
              <a href="/contact" className="footer-link">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Social Media and Quote */}
        <div className="footer-section">
          <h4 className="section-title">Connect With Us</h4>
          <div className="social-media">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Youtube size={24} />
            </a>
          </div>
          <div className="college-quote">
            <p>
              "Empowering minds, shaping futures, building tomorrow's leaders
              through excellence in education and innovation."
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <div className="copyright-content">
          <p>&copy; 2025 BMCE SASTHAMCOTTA. All rights reserved.</p>
          <p>
            Powered by{" "}
            <a
              href="https://www.tresvance.com"
              target="_blank"
              rel="noopener noreferrer"
              className="tresvance-link"
            >
              TRESVANCE
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
