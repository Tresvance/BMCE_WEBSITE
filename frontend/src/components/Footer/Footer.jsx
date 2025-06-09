import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import footerImage from "../../assets/images/logos/finalelogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="fr-footer-container">
      <div className="fr-footer-content">
        {/* Left Section - Logo and Address */}
        <div className="fr-footer-section">
          <div className="fr-logo-section">
            <img
              src={footerImage}
              alt="College Logo"
              className="fr-college-logo"
            />
            <div className="fr-college-info">
              <div className="fr-college-address">
                <p>Sasthamcotta || Kollam || Kerala</p>
                <p>India</p>
                <p className="fr-contact-info">
                  <span>Phone: (0476) 2835579</span>
                  <span>Email: bm2coe@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - Quick Navigation */}
        <div className="fr-footer-section">
          <h4 className="fr-section-title">Quick Links</h4>
          <div className="fr-nav-links">
            <div className="fr-nav-column">
              <a href="/about" className="fr-footer-link">
                About Us
              </a>
              <a href="/academics" className="fr-footer-link">
                Academics
              </a>
              <a href="/admissions" className="fr-footer-link">
                Admissions
              </a>
              <a href="/research" className="fr-footer-link">
                Research
              </a>
            </div>
            <div className="fr-nav-column">
              <a href="/campus-life" className="fr-footer-link">
                Campus Life
              </a>
              <a href="/athletics" className="fr-footer-link">
                Athletics
              </a>
              <a href="/library" className="fr-footer-link">
                Library
              </a>
              <a href="/contact" className="fr-footer-link">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Social Media and Quote */}
        <div className="fr-footer-section">
          <h4 className="fr-section-title">Connect With Us</h4>
          <div className="fr-social-media">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="fr-social-link"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="fr-social-link"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="fr-social-link"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="fr-social-link"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="fr-social-link"
            >
              <Youtube size={24} />
            </a>
          </div>
          <div className="fr-college-quote">
            <p>
              "Empowering minds, shaping futures, building tomorrow's leaders
              through excellence in education and innovation."
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="fr-footer-bottom">
        <div className="fr-copyright-content">
          <p>&copy; 2025 BMCE SASTHAMCOTTA. All rights reserved.</p>
          <p>
            Powered by{" "}
            <a
              href="https://www.tresvance.com"
              target="_blank"
              rel="noopener noreferrer"
              className="fr-tresvance-link"
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
