import React, { useState } from "react";
import "./Contactus.css";
import img5 from "../../../images/contactus.jpg";
import img4 from "../../../images/routesimg.jpg";

const contactOptions = [
  {
    icon: "fas fa-comment-alt",
    title: "Chat with us",
    description: "Need assistance? We're here to chat with you.",
    link: "https://api.whatsapp.com/send?phone=+917310249234&text=Hello! I need assistance.",
    linkText: "CHAT",
  },
  {
    icon: "fas fa-phone-alt",
    title: "Call with us",
    description: "Prefer to talk? Call us anytime. 24 x 7",
    link: "tel:+917310249234",
    linkText: "CALL",
  },
  {
    icon: "fas fa-envelope",
    title: "Email with us",
    description:
      "Have a question? Send us an email, and we'll respond shortly.",
    link: "mailto:info@technextsolution.com",
    linkText: "EMAIL",
  },
];

const ContactCard = ({ icon, title, description, link, linkText }) => (
  <div className="card">
    <i className={`${icon} card-icon`}></i>
    <h3>{title}</h3>
    <p>{description}</p>
    <button className="contact-button">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {linkText}
      </a>
    </button>
  </div>
);

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      {/* Header Section */}
      <div className="header-section">
        <img src={img4} alt="Portfolio Background" className="header-image" />
        <div className="header-overlay">
          <nav className="nav-links">
            <p className="home-link">Home /</p>
            <p className="contactus-link">Contact Us</p>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="contact-us">
        <h1>If you have any queries, feel free to contact us</h1>

        {/* Contact Options */}
        <div className="contact-cards">
          {contactOptions.map((option, index) => (
            <ContactCard key={index} {...option} />
          ))}
        </div>

        {/* Contact Form and Image Section */}
        <div className="form-image-section">
          {/* Contact Image */}
          <div className="contact-image">
            <img src={img5} alt="Contact" />
          </div>

          {/* Contact Form */}
          <div className="form-section">
            <form action="https://api.web3forms.com/submit" method="POST">
              {/* Web3Forms Access Key */}
              <input
                type="hidden"
                name="access_key"
                value="a723f59c-d1be-44a1-b942-a27a15c862c6"
              />

              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  aria-label="Enter your name"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  aria-label="Enter your email"
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  aria-label="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                  aria-label="Enter your message"
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
