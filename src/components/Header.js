import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import mouadin from "../assets/openadhan.png";
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
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import { useContext, useState } from "react";
import { AdhanParamContext } from "../context/AdhanParamContext";
export default function Header() {
  const { lan: language, setlan: setlanguage } = useContext(AdhanParamContext);
  const [open, setopen] = useState(false);

  const content = {
    English: {
      rtl: false,
      home: "Home",
      about: "About",
      config: "Config",
    },
    Arabic: {
      rtl: true,
      home: "الصفحة الرئيسية",
      about: "حول الموقع",
      config: "الإعدادات",
    },
  };
  return (
    <AppBar position="sticky" color="default">
      <Toolbar sx={{ display: ["none", "flex"], direction: "rtl" }}>
        <Avatar sx={{ ml: "auto" }} src={mouadin} alt="Mouadin"></Avatar>
        <NavLink
          className={(nav) => (nav.isActive ? classes.active : classes.link)}
          to="/"
        >
          {language === "Arabic" ? content.Arabic.home : content.English.home}
        </NavLink>
        <NavLink
          className={(nav) => (nav.isActive ? classes.active : classes.link)}
          to="/about"
        >
          {language === "Arabic" ? content.Arabic.about : content.English.about}
        </NavLink>
        <NavLink
          className={(nav) => (nav.isActive ? classes.active : classes.link)}
          to="/config"
        >
          {language === "Arabic"
            ? content.Arabic.config
            : content.English.config}
        </NavLink>
        <select
          className="custom-select"
          value={language}
          onChange={(e) => {
            setlanguage(e.target.value);
          }}
        >
          <option value="English">English</option>
          <option value="Arabic">عربية</option>
        </select>
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
        <List sx={{ width: 250 }}>
          <ListItem>
            <NavLink
              className={(nav) =>
                nav.isActive ? classes.active : classes.link
              }
              to="/"
            >
              {language === "Arabic"
                ? content.Arabic.home
                : content.English.home}
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              className={(nav) =>
                nav.isActive ? classes.active : classes.link
              }
              to="/about"
            >
              {language === "Arabic"
                ? content.Arabic.about
                : content.English.about}
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              className={(nav) =>
                nav.isActive ? classes.active : classes.link
              }
              to="/config"
            >
              {language === "Arabic"
                ? content.Arabic.config
                : content.English.config}
            </NavLink>
          </ListItem>
          <Container>
            <select
              className="custom-select"
              value={language}
              onChange={(e) => {
                setlanguage(e.target.value);
              }}
            >
              <option value="English">English</option>
              <option value="Arabic">عربية</option>
            </select>
          </Container>

          <Link
            sx={{ pr: 2 }}
            color="textPrimary"
            variant="button"
            underline="none"
            href="#"
          >
            <Container>
              <Link
                href="https://www.facebook.com/wathakker.wakf"
                target="_blank"
                rel="noopener"
              >
                <IconButton>
                  <FacebookIcon />
                </IconButton>
              </Link>
              <Link
                href="https://www.twitter.com/Quranipfs"
                rel="noopener"
                target="_blank"
              >
                <IconButton>
                  <TwitterIcon />
                </IconButton>
              </Link>
            </Container>
          </Link>
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}
