import "./styles.css";
import FiveDayWeather from "./FiveDayWeather";

const weatherData = [
  {
    day: "Mon",
    image: "",
    imageAlt: "sunny",
    temperature: "36°C"
  },
  {
    day: "Tue",
    image: "",
    imageAlt: "snow",
    temperature: "37°C"
  },
  {
    day: "Wed",
    image: "",
    imageAlt: "rain",
    temperature: "38°C"
  },
  {
    day: "Thu",
    image: "",
    imageAlt: "clouds",
    temperature: "39°C"
  },
  {
    day: "Fri",
    image: "",
    imageAlt: "thunder",
    temperature: "41°C"
  }
];

export default function App() {
  return (
    <div className="App">
      <FiveDayWeather weatherData={weatherData} />
    </div>
  );
}
