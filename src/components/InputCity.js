import { useContext, useState, useRef } from "react";
import { GeoContext } from "../context/GeoContext";
import logo from "../assets/logo.svg";
import { AdhanParamContext } from "../context/AdhanParamContext";
import { IconButton, InputBase, Paper } from "@mui/material";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
export default function InputCity() {
  const { lan: language } = useContext(AdhanParamContext);
  const content = {
    English: {
      title: "Location",
      inputplaceholder: "City name",
      searchp: "Search by city name",
    },
    Arabic: {
      title: "تحديد الموقع",
      inputplaceholder: "إسم المدينة",
      searchp: "البحث بواسطة إسم المدينة",
    },
  };
  const UiRef = useRef();
  const [query, setQuery] = useState("");
  const [data, setdata] = useState([]);
  const { geoauto, geoautoError, setgeomanual, met, setmet } =
    useContext(GeoContext);
  const handlemethode = (lat, lon, acc, m) => {
    localStorage.setItem("methode", m);
    setmet(m);
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
    setdata(null);
  };
  const autoButtonHandler = () => {
    handlemethode(
      geoauto.latitude,
      geoauto.longitude,
      geoauto.accuracy,
      "auto"
    );
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
    <div className="card">
      <img src={logo} alt="logo" />
      <h2>
        {content[`${language}`][`title`]} :{met}
      </h2>
      <Container>
        <Paper
          component="form"
          onSubmit={(e) => onSubmitHandler(e)}
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={content[`${language}`][`inputplaceholder`]}
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            type="text"
            id="name"
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <button onClick={autoButtonHandler} disabled={met === "auto"}>
            Auto
          </button>
        </Paper>
      </Container>
      <p>{content[`${language}`][`searchp`]} (API nominatim)</p>
      {geoautoError && <p>{geoautoError.message}</p>}
      {data && (
        <ul ref={UiRef} className="mat_list">
          {data.map((item) => {
            return (
              <li onClick={() => handleLiClick(item)} key={item.place_id}>
                {item.display_name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
