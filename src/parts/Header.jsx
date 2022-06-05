import React, { useState } from "react";
import Button from "../components/Button";
import Logo from "../assets/images/circli-noname.png";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";

function Header() {
  // State here
  const menuLink = ["About us", "Pricing", "FAQ"];

  const renderList = () => {
    return menuLink.map((list) => <li href="#">{list}</li>);
  };

  return (
    <Box>
      <AppBar/>
    </Box>

    // <Box className="header-component">
    //   <img
    //     src={Logo}
    //     alt="Logo"
    //     style={{ width: "40px", height: "40px", marginLeft: "30px" }}
    //   />
    //   <ul className="ulContainer">{renderList()}</ul>
    //   <Button sx={{ marginRight: "50px" }} />
    // </Box>
  );
}

export default Header;
