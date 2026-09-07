import React from "react";
import { City } from "../data/cities";

interface CityListProps {
  cities: City[];
  selectedCityId: string;
  onSelectCity: (city: City) => void;
}

export const CityList: React.FC<CityListProps> = ({
  cities,
  selectedCityId,
  onSelectCity,
}) => {
  return (
    <ul className="city-list">
      {cities.map((city) => (
        <li
          key={city.id}
          className={`city-item ${selectedCityId === city.id ? "active" : ""}`}
          onClick={() => onSelectCity(city)}
        >
          <span>{city.flag}</span> <strong>{city.name}</strong>
        </li>
      ))}
    </ul>
  );
};
