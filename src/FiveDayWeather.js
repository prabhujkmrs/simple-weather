import React from "react";
import Weather from "./Weather";
import "./css/FiveDayWeather.css";

export default function FiveDayWeather(props) {
  const { weatherData } = props;

  const renderWeatherdata = () =>
    weatherData.map((item) => (
      <Weather
        day={item.day}
        image={item.image}
        imageAlt={item.imageAlt}
        temperature={item.temperature}
      />
    ));

  return <div className="fiveday-weather-layout">{renderWeatherdata()}</div>;
}
