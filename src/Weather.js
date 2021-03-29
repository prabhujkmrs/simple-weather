import React from "react";

export default function Weather(props) {
  const { day, temp_min, temp_max, icon, description, current_temp } = props;
  return (
    <div className="weather-layout">
      <div className="weather-body">
        <div className="day-row">{day}</div>
        <div className="temperature-row">{current_temp}°c</div>
        <div className="description-row">{description}</div>
        <div>
          <img src={icon} alt="weather-icon" className="weather-image" />
        </div>
        <div>
          <span>H:{temp_max}°c</span>
          &nbsp; &nbsp;
          <span>L:{temp_min}°c</span>
        </div>
      </div>
    </div>
  );
}
