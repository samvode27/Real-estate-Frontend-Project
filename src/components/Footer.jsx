import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section py-5 bg-dark text-light" id="footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">DreamEstates</h5>
            <p>Your trusted partner in finding dream homes across Ethiopia. Let’s build your future together.</p>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#residencies" className="footer-link">Residencies</a></li>
              <li><a href="#value" className="footer-link">Why Choose Us</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-5">
            <h6 className="fw-bold mb-3">Subscribe to Newsletter</h6>
            <form className="d-flex mb-3">
              <input type="email" className="form-control me-2" placeholder="Email address" />
              <button type="submit" className="btn btn-warning">Subscribe</button>
            </form>
            <div className="social-icons d-flex gap-3">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        <hr className="bg-secondary" />

        <div className="text-center pt-3">
          <small>&copy; {new Date().getFullYear()} DreamEstates. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
