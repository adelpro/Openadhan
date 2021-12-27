import InputCity from "./InputCity";
export default function CityCard() {
  return (
    <div className="card">
      <InputCity />
      <p>Search by city name (API nominatim)</p>
    </div>
  );
}
