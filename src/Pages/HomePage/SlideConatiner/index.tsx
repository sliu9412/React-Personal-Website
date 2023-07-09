import { IHomePageProps } from "../IHome";
import "./style.scss";

function SlideContainer(props: IHomePageProps) {
  const caption = props.homepage.Caption;

  return (
    <div
      className="slide-container d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: "url(" + caption.backgroundImagePath + ")",
      }}
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
