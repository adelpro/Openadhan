import InputCity from "./InputCity";
import "../App.css";
export default function CityCard() {
  return (
    <div className="card">
      <InputCity />
      <p>Search by city name (API nominatim)</p>
    </div>
  );
}
