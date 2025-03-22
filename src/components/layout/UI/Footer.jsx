import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";


export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Send me a message and make something together.</h2>
        <button className="contact-btn">Contact Us →</button>
      </div>

      <div className="footer-container">
        <div className="footer-brand">
          <div className="brand-logo">Akash</div>
          <p>
            Full-stack developer specializing in PHP, React, HTML, CSS, WordPress, and Shopify.
            Passionate about creating dynamic and scalable web solutions with modern technologies.
          </p>
          <div className="social-icons">
            <a href="https://github.com/AkashThakur14" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:ak9988385532">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/contact" >Contact</NavLink></li>
            
            </ul>
          </div>

          {/* Empty div for future newsletter section */}
          <div className="footer-column">
          <p>
            Full-stack developer specializing in PHP, React, HTML, CSS, WordPress, and Shopify.
            Passionate about creating dynamic and scalable web solutions with modern technologies.
          </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Akash. All rights reserved.</p>
      </div>
    </footer>
  );
};
