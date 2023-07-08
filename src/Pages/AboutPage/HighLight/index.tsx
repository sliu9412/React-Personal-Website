import React from "react";
import SectionHeading from "../../../Components/SectionHeading";
import { IAboutProps } from "../IAboutPage";
import HiddenAnchor from "../../../Components/HiddenAnchor";

function HighLight(props: IAboutProps) {
  return (
    <div>
      <HiddenAnchor id="Highlight" />
      <SectionHeading heading="Highlight" />
      <ul>
        {props.about.Highlight.list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default HighLight;
