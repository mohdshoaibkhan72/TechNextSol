import React from "react";
import { Link } from "react-router-dom";
import "./404.css"; // Optional CSS file for styling

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="back-home">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
