import React from "react";
import "./Footer.module.css"
import { Typography } from "@mui/material";
const Footer = () => {
  return (
    <div className="page-container">
      <Typography sx={{textAlign : "center",bgcolor : "red", py : 1}}>
        &copy; {new Date().getFullYear} Jalsetu. All rights reserved.
      </Typography>
    </div>
  );
};

export default Footer;
