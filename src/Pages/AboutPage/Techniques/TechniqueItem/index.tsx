import { Grid } from "@mui/material";
import React from "react";
import "./style.scss";

export interface ITechniqueItem {
  item: {
    name: string;
    imagePath: string;
    desc: string;
  };
}

function TechniqueItem(props: ITechniqueItem) {
  const imagePath = `url(${props.item.imagePath})`;

  return (
    <Grid item xs={12} lg={6}>
      <div className="technique-item">
        <div className="item-box">
          <div
            className="image-box"
            style={{ backgroundImage: imagePath }}
          ></div>
          <div className="desc-box ps-2">
            <h3>{props.item.name}</h3>
            <p>{props.item.desc}</p>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default TechniqueItem;
