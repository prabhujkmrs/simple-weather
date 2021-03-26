import React from "react";
import DefaultImage from "./assets/sunny.png";

export default function Weather(props) {
  const { day, image, imageAlt, temperature } = props;
  const defaultAlt = "sunny";
  return (
    <div className="weather-layout">
      <div className="weather-body">
        <div>{day}</div>
        <div>
          <img
            src={image ? image : DefaultImage}
            alt={imageAlt ? imageAlt : defaultAlt}
            className="weather-image"
          />
        </div>
        <div>{temperature}</div>
      </div>
    </div>
  );
}
