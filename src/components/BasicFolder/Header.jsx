import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  ListItemText,
  ListItem,
  List,
} from "@mui/material";
import "./HeadersStyle.css";
import logo from "../Assets/BMLogo.jpg";
import MenuIcon from "@mui/icons-material/Menu";
const AppHeader = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <List className="drawerList">
      <ListItem component="a" href="/">
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem component="a" href="/about-us">
        <ListItemText primary="About Us" />
      </ListItem>
      <ListItem component="a" href="/itsolutions">
        <ListItemText primary="IT Solutions" />
      </ListItem>
      <ListItem component="a" href="/services">
        <ListItemText primary="Services" />
      </ListItem>
      <ListItem component="a" href="/contactus">
        <ListItemText primary="Contact Us" />
      </ListItem>
    </List>
  );

  return (
    <AppBar position="static" className="headers">
      <Toolbar className="toolbar">
        <img src={logo} alt="Logo" className="logo" />

        <div className="menu">
          <Button className="menu-item" href="/">
            Home
          </Button>
          <span className="dot">•</span>
          <Button className="menu-item" href="/about-us">
            About Us
          </Button>
          <span className="dot">•</span>
          <Button className="menu-item" href="/itsolutions">
            IT Solutions
          </Button>
          <span className="dot">•</span>
          <Button className="menu-item" href="/services">
            Services
          </Button>
          <span className="dot">•</span>
          <Button className="menu-item" href="/contactus">
            Contact Us
          </Button>
        </div>
        <IconButton
          edge="start"
          className="menuButton"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawerList}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
