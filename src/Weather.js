import React from "react";
import "./css/Weather.css";

export default function Weather(props) {
  const { city, temp_min, temp_max, icon, description, current_temp } = props;
  return (
    <div className="weather-container">
      <div className="weather-child-1">
        <div className="weather-city-row">{city}</div>
        <div className="weather-temperature-row">{current_temp}°c</div>
        <div>
          <img src={icon} alt="weather-icon" className="weather-image" />
        </div>
        <div className="weather-description-row">{description}</div>
        <div>
          <span>H:{temp_max}°c</span>
          &nbsp; &nbsp;
          <span>L:{temp_min}°c</span>
        </div>
      </div>
    </div>
  );
}
