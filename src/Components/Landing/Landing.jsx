import React, { useEffect, useState } from "react";
import "./Landing.css";
import Spinner from "..//Spinner/Spinner";

import img1 from "../../images/homeimg.jpg";
import img2 from "../../images/homeimg.jpg";
import img3 from "../../images/homeimg2.jpg";

const slides = [
  {
    title: "Grow Your Business with Us",
    description:
      "We specialize in web development, SEO, and app solutions to empower your brand and increase your online presence.",
    image: img1,
  },
  {
    title: "Boost Your Online Presence",
    description:
      "Our expert team will help you achieve your digital goals with cutting-edge solutions tailored to your needs.",
    image: img2,
  },
  {
    title: "Join the Digital Revolution",
    description:
      "Stay ahead of the competition by leveraging our innovative strategies for web development and digital marketing.",
    image: img3,
  },
];

function Landing() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="landing-wrapper">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`landing-page fade ${
            index === currentIndex ? "active" : ""
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overlay"></div>
          <div
            className={`leftdiv ${index === currentIndex ? "animate" : ""}`}
            key={index === currentIndex ? "active-slide" : `inactive-${index}`}
          >
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <button className="cta-button1">Get Started →</button>
            <button className="contactus1">Contact Us →</button>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="dots-container">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
      <div class="spinner-wrap">
        <div class="spinner-item"></div>
        <div class="spinner-item spinner-item--2"></div>
        <div class="spinner-item spinner-item--3"></div>
      </div>
      <div className="landing-wrapper">
        <Spinner /> {/* 👈 This places it in top-left with 100px offset */}
        {/* ...rest of your slides content */}
      </div>
    </div>
  );
}

export default Landing;
