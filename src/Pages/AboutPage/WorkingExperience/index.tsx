import React from "react";
import SectionHeading from "../../../Components/SectionHeading";
import { IAboutProps } from "../IAboutPage";
import WorkItem from "./WorkItem";
import HiddenAnchor from "../../../Components/HiddenAnchor";

function WorkingExperience(props: IAboutProps) {
  return (
    <div>
      <HiddenAnchor id="WorkingExperience" />
      <SectionHeading heading="Working Experience" />
      {props.about.WorkingExperience.list.map((item, index) => {
        return <WorkItem item={item} key={index} />;
      })}
    </div>
  );
}

export default WorkingExperience;
