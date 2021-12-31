import "../App.css";
import logo from "../logo.svg";
import { Fragment } from "react";
import { useAdresse } from "../hooks/useAdresse";
import { ShimmerPostItem } from "react-shimmer-effects";
export default function Geo({ lat, lon, acc }) {
  const api = {
    lan: "en",
    base: "https://api.bigdatacloud.net/data/reverse-geocode-client",
  };
  const url = `${api.base}?latitude=${lat}&longitude=${lon}&localityLanguage=${api.lan}`;
  const { data, error, loading } = useAdresse(url);
  return (
    <Fragment>
      {error && (
        <div className="card center_vertical">
          <p>Error: {error}</p>
        </div>
      )}
      {loading && (
        <div className="card">
          <ShimmerPostItem card text />
        </div>
      )}
      {!error && data && (
        <Fragment>
          <div className="card">
            <img src={logo} alt="logo" />
            <ul className="mat_list" style={{ textAlign: "left" }}>
              <li>Latitude: {lat}</li>
              <li>Longitude: {lon}</li>
              <li>Accuracy: {`More or less then ${acc} meters.`}</li>
              <li>Locality: {data.locality}</li>
              <li>City: {data.city}</li>
              <li>Country: {data.countryName}</li>
            </ul>
            <p>API: "Bigdatacloud"</p>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}
