import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content">
            {/* Address and Contact Details */}
            <div className="footer-address-social">
              <div className="footer-address">
                <h4>Find Us</h4>
                <address>
                  <p>
                    <i className="fas fa-map-marker-alt"></i> Prayagraj, Uttar
                    Pradesh, India - 211001
                  </p>
                  <p>
                    <i className="fas fa-envelope"></i>{" "}
                    info@technextsolution.com
                  </p>
                  <p>
                    <i className="fas fa-phone-alt"></i> +91 73102 49234
                  </p>
                </address>
              </div>

              {/* Social Media Icons */}
              <div className="footer-social-icons">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a
                    href="https://www.facebook.com/profile.php?id=61573713864427"
                    className="social-icon facebook"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/technext-solution/?viewAsMember=true"
                    className="social-icon linkedin"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/technext_solution/"
                    className="social-icon instagram"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* About Us Section */}
            <div className="footer-about-us">
              <h3>About Us</h3>
              <ul>
                <li>
                  <a href="/ourstory">Our Story</a>
                </li>
                <li>
                  <a href="/ourteam">Our Team</a>
                </li>
                <li>
                  <a href="/ourcarear">Careers</a>
                </li>
                <li>
                  <a href="/contactus">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Services Section */}
            <div className="footer-services">
              <h3>Our Services</h3>
              <ul>
                <li>
                  <a href="web-development">Web Development</a>
                </li>
                <li>
                  <a href="app-dev">App Development</a>
                </li>
                <li>
                  <a href="uiux">UI/UX Design</a>
                </li>
                <li>
                  <a href="ser">SEO Services</a>
                </li>
              </ul>
            </div>

            {/* Map Section */}
            {/* <div className="footer-map">
              <h3>Find Us On the Map</h3>
              <div className="map-container">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14679.746636153666!2d76.85945838748764!3d30.71920489047649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a56b227fa8ab5%3A0xf8d2c08a88a97bdf!2sChandigarh%20Haryana%2C%20India!5e0!3m2!1sen!2sus!4v1674131881234!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div> */}
          </div>
        </div>
      </footer>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p className="footer-bottom-text">
          NextTechSolution | Reserved @ Developed by NextTechSolution
        </p>
      </div>
    </>
  );
};

export default Footer;
