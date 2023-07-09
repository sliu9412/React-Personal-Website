import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import Paginator from "../../Components/Paginator";

export interface IProjectItem {
  link: string;
  icon: string;
  title: string;
  desc: string;
}

function ProjectPage() {
  const [projectItems, setItems] = useState<IProjectItem[]>([]);
  const [displayedItems, setDsiplayedItems] = useState<IProjectItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    fetch("./assets/json/projects.json")
      .then((res) => res.json())
      .then((res) => {
        setItems(res as IProjectItem[]);
        setDsiplayedItems((res as IProjectItem[]).slice(0, 6));
      });
  }, []);

  return (
    <div>
      <Container maxWidth="lg" className="pb-5">
        <Grid container spacing={3} className="py-4">
          {displayedItems.map((item, index) => {
            return <ProjectItem item={item} key={index} />;
          })}
        </Grid>
        <Paginator
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setDisplayeditems={setDsiplayedItems}
          dataSource={projectItems}
        />
      </Container>
    </div>
  );
}

export default ProjectPage;
