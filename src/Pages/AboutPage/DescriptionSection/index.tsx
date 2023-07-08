import SectionHeading from "../../../Components/SectionHeading";
import { Grid } from "@mui/material";
import { IAboutProps } from "../IAboutPage";
import HiddenAnchor from "../../../Components/HiddenAnchor";

function DescriptionSection(props: IAboutProps) {
  return (
    <div className="py-lg-3">
      <HiddenAnchor id="AboutMyself" />
      <SectionHeading heading="About Myself" />
      <Grid container spacing={3}>
        <Grid item xs={12} lg={3}>
          <img
            className="img-fluid"
            src={props.about.AboutMySelf.leftImagePath}
            alt=""
          />
        </Grid>

        <Grid item xs={12} lg={9}>
          <div
            dangerouslySetInnerHTML={{
              __html: props.about.AboutMySelf.rightHTML,
            }}
          ></div>
        </Grid>
      </Grid>
      <div></div>
    </div>
  );
}

export default DescriptionSection;
