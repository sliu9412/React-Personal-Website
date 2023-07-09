import React from "react";
import SectionHeading from "../../../Components/SectionHeading";
import { Container } from "@mui/material";
import InsideSection from "../../ContactPage/InsideSection";

function ContactSection() {
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <SectionHeading heading="Contact Me" />
      <InsideSection />
    </Container>
  );
}

export default ContactSection;
