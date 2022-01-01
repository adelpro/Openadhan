import Geo from "../components/Geo";
import { GeoContext } from "../context/GeoContext.js";
import PrayerTimes from "../components/PrayerTimes";
import GeoNominatim from "../components/GeoNominatim";
import { Fragment, useContext } from "react";
import "../App.css";
export default function Home() {
  const { geoauto, geoautoError, geomanual, met } = useContext(GeoContext);
  const showgeo = localStorage.getItem("GeoBigdatacloud");
  const showGeoNominatim = localStorage.getItem("GeoNominatim");
  console.log(showgeo);
  return (
    <Fragment>
      {geoautoError && (
        <div className="card center_vertical">
          <p>{geoautoError.message}</p>
        </div>
      )}
      {met === "manual" && (
        <div className="cards">
          {(!showgeo || showgeo === "true") && (
            <Geo
              lat={geomanual.latitude}
              lon={geomanual.longitude}
              acc={geomanual.accuracy}
            />
          )}
          {(!showGeoNominatim || showGeoNominatim === "true") && (
            <GeoNominatim
              lat={geomanual.latitude}
              lon={geomanual.longitude}
              acc={geomanual.accuracy}
            />
          )}
          <PrayerTimes lat={geomanual.latitude} lon={geomanual.longitude} />
        </div>
      )}
      {!geoautoError && (met === "auto" || met === null) && (
        <div className="cards">
          {(!showgeo || showgeo === "true") && (
            <Geo
              lat={geoauto.latitude}
              lon={geoauto.longitude}
              acc={geoauto.accuracy}
            />
          )}
          {(!showGeoNominatim || showGeoNominatim === "true") && (
            <GeoNominatim
              lat={geoauto.latitude}
              lon={geoauto.longitude}
              acc={geoauto.accuracy}
            />
          )}
          <PrayerTimes lat={geoauto.latitude} lon={geoauto.longitude} />
        </div>
      )}
    </Fragment>
  );
}
