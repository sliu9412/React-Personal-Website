import React from "react";
import { IAboutProps } from "../IAboutPage";
import SectionHeading from "../../../Components/SectionHeading";
import EducationItem from "./EducationItem";
import HiddenAnchor from "../../../Components/HiddenAnchor";

function Education(props: IAboutProps) {
  return (
    <div>
      <HiddenAnchor id="Education" />
      <SectionHeading heading="Education" />
      {props.about.Education.list.map((item, index) => {
        return <EducationItem key={index} item={item} />;
      })}
    </div>
  );
}

export default Education;
