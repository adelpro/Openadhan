import "../App.css";
import logo from "../assets/logo.svg";
import { Fragment } from "react";
import Skeleton from "@mui/material/Skeleton";
import { useAdressNominatim } from "../hooks/useAdressNominatim";
export default function GeoNominatim({ lat, lon, acc, met, language }) {
  const content = {
    English: {
      currentLocation: "Current location",
      Latitude: "Latitude",
      Longitude: "Longitude",
      Accuracy: "Accuracy",
      Locality: "Locality",
      City: "City",
      Country: "Country",
      meters: "meters.",
    },
    Arabic: {
      currentLocation: "الموقع الحالي",
      Latitude: "خط الطول",
      Longitude: "خط العرض",
      Accuracy: "الدقة",
      Locality: "المكان",
      City: "المدينة",
      Country: "البلد",
      meters: "متر",
    },
  };
  const api = {
    format: "json",
    base: "https://nominatim.openstreetmap.org/reverse?format=json",
  };
  const url = `${api.base}&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`;
  const { data, error, loading } = useAdressNominatim(url);
  return (
    <Fragment>
      {error && (
        <div className="card center_vertical">
          <p>Error: {error}</p>
        </div>
      )}
      {loading && (
        <div className="card">
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="rectangular" />
        </div>
      )}
      {!error && data && (
        <Fragment>
          <div className="card">
            <img src={logo} alt="logo" />
            <h2>
              {" "}
              {content[`${language}`][`currentLocation`]} ({met})
            </h2>
            <p>Source: "Nominatim API"</p>
            <ul className="mat_list" style={{ textAlign: "left" }}>
              <li>
                {content[`${language}`][`Latitude`]}: {lat}
              </li>
              <li>
                {content[`${language}`][`Longitude`]}: {lon}
              </li>
              <li>
                {content[`${language}`][`Accuracy`]}: {`: ${acc} `}
                {content[`${language}`][`meters`]}
              </li>
              <li>
                {" "}
                {content[`${language}`][`Locality`]}: {data.village}
              </li>
              <li>
                {" "}
                {content[`${language}`][`City`]}: {data.town}
              </li>
              <li>
                {" "}
                {content[`${language}`][`Country`]}: {data.country}
              </li>
            </ul>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}
