import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import jalsetuicon from "../../items/Frame.png";
import { Avatar } from "@mui/material";
const Navbar = () => {
  return (
    <div className="navbar">
      <AppBar sx={{ background: "#00113B" }} elevation={0}>
        <Toolbar style={{ justifyContent: "space-between", display: "flex" }}>
          <Avatar
            variant={"rounded"}
            alt="The image"
            src={jalsetuicon}
            style={{
              width: 150,
              // height: 200,
              background: "#00113B",
            }}
          />
          <Typography sx={{ textAlign: "center", fontSize: "21px" }}>
            JS ID: 234566
          </Typography>
          <Button sx={{ color: "white", fontWeight: "800" }}>My Profile</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Navbar;
