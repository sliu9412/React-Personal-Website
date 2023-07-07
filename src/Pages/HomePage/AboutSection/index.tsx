import { Button, Container, Grid } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useEffect, useState } from "react";
import "./style.scss";
import HomeSectionHeading from "../HomeSectionHeading";
import { useNavigate } from "react-router-dom";

export interface IAboutSection {
  leftHTML: string;
  rightImagePath: string;
}

function AboutSection() {
  const [aboutSection, setaboutSection] = useState<IAboutSection | null>(null);

  const navigator = useNavigate();

  const moreButtonClickHandler = () => {
    navigator("/About");
  };

  useEffect(() => {
    fetch("./assets/json/home.json")
      .then((res) => res.json())
      .then((data) => {
        setaboutSection(data.AboutMeSection as IAboutSection);
      });
  }, []);

  return (
    <div className="about-section my-lg-5">
      <Container maxWidth="lg">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} lg={7}>
            <HomeSectionHeading heading="About Me" />
            <img
              className="img-fluid d-lg-none pb-3"
              src={aboutSection == null ? "" : aboutSection.rightImagePath}
              alt="About Me"
            />
            <div
              dangerouslySetInnerHTML={{
                __html: aboutSection == null ? "" : aboutSection.leftHTML,
              }}
            ></div>
            <div className="py-3 about-section-btn-wrap">
              <Button
                onClick={moreButtonClickHandler}
                variant="contained"
                endIcon={<MoreVertIcon />}
              >
                Know me more
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} lg={5}>
            <img
              className="img-fluid d-none d-lg-block"
              src={aboutSection == null ? "" : aboutSection.rightImagePath}
              alt="About Me"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AboutSection;
