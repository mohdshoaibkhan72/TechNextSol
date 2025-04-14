import React from "react";
import "./Blogs.css";

const blogs = [
  {
    id: 1,
    title: "SEO Strategies for 2025",
    description:
      "Discover the latest SEO techniques to improve your website ranking and drive organic traffic.",
    date: "February 21, 2025",
    image: "https://pepperyourcontent.com/wp-content/uploads/2021/12/10-12.png",
  },
  {
    id: 2,
    title: "Social Media Marketing Trends",
    description:
      "Explore the upcoming trends in social media marketing and how to leverage them for brand growth.",
    date: "February 18, 2025",
    image:
      "https://deliveredsocial.com/wp-content/uploads/2024/01/The-Landscape-of-Social-Media-Marketing.png",
  },
  {
    id: 3,
    title: "Content Marketing Best Practices",
    description:
      "Learn how to create high-quality content that engages audiences and boosts conversions.",
    date: "February 15, 2025",
    image:
      "https://interruptmedia.com/wp-content/uploads/2022/02/content-marketing-g46ae4ee68_1920.jpg",
  },
];

const Blogs = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">Latest Blogs</h2>
      <div className="blogs-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <p className="blog-date">Published on {blog.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
