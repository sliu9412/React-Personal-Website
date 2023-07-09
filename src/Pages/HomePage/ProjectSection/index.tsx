import { Box, Button, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SectionHeading from "../../../Components/SectionHeading";
import ProjectItem from "../../ProjectPage/ProjectItem";
import { IProjectItem } from "../../ProjectPage";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

function ProjectSection() {
  const [projectItems, setItems] = useState<IProjectItem[]>([]);
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/Projects");
  };

  useEffect(() => {
    fetch("./assets/json/projects.json")
      .then((res) => res.json())
      .then((res) => {
        setItems((res as IProjectItem[]).slice(0, 6));
      });
  }, []);

  return (
    <Container>
      <SectionHeading heading="Recent Projects" />
      <Grid container spacing={3}>
        {projectItems.map((item, index) => {
          return <ProjectItem key={index} item={item} />;
        })}
      </Grid>

      <Box display={"flex"} justifyContent={"center"} sx={{ py: 3 }}>
        <Button
          onClick={clickHandler}
          endIcon={<MoreVertIcon />}
          variant={"contained"}
        >
          Explore More Projects
        </Button>
      </Box>
    </Container>
  );
}

export default ProjectSection;
