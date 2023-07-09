import { Button, Container, Grid } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import HomeSectionHeading from "../../../Components/SectionHeading";
import { useNavigate } from "react-router-dom";
import { IHomePageProps } from "../IHome";
import "./style.scss";

function AboutSection(props: IHomePageProps) {
  const navigator = useNavigate();
  const moreButtonClickHandler = () => {
    navigator("/About");
  };

  return (
    <div className="about-section my-lg-5">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} lg={7}>
            <HomeSectionHeading heading="About Me" />
            <img
              className="img-fluid d-lg-none pb-3"
              src={props.homepage.AboutMeSection.rightImagePath}
              alt="About Me"
            />
            <div
              dangerouslySetInnerHTML={{
                __html: props.homepage.AboutMeSection.leftHTML,
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
              src={props.homepage.AboutMeSection.rightImagePath}
              alt="About Me"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AboutSection;
