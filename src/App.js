import React, { useCallback, useState } from "react";
import "./css/App.css";
import Loading from "./assets/loading.png";
import Weather from "./Weather";
import AutoComplete from "./AutoComplete";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default function App() {
  const initialData = {
    city: undefined,
    day: undefined,
    description: undefined,
    icon: undefined,
    current_temp: undefined,
    temp_max: undefined,
    temp_min: undefined
  };
  const [weather, setWeather] = useState(initialData);

  const fetchWeather = useCallback((city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const date = new Date();
        setWeather({
          day: date.getDay(),
          icon: data.weather[0].icon,
          city: city,
          description: data.weather[0].description,
          current_temp: formatToCelsius(data.main.temp),
          temp_max: formatToCelsius(data.main.temp_max),
          temp_min: formatToCelsius(data.main.temp_min)
        });
      })
      .catch((error) => console.log(error));
  }, []);

  const getIcon = (code) => {
    const icon = `http://openweathermap.org/img/wn/${code}@2x.png`;
    return icon;
  };

  const formatToCelsius = (temp) => {
    return Math.floor(temp - 273.15);
  };

  return (
    <div className="app-container">
      <AutoComplete fetchWeather={fetchWeather} />
      <Weather
        city={weather.city}
        description={weather.description}
        icon={weather.icon ? getIcon(weather.icon) : Loading}
        current_temp={weather.current_temp}
        temp_min={weather.temp_min}
        temp_max={weather.temp_max}
      />
    </div>
  );
}
