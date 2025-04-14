import React from "react";
import "./Spinner.css"; // The CSS below should go here

function Spinner() {
  return (
    <div className="spinner-wrap">
      <div className="spinner-item"></div>
      <div className="spinner-item spinner-item--2"></div>
      <div className="spinner-item spinner-item--3"></div>
    </div>
  );
}

export default Spinner;
