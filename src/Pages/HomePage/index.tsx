import React from "react";
import "./style.scss";
import SlideContainer from "./SlideConatiner";
import AboutSection from "./AboutSection";

function HomePage() {
  return (
    <div className="home-page">
      <SlideContainer />
      <AboutSection />
    </div>
  );
}

export default HomePage;
