import React, { useState, useMemo } from "react";
import "./Portfolio.css";
import img1 from "../../../images/pragteahome.png";
import img2 from "../../../images/image.png";
import img3 from "../../../images/paisa4you.png";
import img4 from "../../../images/EMS.png";
import img5 from "../../../images/routesimg.jpg";
import img6 from "../../../images/freeemi.png";
const projects = [
  {
    title: "TechNext Solution",
    image: img2,
    liveLink: "https://technextsolution.vercel.app/",
    type: "Static Websites",
  },
  {
    title: "Paisa4you",
    image: img3,
    liveLink: "https://www.paisa4you.com/",
    type: "Static Websites",
  },
  {
    title: "Employee Management System",
    image: img4,
    liveLink: "https://ems-hr.vercel.app/",
    type: "Fullstack",
  },
  {
    title: "Prayag Tea",
    image: img1,
    liveLink: "https://www.prayagtea.com/",
    type: "Static Websites",
  },
  {
    title: "FREE EMI",
    image: img6,
    liveLink: "https://www.freeemi.com/",
    type: "Fullstack",
  },
];

const Portfolio = () => {
  const [selectedType, setSelectedType] = useState("All");

  // Filter projects using useMemo for optimization
  const filteredProjects = useMemo(() => {
    return selectedType === "All"
      ? projects
      : projects.filter((project) => project.type === selectedType);
  }, [selectedType]);

  // Filter button options
  const filterOptions = ["All", "Fullstack", "Static Websites"];

  return (
    <div className="portfolio-container">
      {/* Header Section */}
      <div className="header-section">
        <img src={img5} alt="Portfolio Background" className="header-image" />
        <div className="header-overlay">
          <nav className="nav-links">
            <p className="home-link">Home /</p>
            <p className="portfolio-link">Portfolio</p>
          </nav>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {filterOptions.map((type) => (
          <button
            key={type}
            className={selectedType === type ? "active" : ""}
            onClick={() => setSelectedType(type)}
          >
            {type} Projects
          </button>
        ))}
      </div>

      {/* Portfolio Section */}
      <div className="portfolio-section">
        <h2>My Portfolio</h2>
        <p>
          Here are some of the projects I've worked on for my clients across
          various industries.
        </p>
        <div className="project-grid">
          {filteredProjects.map(({ title, image, liveLink }, index) => (
            <div className="project-card" key={index}>
              <div className="image-container">
                <img src={image} alt={`Screenshot of ${title}`} />
                <div className="overlay">
                  <h3>{title}</h3>
                  <div className="links">
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                      aria-label={`View live demo of ${title}`}
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
