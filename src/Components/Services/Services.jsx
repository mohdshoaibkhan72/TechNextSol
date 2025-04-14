import React from "react";
import "./Services.css";

function Services() {
  const servicesData = [
    {
      id: 1,
      title: "Web Development",
      description: "Build modern, responsive websites tailored to your needs.",
      image:
        "https://media.bitcot.com/wp-content/uploads/2023/06/best-web-development-languages.webp",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "Develop user-friendly mobile applications for Android and iOS.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrKN8Czb174E312H9zZ5TeQSsN27z3P0XcHg&s",
    },
    {
      id: 3,
      title: "SEO Optimization",
      description: "Improve your website's visibility on search engines.",
      image:
        "https://www.oom.com.sg/institute/wp-content/uploads/2024/11/AI-in-SEO-blog-banner.png",
    },
    {
      id: 4,
      title: "React Native Development",
      description:
        "Create mobile apps using React Native for cross-platform solutions.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7W4AqNTInSLY5MaRv-CfqsvJeebgjbbko4g&s",
    },
  ];

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-cards">
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="call-button">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
