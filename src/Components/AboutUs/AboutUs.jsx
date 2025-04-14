import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./AboutUs.css";
import poster from "../../assets/images/aboutimg.png";
import img5 from "../../images/routesimg.jpg";

function AboutUs() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isAboutUsPage = pathname === "/aboutus";

  return (
    <>
      {isAboutUsPage && (
        <div className="header-section">
          <img src={img5} alt="Portfolio Background" className="header-image" />
          <div className="header-overlay">
            <nav className="nav-links">
              <Link to="/" className="home-link">
                Home /
              </Link>
              <p className="portfolio-link">About Us</p>
            </nav>
          </div>
        </div>
      )}

      <section className="aboutus">
        <div className="leftside">
          <img src={poster} alt="About TechNext Solution" />
        </div>

        <article className="rightside">
          <h1 className="h1">About Us</h1>
          <h2>
            We Are Increasing Business Success With{" "}
            <span className="h1">TechNext Solution</span>
          </h2>
          <p>
            <strong>TechNext Solution</strong> is a growing software development
            company that has successfully delivered projects across various
            industries. We pride ourselves on providing tailored, secure, and
            scalable solutions that meet your unique business needs.
          </p>
          <p>
            We specialize in building dynamic web applications, mobile apps, and
            enterprise-level solutions to cater to the specific needs of our
            clients. Our dedicated team ensures seamless integration and
            innovation in every project we deliver.
          </p>
          <p>
            Our mission is to empower businesses by leveraging technology to
            drive growth and improve efficiency. We prioritize security,
            scalability, and user experience in every solution.
          </p>

          {isAboutUsPage ? (
            <p>
              With a customer-centric approach, we focus on long-term
              partnerships that contribute to our client's success. We are
              constantly evolving to stay ahead of technological advancements
              and industry trends.
            </p>
          ) : (
            <button
              className="cta-button1"
              onClick={() => navigate("/aboutus")}
            >
              Discover More →
            </button>
          )}
          <button className="call-button">
            <i className="fas fa-phone-alt">
              <div className="wave"></div>
            </i>
            <div className="call-text">
              Call Us <br /> <span>+91 7310249234</span>
            </div>
          </button>
        </article>

        <div class="expeerince">
          <div class="image-wrapper">
            <div class="experience-badge">5+ Yrs experience</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
