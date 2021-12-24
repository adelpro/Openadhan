import "../App.css";
import logo from "../logo.svg";
import { Fragment } from "react";
import { ShimmerPostItem } from "react-shimmer-effects";
import { useAdresseNominatim } from "../hooks/useAdresseNominatim";
export default function GeoNominatim({ lat, lon, acc }) {
  const api = {
    format: "json",
    base: "https://nominatim.openstreetmap.org/reverse?format=json",
  };
  const url = `${api.base}&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`;
  const { data, error, loading } = useAdresseNominatim(url);
  return (
    <Fragment>
      {error && <p>Error: {error}</p>}
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
              <li>Locality: {data.village}</li>
              <li>City: {data.town}</li>
              <li>Country: {data.country}</li>
            </ul>
            <p>API: "Nominatim"</p>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}
