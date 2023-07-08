import React from "react";
import { IAboutProps } from "../IAboutPage";
import SectionHeading from "../../../Components/SectionHeading";
import TechniqueItem from "./TechniqueItem";
import { Grid } from "@mui/material";
import HiddenAnchor from "../../../Components/HiddenAnchor";

function Techniques(props: IAboutProps) {
  return (
    <div>
      <HiddenAnchor id="Techniques" />
      <SectionHeading heading={props.about.Techniques.title} />
      <Grid container spacing={4}>
        {props.about.Techniques.list.map((item, index) => {
          return <TechniqueItem key={index} item={item} />;
        })}
      </Grid>
    </div>
  );
}

export default Techniques;
