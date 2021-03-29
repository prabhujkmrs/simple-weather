import React, { useCallback, useState } from "react";
import "./styles.css";
import Weather from "./Weather";

const API_KEY = "27fc8241ef345516d30e6ea99ca6c01f";

export default function App() {
  const initialData = {
    city: undefined,
    day: undefined,
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
        console.log(data);
        const date = new Date();
        setWeather({
          day: date.getDay(),
          icon: data.weather[0].icon,
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

  const getDay = () => {
    switch (weather.day) {
      case 0:
        return "Sun";
      case 1:
        return "Mon";
      case 2:
        return "Tue";
      case 3:
        return "Wed";
      case 4:
        return "Thu";
      case 5:
        return "Fri";
      case 6:
        return "Sat";
      default:
    }
  };

  return (
    <div className="App">
      <div>
        <label> City: </label>
        <input
          type="text"
          onChange={(e) => setWeather({ city: e.target.value })}
          ref={(input) => input && input.focus()}
        />
        <button
          onClick={() => {
            fetchWeather(weather.city);
          }}
        >
          Get Weather
        </button>
      </div>
      <Weather
        day={getDay()}
        icon={getIcon(weather.icon)}
        temp_min={weather.temp_min}
        temp_max={weather.temp_max}
      />
    </div>
  );
}
