import { Container, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { GeoContext } from "../context/GeoContext";

export default function InputCity() {
  const [query, setQuery] = useState("");
  const [data, setdata] = useState([]);
  const [
    { latitude, longitude, accuracy },
    geoautoError,
    setgeomanual,
    met,
    setmethode,
  ] = useContext(GeoContext);
  const handlemethode = (lat, lon, acc, m) => {
    localStorage.setItem("methode", m);
    setmethode(m);
    localStorage.setItem("latitude", lat);
    localStorage.setItem("longitude", lon);
    localStorage.setItem("accuracy", acc);
  };
  const handleLiClick = (item) => {
    handlemethode(item.lat, item.lon, "", "manual");
    setgeomanual({
      latitude: item.lat,
      longitude: item.lon,
      accuracy: "",
    });
  };
  const autoButtonHandler = () => {
    handlemethode(latitude, longitude, accuracy, "auto");
    setmethode();
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://nominatim.openstreetmap.org/search?q=${query}&format=json&polygon_geojson=1&addressdetails=1}`
    )
      .then((res) => res.json())
      .then((result) => {
        setQuery("");
        setdata(result);
      });
  };
  const search = (evt) => {
    if (evt.key === "Enter") {
      onSubmitHandler();
    }
  };
  return (
    <Container>
      <Typography gutterBottom variant="h5" component="div">
        Location :{met}
      </Typography>

      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">City name</label>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          type="text"
          id="name"
        />
        <button>Search</button>
        <button onClick={autoButtonHandler} disabled={geoautoError}>
          Auto
        </button>
      </form>
      {geoautoError && <p>{geoautoError.message}</p>}
      <ul className="mat_list">
        {data.map((item) => {
          return (
            <li onClick={() => handleLiClick(item)} key={item.place_id}>
              {item.display_name}
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
