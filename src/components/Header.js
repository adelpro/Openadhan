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
} from "@mui/material";
import { useState } from "react";

export default function Header() {
  const [open, setopen] = useState(false);
  return (
    <AppBar position="sticky" color="default">
      <Toolbar sx={{ display: ["none", "flex"] }}>
        <Avatar sx={{ mr: "auto" }}>P</Avatar>
        <Link
          sx={{ pr: 2 }}
          color="textPrimary"
          variant="button"
          underline="none"
          href="#"
        >
          Home
        </Link>
        <Link
          sx={{ pr: 2 }}
          color="textPrimary"
          variant="button"
          underline="none"
          href="#"
        >
          About
        </Link>
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
            <Link
              sx={{ pr: 2 }}
              color="textPrimary"
              variant="button"
              underline="none"
              href="#"
            >
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link
              sx={{ pr: 2 }}
              color="textPrimary"
              variant="button"
              underline="none"
              href="#"
            >
              About
            </Link>
          </ListItem>
          <Link
            sx={{ pr: 2 }}
            color="textPrimary"
            variant="button"
            underline="none"
            href="#"
          >
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
          </Link>
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}
