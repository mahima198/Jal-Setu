import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Chip, Avatar } from "@mui/material";
import React from "react";
import SensorReadings from "../SensorReadings/SensorReadings"
const BasicInfo = () => {
  // const theme = createTheme({
  //   typography: {
  //     fontFamily: ["Inter"],
  //   },
  // });
  return (
    <>
      <Grid container>
        <Grid item md={6} xs={12} sx={{ p: { md: 7, xs: 3 } }}>
          <Typography variant="h4" fontWeight={700} sx={{textAlign : {xs : "center", md:"left"}}} gutterBottom>
            Welcome Again, Aryan Sharma
          </Typography>
          <Typography variant="subtitle1" sx={{textAlign : {xs : "center", md:"left"}}}>
            B-6/25 Sector-5 Rohini Delhi 110085
          </Typography>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: { md: "end", xs: "center" },
            alignItems: "center",
          }}
        >
          <Chip
            avatar={<Avatar src="https://shantidentals.com/wp-content/uploads/2022/01/djb.png" />}
            label="Delhi Jal Board Notices"
            variant="outlined"
            // size="medium"
            sx={{
              mr: {md : 3},
              fontSize: { md: "1.2rem", xs: "0.8 rem" },
              px: 1,
              py: 3,
              borderRadius: "10000px",
              bgcolor: "#383838",
              color: "#FFFFFF",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#383838",
              },
              fontWeight : 600,
            }}
            onClick ={()=> window.open("http://delhijalboard.nic.in/notices/delhi-jal-board-djb")}
          />
          <Chip
            label="Raise a complaint"
            variant="outlined"
            
            sx={{
              mr: {md : 7},
              fontSize: { md: "1.2rem", xs: "0.8 rem" },
              px: 1,
              py: 3,
              borderRadius: "10000px",
              bgcolor: "#383838",
              color: "#FFFFFF",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#383838",
              },
              fontWeight : 600,
            }}
            // component="a"
            onClick ={()=> window.open("http://delhijalboard.nic.in/content/grievance-redressal-mechanism-0")}
          />
        </Grid>
      </Grid>
      <SensorReadings/>
    </>
  );
};

export default BasicInfo;
