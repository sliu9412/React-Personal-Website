import { Grid } from "@mui/material";
import React from "react";
import { IAboutWorkingExperience } from "../../IAboutPage";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import WorkIcon from "@mui/icons-material/Work";
import "./style.scss";

interface IAboutExperienceItem {
  item: IAboutWorkingExperience;
}

function WorkItem(props: IAboutExperienceItem) {
  return (
    <div className="experience-item mb-4">
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <div>
            <img className="border" src={props.item.imagePath} alt="" />
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className="details">
            <h3>{props.item.name}</h3>
            <p>
              <LocationOnIcon /> {props.item.location}
            </p>
            <p>
              <DateRangeIcon /> {props.item.time}
            </p>
            <p>
              <WorkIcon /> {props.item.type}
            </p>
            <p className="degree"></p>
            <p
              dangerouslySetInnerHTML={{
                __html: props.item.desc,
              }}
            ></p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default WorkItem;
