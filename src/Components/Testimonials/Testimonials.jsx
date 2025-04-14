import React from "react";
import Slider from "react-slick";
import "./Testimonials.css";

const testimonialsData = [
  {
    name: "Ashish Senger",
    position: "CEO, Paisa4you",
    feedback:
      "Technext Solution's digital marketing expertise helped us achieve a 300% increase in web traffic and generate quality leads for our loan products!",
  },
  {
    name: "Mohd Saif",
    position: "CEO, PrayagTea",
    feedback:
      "The team at Technext Solution completely transformed our brand's social media presence. We saw a significant boost in customer engagement and sales.",
  },
  {
    name: "Mark Wilson",
    position: "Founder, NGOs",
    feedback:
      "Thanks to Technext Solution's SEO services, we ranked on the first page of search engines, increasing our visibility and donations.",
  },
  {
    name: "Sarah Brown",
    position: "CMO, Healthify",
    feedback:
      "Technext Solution’s content marketing strategies were spot-on! Their approach brought us more traffic and increased brand awareness.",
  },
  {
    name: "Michael Lee",
    position: "Director, FinServe",
    feedback:
      "The PPC campaigns managed by Technext Solution delivered exceptional results. We saw a remarkable return on investment within the first month.",
  },
  {
    name: "Emma Green",
    position: "Owner, GreenStyle",
    feedback:
      "The email marketing strategies provided by Technext Solution helped us increase our customer retention rate by 40%. Highly recommend their services!",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <Slider {...settings} className="testimonials-slider">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <h3>{testimonial.name}</h3>
            <p className="position">{testimonial.position}</p>
            <p className="feedback">"{testimonial.feedback}"</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
