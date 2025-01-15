import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <img src="/assets/images/medico.png" alt="Medico Logo" className="footer-logo" />
          <p className="footer-description">
            Medico is a detailed healthcare platform that aims to connect patients with healthcare providers in a way that is both efficient and easy to use.
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h4 className="footer-heading">Contact Us</h4>
          <p className="footer-contact">
            <i className="fas fa-envelope"></i> medico@gmail.com
          </p>
          <h4 className="footer-heading">Follow Us On</h4>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
