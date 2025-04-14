import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/technextlogo.png";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <nav className="navbar">
      {/* Top Bar Section */}
      <div className="log">
        <div className="logo">
          <img src={logo} alt="Technext Solution" />
        </div>
        <div className="i">
          <i className="fas fa-clock"></i> Mon-Sat, 10:00 AM to 6:00 PM
        </div>
        <div className="i">
          <i className="fas fa-phone-alt"></i>
          <a href="tel:+917310249234">+91 7310249234</a>
        </div>
        <div className="i">
          <i className="fas fa-envelope"></i>
          <a href="mailto:info@technextsolution.com">
            info@technextsolution.com
          </a>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="Navbar-section">
        <button
          className="hamburger-icon"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>

        <ul className={`navbar-links ${isMenuOpen ? "show" : ""}`}>
          {[
            { name: "Home", to: "/" },
            { name: "About Us", to: "/aboutus" },
            { name: "Portfolio", to: "/portfolio" },
            { name: "Blogs", to: "/blogs" },
          ].map((link) => (
            <li className="dropdown" key={link.name}>
              <div className="flip-container">
                <Link
                  to={link.to}
                  className="flip-text"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              </div>
            </li>
          ))}

          {/* Services Dropdown */}
          <li className="dropdown">
            <div className="flip-container">
              <span className="flip-text" onClick={handleLinkClick}>
                Services <i className="fa-solid fa-caret-down"></i>
              </span>
            </div>
            <ul className="dropdown-content">
              {[
                { name: "Web Development", to: "/services/web-development" },
                { name: "E-commerce Development", to: "/services/e-commerce" },
                { name: "App Development", to: "/services/app-development" },
                { name: "SEO", to: "/services/seo" },
              ].map((service) => (
                <li key={service.name}>
                  <Link to={service.to} onClick={handleLinkClick}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {/* Contact Button */}
        <div className="contact-section">
          <Link to="/contactus" className="contact-button">
            Make Appointment →
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
