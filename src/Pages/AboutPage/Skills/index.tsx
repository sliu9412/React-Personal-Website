import React from "react";
import { IAboutProps } from "../IAboutPage";
import SectionHeading from "../../../Components/SectionHeading";
import SkillItems from "./SkillItems";
import { Grid } from "@mui/material";
import HiddenAnchor from "../../../Components/HiddenAnchor";

function Skills(props: IAboutProps) {
  return (
    <div>
      <HiddenAnchor id="Skills" />
      <SectionHeading heading={props.about.Skills.title}></SectionHeading>
      <Grid container spacing={2}>
        {props.about.Skills.list.map((item, index) => {
          return <SkillItems key={index} item={item} />;
        })}
      </Grid>
    </div>
  );
}

export default Skills;
