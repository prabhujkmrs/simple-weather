import React, { useState } from "react";
import cities from "./data/cities";
import "./css/AutoComplete.css";

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
    <div className="autocomplete-container">
      <div>
        <input
          type="text"
          onChange={onTextChange}
          value={city}
          //ref={(input) => input && input.focus()}
        />
      </div>
      <div>
        <button
          onClick={() => {
            fetchWeather(city);
          }}
        >
          Show Weather
        </button>
      </div>
      <div>{renderSuggestions()}</div>
    </div>
  );
}
