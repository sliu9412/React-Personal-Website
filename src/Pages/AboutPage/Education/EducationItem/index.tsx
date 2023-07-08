import React from "react";
import { IAboutEducation } from "../../IAboutPage";
import "./style.scss";
import { Grid } from "@mui/material";

interface IEducationItem {
  item: IAboutEducation;
}

function EducationItem(props: IEducationItem) {
  return (
    <div className="education-item mb-4">
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <div>
            <img className="border" src={props.item.imagePath} alt="" />
          </div>
        </Grid>
        <Grid item xs={12} lg={8}>
          <div className="details">
            <h3>{props.item.name}</h3>
            <p className="degree">
              {props.item.degree} &nbsp;&nbsp; {props.item.time}
            </p>
            <p>{props.item.desc}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default EducationItem;
