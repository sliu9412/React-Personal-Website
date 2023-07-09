import React, { useEffect, useState } from "react";
import "./style.scss";
import SlideContainer from "./SlideConatiner";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import ArticleSection from "./ArticleSection";
import ContactSection from "./ContactSection";
import { IHomePage } from "./IHome";

const EmptyHomePage: IHomePage = {
  Caption: {
    backgroundImagePath: "",
    mainCaption: "",
    subCaption: "",
    subCaption2: "",
    subCaption2HTML: "",
  },
  AboutMeSection: {
    leftHTML: "",
    rightImagePath: "",
  },
  Footer: "",
};

function HomePage() {
  const [homepage, setHomePage] = useState<IHomePage>(EmptyHomePage);

  useEffect(() => {
    fetch("./assets/json/home.json")
      .then((res) => res.json())
      .then((data) => {
        setHomePage(data as IHomePage);
      });
  }, []);

  return (
    <div className="home-page">
      <SlideContainer homepage={homepage} />
      <AboutSection homepage={homepage} />
      <ProjectSection />
      <ArticleSection />
      <ContactSection />
    </div>
  );
}

export default HomePage;
