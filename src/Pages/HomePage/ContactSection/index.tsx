import React from "react";
import SectionHeading from "../../../Components/SectionHeading";
import { Container } from "@mui/material";
import ContactPage from "../../ContactPage";

function ContactSection() {
  return (
    <Container maxWidth="lg">
      <SectionHeading heading="Contact Me" />
      <ContactPage />
    </Container>
  );
}

export default ContactSection;
