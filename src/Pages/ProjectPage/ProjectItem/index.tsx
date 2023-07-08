import { Card, CardContent, Grid } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import React from "react";
import "./style.scss";
import { IProjectItem } from "..";

interface IProjectItemProps {
  item: IProjectItem;
}

function ProjectItem(props: IProjectItemProps) {
  const item = props.item;

  return (
    <Grid item xs={12} lg={4}>
      <a href={item.link} target="_blank" rel="noreferrer">
        <div className="project-item">
          <Card className="item-card">
            <CardContent>
              <img className="item-image py-2" src={item.icon} alt="" />
              <h3 className="project-title">{item.title}</h3>
              <p className="project-description">{item.desc}</p>
              <p className="view-project">
                <LinkIcon /> &nbsp; view project
              </p>
            </CardContent>
          </Card>
        </div>
      </a>
    </Grid>
  );
}

export default ProjectItem;
