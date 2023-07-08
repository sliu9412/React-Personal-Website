import { Container, Grid } from "@mui/material";
import DescriptionSection from "./DescriptionSection";
import { useEffect, useState } from "react";
import { IAboutPage } from "./IAboutPage";
import HighLight from "./HighLight";
import Techniques from "./Techniques";
import Skills from "./Skills";
import Education from "./Education";
import WorkingExperience from "./WorkingExperience";
import Aside from "./Aside";

// empty values
const initAboutPage: IAboutPage = {
  AboutMySelf: {
    leftImagePath: "",
    rightHTML: "",
    title: "",
  },
  Highlight: {
    title: "",
    list: [],
  },
  Techniques: {
    title: "",
    list: [],
  },
  Skills: {
    title: "",
    list: [],
  },
  Education: {
    title: "",
    list: [],
  },
  WorkingExperience: {
    title: "",
    list: [],
  },
};

function AboutPage() {
  const [about, SetAbout] = useState<IAboutPage>(initAboutPage);

  const LoadJSON = async () => {
    await fetch("./assets/json/about.json")
      .then((res) => res.json())
      .then((res) => {
        SetAbout(res);
      });
  };

  useEffect(() => {
    LoadJSON();
  }, []);

  return (
    <Container maxWidth="lg" className="pb-5">
      <Grid container>
        <Grid item xs={12} md={3} className="d-none d-lg-block">
          <Aside about={about} />
        </Grid>
        <Grid item xs={12} md={9}>
          <DescriptionSection about={about} />
          <HighLight about={about} />
          <Techniques about={about} />
          <Skills about={about} />
          <Education about={about} />
          <WorkingExperience about={about} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutPage;
