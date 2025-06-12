import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navigation from "../components/Navigation";
import About from "../components/About";
import Category from "../components/Category";
import Objective from "../components/Objective";
import Organized from "../components/Organized";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Video from "../components/Video";

// Import CSS
import "../css/Irtc.css";
import HeroSection from "../components/HeroSection";

function Irtcpage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <Navigation />
      <HeroSection />
      <About />
      <Category />
      <Objective />
      <Video />
      <Organized />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default Irtcpage;
