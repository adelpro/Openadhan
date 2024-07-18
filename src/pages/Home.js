import Geo from "../components/Geo";
import { GeoContext } from "../context/GeoContext.js";
import PrayerTimes from "../components/PrayerTimes";
import GeoNominatim from "../components/GeoNominatim";
import { Fragment, useContext, useState } from "react";
import NextPrayer from "../components/NextPrayer";
import "../App.css";
import { LinearProgress } from "@mui/material";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Footer from "../components/Footer";
import { AdhanParamContext } from "../context/AdhanParamContext";
export default function Home() {
  const { lan: language } = useContext(AdhanParamContext);
  console.log("home", language);
  const { geoauto, geoautoError, geomanual, met } = useContext(GeoContext);
  const showgeo = JSON.parse(localStorage.getItem("GeoBigdatacloud"));
  const showGeoNominatim = JSON.parse(localStorage.getItem("GeoNominatim"));
  const [adhanNotification, setadhanNotification] = useState(false);
  const showAdhanNotification = () => {
    setadhanNotification(true);
  };
  const action = (
    <Fragment>
      <Button
        color="primary"
        size="small"
        onClick={(reason) => {
          if (reason === "clickaway") {
            return;
          }
          setadhanNotification(false);
        }}
      >
        Close
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={(reason) => {
          if (reason === "clickaway") {
            return;
          }
          setadhanNotification(false);
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  if (!geoauto.latitude && !geomanual.latitude) {
    return <LinearProgress />;
  }
  return (
    <Fragment>
      <Snackbar
        open={adhanNotification}
        autoHideDuration={6000}
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            return;
          }
          setadhanNotification(false);
        }}
        message={
          language === "English" ? "Time for prayer ..." : "وقت الصلاة..."
        }
        action={action}
      />
      {geoautoError && (
        <div className="card center_vertical">
          <p>{geoautoError.message}</p>
        </div>
      )}
      {met === "manual" && (
        <div className="cards">
          <NextPrayer
            language={language}
            latitude={geomanual.latitude}
            longitude={geomanual.longitude}
            showAdhanNotification={showAdhanNotification}
          />
          {(!showgeo || showgeo === "true") && (
            <Geo
              language={language}
              lat={geomanual.latitude}
              lon={geomanual.longitude}
              acc={geomanual.accuracy}
              met={met}
            />
          )}
          {(!showGeoNominatim || showGeoNominatim === "true") && (
            <GeoNominatim
              language={language}
              lat={geomanual.latitude}
              lon={geomanual.longitude}
              acc={geomanual.accuracy}
              met={met}
            />
          )}
          <PrayerTimes
            language={language}
            lat={geomanual.latitude}
            lon={geomanual.longitude}
          />
        </div>
      )}
      {!geoautoError && (met === "auto" || met === null) && (
        <div className="cards">
          <NextPrayer
            language={language}
            latitude={geoauto.latitude}
            longitude={geoauto.longitude}
            showAdhanNotification={showAdhanNotification}
          />
          {(!showgeo || showgeo === "true") && (
            <Geo
              language={language}
              lat={geoauto.latitude}
              lon={geoauto.longitude}
              acc={geoauto.accuracy}
              met={met}
            />
          )}
          {(!showGeoNominatim || showGeoNominatim === "true") && (
            <GeoNominatim
              language={language}
              lat={geoauto.latitude}
              lon={geoauto.longitude}
              acc={geoauto.accuracy}
              met={met}
            />
          )}
          <PrayerTimes
            language={language}
            lat={geoauto.latitude}
            lon={geoauto.longitude}
          />
        </div>
      )}
      <Footer />
    </Fragment>
  );
}
