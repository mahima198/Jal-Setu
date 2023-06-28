import React from "react";
import { Paper, Typography, Grid, IconButton } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import {useState, useEffect} from "react";
const SensorReadings = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter"],
    },
  });
  const [field, setfield] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.thingspeak.com/channels/1682332/feeds.json?api_key=JJN2ESGESP51H4JP&results=2");
      const data = await response.json();
      const sensorData = data.feeds.map((sensor)=>{
        return {
          id : sensor.entry_id,
          turbidity : sensor.field1,
          pH : sensor.field2,
          waterContent : sensor.field3,
          bill : sensor.field4,
        }
      })
      setfield(sensorData[sensorData.length - 1]);
      console.log(sensorData[sensorData.length - 1])
    }
    fetchData();
    const interval=setInterval(()=>{
      fetchData()
     },16000)
     return()=>clearInterval(interval)
  }, []);

  


  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={0}>
        {/* // Water level */}
        <Grid
          item
          md={3}
          xs={12}
          sx={{
            pl: { md: 6, xs: 3 },
            pt: { md: 7, xs: 3 },
            pb: { md: 5, xs: 3 },
            pr: { xs: 3 },
            textAlign: "center",
          }}
        >
          <Paper
            sx={{
              p: 4,
              fontSize: { md: "1.2rem", xs: "0.8 rem" },
              borderRadius: "15px",
            }}
            elevation={12}
          >
            <Typography
              // color="error"
              variant="h3"
              fontWeight={600}
              gutterBottom
              sx={{ textAlign: { md: "left", sx: "center" } }}
              color={field.waterContent >= 70 ? "green" : (field.waterContent >= 30 ) ? "#F5A841" : "red"}
              // (area == 0) ? icon0 : (area == 1) ? icon1 : icon2;
            >
              {parseFloat(field.waterContent).toFixed(2)}%

              {/* 13% (Temp) */}
            </Typography>
            <Typography
              variant="h5"
              fontWeight={600}
              gutterBottom
              sx={{ textAlign: { md: "left", sx: "center" } }}
            >
              Water Level
            </Typography>
            <Typography>
              Track water level so that you can plan when to turn on the motor.
              Switch off the motor when water level reaches approximately 90%.
            </Typography>
          </Paper>
        </Grid>

        {/* // quality */}
        <Grid
          item
          md={3}
          xs={12}
          sx={{
            pl: { md: 6, xs: 3 },
            pt: { md: 7, xs: 3 },
            pb: { md: 5, xs: 3 },
            pr: { xs: 3 },
            textAlign: "center",
          }}
        >
          <Paper
            sx={{
              p: 4,
              fontSize: { md: "1.2rem", xs: "0.8 rem" },
              borderRadius: "15px",
            }}
            elevation={12}
          >
            <Typography
              color="#F5A841"
              variant="h3"
              fontWeight={600}
              gutterBottom
              sx={{ textAlign: { md: "left", sx: "center" } }}
            >
              
              {(field.pH <=8.0 && field.pH >=6.0) ? 90 : 20} JsU
            </Typography>
            <Typography
              variant="h5"
              fontWeight={600}
              gutterBottom
              sx={{ textAlign: { md: "left", sx: "center" } }}
            >
              Water Quality
            </Typography>
            <Typography>
              Track water quality so that you can good quality water.
              Contact us immediately if your water quality is below 30.
            </Typography>
          </Paper>
        </Grid>
        {/* // Turbidity */}
        <Grid
          item
          md={3}
          xs={12}
          sx={{
            pl: { md: 6, xs: 3 },
            pt: { md: 7, xs: 3 },
            pb: { md: 5, xs: 3 },
            pr: { xs: 3 },
            textAlign: "center",
          }}
        >
          <Paper
            sx={{
              p: 4,
              pb: 2,
              pt: 2,
              mb: 5,
              fontSize: { md: "1.2rem", xs: "0.8 rem" },
              borderRadius: "15px",
            }}
            elevation={12}
          >
            <Typography
              // color="#F5A841"
              variant="h4"
              fontWeight={700}
              gutterBottom
              sx={{ textAlign: { md: "left", sx: "center" } }}
              color={field.turbidity >= 60 ? "green" : "red"}
            >
              {parseFloat(field.turbidity).toFixed(2)} NTU
            </Typography>
            <Typography
              variant="h5"
              fontWeight={600}
              gutterBottom
              sx={{ textAlign: { md: "left", sx: "center" } }}
            >
              Turbidity
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 4,
              pb: 2,
              pt: 2,
              fontSize: { md: "1.2rem", xs: "0.8 rem" },
              borderRadius: "15px",
            }}
            elevation={12}
          >
            <Typography
              color="#F5A841"
              variant="h4"
              fontWeight={600}
              gutterBottom
              sx={{ textAlign: { md: "left", sx: "center" } }}
            >
             {parseFloat(Math.abs((field.pH)).toFixed(2))} pH

             {/* 7.6 pH */}
            </Typography>
            <Typography
              variant="h5"
              fontWeight={600}
              gutterBottom
              sx={{ textAlign: { md: "left", sx: "center" } }}
            >
              pH Level
            </Typography>
          </Paper>
        </Grid>

        {/* // Bill */}
        <Grid
          item
          md={3}
          xs={12}
          sx={{
            pl: { md: 6, xs: 3 },
            pt: { md: 7, xs: 3 },
            pb: { md: 5, xs: 3 },
            pr: { md: 7, xs: 3 },
            textAlign: "center",
          }}
        >
          <Paper
            sx={{
              p: 4,
              fontSize: { md: "1.2rem", xs: "0.8 rem" },
              borderRadius: "15px",
            }}
            elevation={12}
          >
            <Typography
              variant="h3"
              fontWeight={600}
              // gutterBottom
              sx={{ textAlign: { md: "left", sx: "center" } }}
            >
              ₹{parseFloat(field.bill).toFixed(2)}
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ textAlign: { md: "left", sx: "center" }, pb:3 }}
            >
              {`Date: ${new Date().toLocaleString("en-US", {
                month: "long",
              })} ${new Date().getFullYear()}`}
            </Typography>
            <IconButton
              variant="contained"
              sx={{
                pl : 2,
                pr : 2,
                borderRadius: "10000px",
                display: {md:"flex", xs:""},
                justifyContent: { md: "end", xs: "center" },
                bgcolor: "#383838",
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "#383838",
                },
              }}
              onClick={() => window.open('https://rzp.io/l/Z4PWe00e13')}
            >
              <Typography sx={{pr : 1, color : "#FFFFFF"}}>
                Pay Here
              </Typography>
              {/* <PaymentIcon sx={{color : "#FFFFFF"}}/> */}
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SensorReadings;
