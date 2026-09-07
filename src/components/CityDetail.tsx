import React from "react";
import { City } from "../data/cities";

interface CityDetailProps {
  city: City;
}

export const CityDetail: React.FC<CityDetailProps> = ({ city }) => {
  return (
    <div className="city-detail">
      <img src={city.image} alt={city.name} className="city-image" />
      <h2>
        {city.name}, {city.country} {city.flag}
      </h2>
      <p className="description">{city.description}</p>

      <div className="info-grid">
        <div className="info-box">
          <strong>💰 Currency:</strong> {city.currency}
        </div>
        <div className="info-box">
          <strong>🕒 Timezone:</strong> {city.timezone}
        </div>
      </div>

      <div className="section">
        <h3>🏛️ Top Attractions</h3>
        <ul>
          {city.attractions.map((attraction, idx) => (
            <li key={idx}>{attraction}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>🥖 Popular Local Food</h3>
        <ul>
          {city.popularFood.map((food, idx) => (
            <li key={idx}>{food}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
