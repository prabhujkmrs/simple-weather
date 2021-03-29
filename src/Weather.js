import React from "react";

export default function Weather(props) {
  const { day, temp_min, temp_max, icon } = props;

  return (
    <div className="weather-layout">
      <div className="weather-body">
        <div>{day}</div>
        <div>
          <img src={icon} alt="weather-icon" className="weather-image" />
        </div>
        <div>
          <span>{temp_max}°c</span>
          &nbsp; &nbsp;
          <span>{temp_min}°c</span>
        </div>
      </div>
    </div>
  );
}
