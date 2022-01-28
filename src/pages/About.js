import { Fragment } from "react";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AdhanParamContext } from "../context/AdhanParamContext";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
export default function About() {
  const { lan: language } = useContext(AdhanParamContext);
  const content = {
    English: {
      about:
        "OpenAdhan allaw remember you about prayer times directly in the browser",
    },
    Arabic: {
      about: "تطبيق أذان يذكرك بأوقات الصلاة مباشرة من المتصفح.",
    },
  };
  return (
    <Fragment>
      <Box mt={8} mb={8}>
        <Typography variant="body1" textAlign="center">
          {content[`${language}`][`about`]}
        </Typography>
      </Box>
      <Footer />
    </Fragment>
  );
}
