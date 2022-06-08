import React from "react";
import Container from "@mui/material/Container";
import VPTransparent from "../components/VPTransparent";
import Typography from "@mui/material/Typography";
import Desc from "../components/Desc";
import Box from "@mui/material/Box";
import Divider from "../components/Divider";
import dCube from "../assets/images/1.png";
import devGirl from "../assets/images/Coding1.png";
import devBoy from "../assets/images/fixing-bugs.png";
import devGirl2 from "../assets/images/modular-coding-application.png";
import bgImg from "../assets/images/Background.png";

function Content() {
  return (
    <Container>
      <Box sx={{ display: "absolute" }}>
        <img
          className="slide-top1"
          style={{ width: "10em", display: "absolute" }}
          src={dCube}
          alt="bg"
        />
      </Box>
      <Container
        styl
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
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
      <Container maxWidth="md" gutterTop gutterBottom sx={{ display: "flex" }}>
        <Desc title="Availability is our specialty" />
        <Box>
          <img style={{ width: "200", height: "auto" }} src={devGirl} alt="" />
        </Box>
      </Container>
      <Container maxWidth="md" gutterTop gutterBottom sx={{ display: "flex" }}>
        <Box>
          <img
            style={{ width: "200", height: "auto", margin: "0 10px" }}
            src={devGirl2}
            alt=""
          />
        </Box>
        <Desc title="Super() is weird" />
      </Container>
      <Container maxWidth="md" gutterTop gutterBottom sx={{ display: "flex" }}>
        <Desc title="Stay connected" />
        <Box>
          <img style={{ width: "200", height: "auto" }} src={devBoy} alt="" />
        </Box>
      </Container>
    </Container>
  );
}

export default Content;
