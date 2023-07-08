import { List } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import BuildIcon from "@mui/icons-material/Build";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import React from "react";
import AsideItem from "./AsideItem";
import "./style.scss";
import { IAboutProps } from "../IAboutPage";

function Aside(props: IAboutProps) {
  const about = props.about;

  return (
    <div className="aside-item pe-4 py-3 aside">
      <List>
        <AsideItem headingName={about.AboutMySelf.title} anchor="#AboutMyself">
          <PersonIcon />
        </AsideItem>
        <AsideItem headingName={about.Highlight.title} anchor="#Highlight">
          <AutoFixHighIcon />
        </AsideItem>
        <AsideItem headingName={about.Techniques.title} anchor="#Techniques">
          <KeyboardIcon />
        </AsideItem>
        <AsideItem headingName={about.Skills.title} anchor="#Skills">
          <BuildIcon />
        </AsideItem>
        <AsideItem headingName={about.Education.title} anchor="#Education">
          <SchoolIcon />
        </AsideItem>
        <AsideItem
          headingName={about.WorkingExperience.title}
          anchor="#WorkingExperience"
        >
          <WorkHistoryIcon />
        </AsideItem>
      </List>
    </div>
  );
}

export default Aside;
