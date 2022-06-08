import React from "react";
import Container from "@mui/material/Container";
import VPTransparent from "../components/VPTransparent";
import Typography from "@mui/material/Typography";
import Desc from "../components/Desc";
import Box from "@mui/material/Box";
import Divider from "../components/Divider";
import dCube from "../assets/images/1.png"

function Content() {
  return (
    <Container>
      <img className='slide-top1' style={{ width: '10em', display: 'absolute'}} src={dCube} alt="bg" />
      <Container
        maxWidth="md"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          className="slide-top skewed-left no-mouse"
          variant={"h2"}
          sx={{ my: 8, fontWeight: "medium" }}
          align="center"
          gutterTop
        >
          {"> cli done properly"}
        </Typography>
        <VPTransparent />
      </Container>
      <Divider />
      <Box gutterTop>
        <Desc />
      </Box>
    </Container>
  );
}

export default Content;
