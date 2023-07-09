/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, SvgIcon } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import EmailIcon from "@mui/icons-material/Email";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PhoneForwardedOutlinedIcon from "@mui/icons-material/PhoneForwardedOutlined";
import "./style.scss";

interface IContactPage {
  email: string;
  phone: {
    tel: string;
    display: string;
  };
  github: string;
  linkedin: string;
  location: {
    embed: string;
    info: string;
  };
}

const emptyContactPage: IContactPage = {
  email: "",
  phone: {
    tel: "",
    display: "",
  },
  github: "",
  linkedin: "",
  location: {
    embed: "",
    info: "",
  },
};

function ContactPage() {
  const [contact, setContact] = useState<IContactPage>(emptyContactPage);

  useEffect(() => {
    fetch("./assets/json/contact.json")
      .then((res) => res.json())
      .then((res) => {
        setContact(res as IContactPage);
      });
  }, []);

  return (
    <div className="contact-page">
      <Container sx={{ py: 5 }} maxWidth={"lg"}>
        <Grid container>
          <Grid xs={12} lg={6} item>
            {contact.email ? (
              <>
                <Typography className="contact-heading" variant={"h2"}>
                  <EmailIcon /> &nbsp; Email
                </Typography>
                <p className="contact-info">
                  <a href={`mailto: ${contact.email}`} target="_black">
                    <SendOutlinedIcon /> &nbsp; {contact.email}
                  </a>
                </p>
              </>
            ) : (
              ""
            )}

            {contact.phone ? (
              <>
                <Typography className="contact-heading" variant={"h2"}>
                  <PhoneAndroidIcon /> &nbsp; Phone Number
                </Typography>
                <p className="contact-info">
                  <a href={`tel: ${contact.phone.tel}`} target="_black">
                    <PhoneForwardedOutlinedIcon /> &nbsp;
                    {contact.phone.display}
                  </a>
                </p>
              </>
            ) : (
              ""
            )}

            {contact.github ? (
              <>
                <Typography className="contact-heading" variant={"h2"}>
                  <GitHubIcon /> &nbsp; Github
                </Typography>
                <p className="contact-info">
                  <a href="https://github.com/sliu9412" target="_black">
                    <LinkIcon /> &nbsp; https://github.com/sliu9412
                  </a>
                </p>
              </>
            ) : (
              ""
            )}

            {contact.linkedin ? (
              <>
                <Typography className="contact-heading" variant={"h2"}>
                  <SvgIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="50px"
                      height="50px"
                    >
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                    </svg>
                  </SvgIcon>
                  &nbsp; Linkedin
                </Typography>
                <p className="contact-info">
                  <a
                    href="https://www.linkedin.com/in/sliu9412/"
                    target="_black"
                  >
                    <LinkIcon /> &nbsp; https://www.linkedin.com/in/sliu9412/
                  </a>
                </p>
              </>
            ) : (
              ""
            )}
          </Grid>

          <Grid xs={12} lg={6} item>
            {contact.location ? (
              <>
                <Typography className="contact-heading" variant={"h2"}>
                  <LocationOnIcon /> &nbsp; Location
                </Typography>
                {contact.location.embed ? (
                  <iframe
                    className="map-frame"
                    src={contact.location.embed}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                ) : (
                  ""
                )}

                <p
                  className="contact-info"
                  dangerouslySetInnerHTML={{ __html: contact.location.info }}
                ></p>
              </>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ContactPage;
