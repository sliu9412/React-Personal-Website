import React from "react";
import "./style.scss";

interface HidenAnchorProps {
  id: string;
}

function HiddenAnchor(props: HidenAnchorProps) {
  return (
    <div className="hidden-link">
      <div id={props.id} className="anchor-position"></div>
    </div>
  );
}

export default HiddenAnchor;
