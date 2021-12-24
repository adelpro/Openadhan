import { Fragment, useState } from "react";

export default function InputCity() {
  const [query, setQuery] = useState("");
  const [data, setdata] = useState([]);
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
    <Fragment>
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
      </form>
      <ul>
        {data.map((item) => {
          return <li key={item.place_id}>{item.display_name}</li>;
        })}
      </ul>
    </Fragment>
  );
}
