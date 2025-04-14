import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/services/Services";
import WhyChooseus from "./Components/whychoseus/Whychoseus.jsx";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Components/pages/Portfolio/portfolio";
import ContactUs from "./Components/pages/ContactUs/Contactus";
import Blogs from "./Components/pages/Blogs/blogs.jsx";
import WebDevelopment from "./Components/Services/webdev/web.jsx";
import NotFound from "./Components/404pagenotfound/404.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Route to display all components */}
        <Route
          path="/"
          element={
            <>
              <Landing />
              <AboutUs />
              <Services />
              <WhyChooseus />
              <Blogs />
              <Testimonials />
            </>
          }
        />
        {/* Other individual routes */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />

        {/* 404 Page Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
