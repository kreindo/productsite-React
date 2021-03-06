import React from "react";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import CodeIcon from "@mui/icons-material/Code";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
// import Logo from "../assets/images/circli-noname.png";

const pages = ["Docs", "Pricing", "Github"];
const dropdown = ["Cli", "Builds", "Config"];

function Header() {
  // State here
  // const menuLink = ["About us", "Pricing", "FAQ"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const renderList = () => {
  //   return menuLink.map((list) => <li href="#">{list}</li>);
  // };

  return (
    <AppBar
      sx={{ backgroundColor: "#F8D842" }}
      position="static"
      className="elevation0"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CodeIcon
            sx={{
              backgroundColor: "#000001",
              display: { xs: "none", md: "flex" },
              mr: 1,
              p: "1px",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            CCLI
          </Typography>

          <Box sx={{ color: '#000001', flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {dropdown.map((dd) => (
                <MenuItem key={dd} onClick={handleCloseNavMenu}>
                  <Typography color="black" textAlign="center">
                    {dd}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <CodeIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            CCLI
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ color: '#000001', display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "none", md: "block" },
              }}
            >
              {dropdown.map((dd) => (
                <MenuItem key={dd} onClick={handleCloseNavMenu}>
                  <Typography color="black" textAlign="center">
                    {dd}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

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
