import React, { useState } from "react";
import cities from "./data/cities";

export default function AutoComplete(props) {
  const { fetchWeather } = props;

  const [suggestion, setSuggestion] = useState([]);
  const [city, setCity] = useState("");

  const onTextChange = (e) => {
    const value = e.target.value;
    let suggestionList = [];
    if (value.length > 0) {
      const regEx = new RegExp(`^${value}`, "i");
      suggestionList = cities.sort().filter((v) => regEx.test(v));
    }
    setCity(value);
    setSuggestion(suggestionList);
  };

  const selectedSuggestion = (value) => {
    setCity(value);
    setSuggestion([]);
  };

  const renderSuggestions = () => {
    if (suggestion.length === 0) return null;
    return (
      <ul>
        {suggestion.map((item) => (
          <li onClick={() => selectedSuggestion(item)}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <input
        type="text"
        onChange={onTextChange}
        value={city}
        //ref={(input) => input && input.focus()}
      />
      &nbsp;
      <button
        onClick={() => {
          fetchWeather(city);
        }}
      >
        Show Weather
      </button>
      {renderSuggestions()}
    </div>
  );
}
