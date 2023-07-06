import React, { useEffect, useState } from "react";
import "./style.scss";

function SlideContainer() {
  interface ICaption {
    backgroundImagePath: string;
    mainCaption: string;
    subCaption: string;
    subCaption2: string;
    subCaption2HTML: string;
  }

  const [caption, SetCaption] = useState<null | ICaption>(null);

  useEffect(() => {
    fetch("./assets/json/home.json")
      .then((res) => res.json())
      .then((data) => {
        SetCaption(data.Caption as ICaption);
      });
  }, []);

  return (
    <div
      className="slide-container d-flex justify-content-center align-items-center"
      style={
        caption == null
          ? {}
          : { backgroundImage: "url(" + caption.backgroundImagePath + ")" }
      }
    >
      <div className="caption-box text-center">
        <p className="sub-caption">{caption?.subCaption}</p>
        <h1 className="main-caption">{caption?.mainCaption}</h1>
        <p className="sub-caption-2">{caption?.subCaption2}</p>
        <p
          className="sub-caption-2-list"
          dangerouslySetInnerHTML={{
            __html: caption == null ? "" : caption!.subCaption2HTML,
          }}
        ></p>
      </div>
    </div>
  );
}

export default SlideContainer;
