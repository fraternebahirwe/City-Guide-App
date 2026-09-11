import { useState } from "react";
import { CITIES } from "./data/cities";
import { CityList } from "./components/CityList";
import { CityDetail } from "./components/CityDetail";
import "./App.css";

function App() {
  const [selectedCityId, setSelectedCityId] = useState(CITIES[0].id);
  const selectedCity = CITIES.find((city) => city.id === selectedCityId)!;

  return (
    <div className="container py-4">
      <h1 className="mb-4">🌍 City Guide</h1>
      <div className="row">
        <div className="col-md-4">
          <CityList
            cities={CITIES}
            selectedCityId={selectedCityId}
            onSelectCity={(city) => setSelectedCityId(city.id)}
          />
        </div>
        <div className="col-md-8">
          <CityDetail city={selectedCity} />
        </div>
      </div>
    </div>
  );
}

export default App;
