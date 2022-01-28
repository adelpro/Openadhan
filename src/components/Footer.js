import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { AdhanParamContext } from "../context/AdhanParamContext";
export default function Header() {
  const { lan: language } = useContext(AdhanParamContext);
  const content = {
    English: {
      footer: "OpenAdhan v2.0 Copyright 2022",
    },
    Arabic: {
      footer: "أذان الإصدار 2.0 حقوق النشر 2022",
    },
  };
  return (
    <AppBar
      position="sticky"
      color="inherit"
      style={{
        top: "auto",
        bottom: 0,
        background: "transparent",
      }}
    >
      <Typography
        variant="subtitle2"
        align="center"
        component="div"
        gutterBottom
      >
        {content[`${language}`][`footer`]}
      </Typography>
    </AppBar>
  );
}
