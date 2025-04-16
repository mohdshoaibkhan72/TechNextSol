import React from "react";
import "./WhyChooseUs.css";
import aboutus from "../../assets/images/title_shape_1.svg";
import whychoseusimg from "../../assets/images/whychoseusimg.png";

function WhyChooseUs() {
  return (
    <div className="why-choose-us-container">
      {/* Left Section */}
      <div className="details-section">
        <div className="title-section">
          <img src={aboutus} alt="whychoseus" />
          <h4 className="main-heading">WHY CHOOSE US</h4>
        </div>

        <h5 className="sub-heading">
          We Deal With The Aspects Professional IT Services
        </h5>

        <p className="intro-text">
          At TechNext Solution, we believe in the power of technology to
          transform ideas into reality. Our mission is to empower your business
          with cutting-edge software solutions that drive growth, efficiency,
          and success. Let’s innovate together!
        </p>

        <ul className="benefits-list">
          <li>Big Data Analysis</li>
          <li>24/7 Online Support</li>
          <li>Business Improvement</li>
        </ul>
        <ul className="benefits-list">
          <li>High Quality Security</li>
          <li>24/7 Support Team</li>
          <li>Easy Solutions</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="image-section">
        <div className="blob-wrapper">
          <img
            src={whychoseusimg}
            alt="Why Choose Us"
            className="floating-img"
          />
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
