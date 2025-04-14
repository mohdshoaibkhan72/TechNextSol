import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// ✅ Slick Carousel Styles (Ensure Installed via npm/yarn)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
