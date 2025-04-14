import React from "react";
import "./WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <div className="why-choose-us-container">
      {/* Left Section */}
      <div className="details-section">
        <h1 className="main-heading">WHY CHOOSE US?</h1>
        <p className="intro-text">
          We specialize in delivering tailored solutions in web development,
          digital marketing, and advanced tech. Here's why we stand out:
        </p>
        <ul className="benefits-list">
          <li>
            <strong>Specialized Knowledge in TechnextSolution:</strong> We go
            beyond surface-level technologies, diving deep into advanced
            solutions like Designing and Development, Digital Marketing.
          </li>
          <li>
            <strong>Tailored Web Development Solutions:</strong> Our web
            development team creates high-performing, scalable digital platforms
            designed with your specific goals and user experience in mind.
          </li>
          <li>
            <strong>Strategic Digital Marketing Approach:</strong> Our digital
            marketing strategies are rooted in data-driven insights and
            customized for businesses that require precision targeting and
            measurable growth.
          </li>
          <li>
            <strong>Dedicated Support and Collaboration:</strong> We provide a
            dedicated team that believes in open communication, timely updates,
            and a collaborative approach.
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="image-section">
        <img
          src="https://mcodify.com/wp-content/uploads/2021/01/finalcheckup.gif"
          alt="Why Choose Us"
        />
      </div>
    </div>
  );
}

export default WhyChooseUs;
