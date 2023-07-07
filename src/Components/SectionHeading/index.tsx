import React from "react";
import "./style.scss";

export interface IheadingProps {
  heading: string;
}

function SectionHeading(props: IheadingProps) {
  return (
    <div className="home-section-heading py-4">
      <h2 className="heading">
        <span className="underline-decoration">{props.heading}</span>
      </h2>
    </div>
  );
}

export default SectionHeading;
