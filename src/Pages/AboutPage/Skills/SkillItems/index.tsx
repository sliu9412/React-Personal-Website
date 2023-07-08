import { Grid, Rating } from "@mui/material";
import React from "react";
import "./style.scss";

interface ISkillItem {
  item: {
    name: string;
    rating: number;
  };
}

function SkillItems(props: ISkillItem) {
  return (
    <Grid item xs={6} lg={4}>
      <div className="skill-item">
        <h3>{props.item.name}</h3>
        <Rating readOnly value={props.item.rating} precision={0.5} />
      </div>
    </Grid>
  );
}

export default SkillItems;
