import React from "react";
import "./style.scss";
import SlideContainer from "./SlideConatiner";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import ArticleSection from "./ArticleSection";
import ContactSection from "./ContactSection";

function HomePage() {
  return (
    <div className="home-page">
      <SlideContainer />
      <AboutSection />
      <ProjectSection />
      <ArticleSection />
      <ContactSection />
    </div>
  );
}

export default HomePage;
