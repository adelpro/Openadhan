import Geo from "../components/Geo";
import { GeoContext } from "../context/GeoContext.js";
import PrayerTimes from "../components/PrayerTimes";
import GeoNominatim from "../components/GeoNominatim";
import { Fragment, useContext } from "react";
import "../App.css";
export default function Home() {
  const [geoauto, geoautoError, geomanual, met] = useContext(GeoContext);
  return (
    <Fragment>
      {geoautoError && (
        <div className="card center_vertical">
          <p>{geoautoError.message}</p>
        </div>
      )}
      {met === "manual" && (
        <div className="cards">
          <Geo
            lat={geomanual.latitude}
            lon={geomanual.longitude}
            acc={geomanual.accuracy}
          />
          <GeoNominatim
            lat={geomanual.latitude}
            lon={geomanual.longitude}
            acc={geomanual.accuracy}
          />
          <PrayerTimes lat={geomanual.latitude} lon={geomanual.longitude} />
        </div>
      )}
      {!geoautoError && met === "auto" && (
        <div className="cards">
          <Geo
            lat={geoauto.latitude}
            lon={geoauto.longitude}
            acc={geoauto.accuracy}
          />
          <GeoNominatim
            lat={geoauto.latitude}
            lon={geoauto.longitude}
            acc={geoauto.accuracy}
          />
          <PrayerTimes lat={geoauto.latitude} lon={geoauto.longitude} />
        </div>
      )}
      {!geoautoError && met === null && (
        <div className="cards">
          <Geo
            lat={geoauto.latitude}
            lon={geoauto.longitude}
            acc={geoauto.accuracy}
          />
          <GeoNominatim
            lat={geoauto.latitude}
            lon={geoauto.longitude}
            acc={geoauto.accuracy}
          />
          <PrayerTimes lat={geoauto.latitude} lon={geoauto.longitude} />
        </div>
      )}
    </Fragment>
  );
}
