import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';
import './contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const departments = [
    'General Inquiry',
    'Admissions Office',
    'Academic Affairs',
    'Student Services',
    'Financial Aid',
    'Career Services',
    'International Office',
    'IT Support'
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contacthero-section">
        <div className="contacthero-content">
          <h1 className="contacthero-title">Contact Us</h1>
          <p className="contacthero-subtitle">
            We're here to help and answer any questions you might have. 
            We look forward to hearing from you.
            gooojh
          </p>
        </div>
        <div className="contacthero-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
        </div>
      </div>

      <div className="contact-container">
        {/* Quick Contact Cards */}
        <div className="quick-contact-section">
          <div className="quick-contact-grid">
            <div className="contact-card">
              <div className="contactcard-icon">
                <Phone size={24} />
              </div>
              <h3>Call Us</h3>
              <p>(+91) 0476-2835579</p>
              <p> (+91) 8281801579</p>
              <span className="card-label">Mon-Fri 9AM-5PM</span>
            </div>
            
            <div className="contact-card">
              <div className="contactcard-icon">
                <Mail size={24} />
              </div>
              <h3>Email Us</h3>
              <p> bm2coe@gmail.com</p>
              <p> principal@bmce.ac.in</p>
              <span className="card-label">24/7 Support</span>
            </div>
            
            <div className="contact-card">
              <div className="contactcard-icon">
                <MapPin size={24} />
              </div>
              <h3>Visit Us</h3>
              <p>Lake View, Muthupilakadu,</p>
              <p>Sasthamcotta, Kollam,
              Kerala, India - 690 520,</p>
              <span className="card-label">Campus Tours Available</span>
            </div>
            
            <div className="contact-card">
              <div className="contactcard-icon">
                <Clock size={24} />
              </div>
              <h3>Office Hours</h3>
              <p>Monday - Friday: 9AM - 5PM</p>
              <p>Saturday: 9AM - 2PM</p>
              <span className="card-label">Closed Sundays</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="contactmain-content">
          {/* Contact Form */}
          <div className="contactform-section">
            <div className="contactsection-header">
              <h2>Get In Touch</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
            
            <div className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <User size={18} />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">
                    <Mail size={18} />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">
                    <Phone size={18} />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="department">
                    <MessageSquare size={18} />
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a department</option>
                    {departments.map((dept, index) => (
                      <option key={index} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter the subject of your inquiry"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>
              
              <button onClick={handleSubmit} className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Department Contacts */}
          <div className="departments-section">
            
            
            <div className="departments-grid">
              <div className="department-card">
                <h4>Admissions Office</h4>
                <p><Phone size={16} /> (+91) 8281801579 </p>
                <p><Mail size={16} /> bm2coe@gmail.com</p>
                <span className="department-hours">Mon-Fri: 9AM-5PM</span>
              </div>
              
              <div className="department-card">
                <h4>Student Services</h4>
                <p><Phone size={16} /> (+91) 8281801579</p>
                <p><Mail size={16} /> bm2coe@gmail.com</p>
                <span className="department-hours">Mon-Fri: 9AM-6PM</span>
              </div>
              
              <div className="department-card">
                <h4>Financial Aid</h4>
                <p><Phone size={16} />(+91) 8281801579</p>
                <p><Mail size={16} /> bm2coe@gmail.com</p>
                <span className="department-hours">Mon-Fri: 8AM-4PM</span>
              </div>
              
              <div className="department-card">
                <h4>Career Services</h4>
                <p><Phone size={16} />(+91) 8281801579</p>
                <p><Mail size={16} /> bm2coe@gmail.com</p>
                <span className="department-hours">Mon-Fri: 9AM-5PM</span>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ContactPage;