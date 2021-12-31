import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  AppBar,
  Avatar,
  Divider,
  SwipeableDrawer,
  IconButton,
  Link,
  Toolbar,
  List,
  ListItem,
  Container,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
export default function Header() {
  const [open, setopen] = useState(false);
  return (
    <AppBar position="sticky" color="default">
      <Toolbar sx={{ display: ["none", "flex"] }}>
        <Avatar sx={{ mr: "auto" }}>P</Avatar>
        <NavLink className={classes.link} to="/">
          Home
        </NavLink>
        <NavLink className={classes.link} to="/about">
          About
        </NavLink>
        <NavLink className={classes.link} to="/config">
          Config
        </NavLink>
      </Toolbar>
      <Toolbar sx={{ display: ["flex", "none"], ml: "auto" }}>
        <IconButton onClick={() => setopen(true)}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => {
          setopen(true);
        }}
        onClose={() => {
          setopen(false);
        }}
      >
        <div>
          <IconButton onClick={() => setopen(false)}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List sx={{ width: 200 }}>
          <ListItem>
            <NavLink className={classes.link} to="/">
              Home
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink className={classes.link} to="/about">
              About
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink className={classes.link} to="/config">
              Config
            </NavLink>
          </ListItem>

          <Link
            sx={{ pr: 2 }}
            color="textPrimary"
            variant="button"
            underline="none"
            href="#"
          >
            <Container>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
            </Container>
          </Link>
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}
