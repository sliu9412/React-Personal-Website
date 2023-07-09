import React from "react";
import "./style.scss";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer py-3">
      © {year} github.com/sliu9412 All Rights Reserved.
    </footer>
  );
}

export default Footer;
