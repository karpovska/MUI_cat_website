import * as React from "react";
//import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Box, Button } from "@mui/material";

import { Colors } from "../../styles";
const Banner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: "0px 0px",
        background: Colors.body_bg,
      }}
    >
      <img src="images/banner-cat1.png" style={{ width: 500 }} alt="cat"></img>

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
        <Button>Donate</Button>
      </Box>
    </Box>
  );
};

export default Banner;
