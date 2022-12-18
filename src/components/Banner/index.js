import * as React from "react";
//import Button from "@mui/material/Button";
import { Typography, useMediaQuery } from "@mui/material";
import { Box, Button } from "@mui/material";
import {Colors} from "../../styles/index"

const Banner = () => {
  const showForLargeScreen = useMediaQuery("(max-width:900px)");


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        flexDirection: showForLargeScreen ? "column" : "row",
        width: "100%",
        height: "100%",
        padding: "0px 0px",
        background: Colors.body_bg,
      }}
    >
      <img src="images/banner-cat1.png" style={{ width: 500}} alt="cat" ></img>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "420px",
          padding: "30px",
          
        }}
      >
        <Typography variant="h6">Our motto</Typography>
        <Typography variant="h2">Help animals</Typography>
        <Typography variant="h7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </Typography>
        <Button variant="contained" sx={{color:Colors.dark, bgcolor:Colors.primary, mt:2, borderRadius:0}}><Typography sx={{fontWeight:700}}>Donate</Typography></Button>
      </Box>
    </Box>
  );
};

export default Banner;
