import "./WeatherCard.css";
import { weatherTypes, defaultWeather } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const filteredType = weatherTypes.filter((type) => {
    return (
      type.condition === weatherData.condition && type.day === weatherData.isDay
    );
  });

  let weatherType;

  if (filteredType.length === 0) {
    weatherType = defaultWeather[weatherData.isDay ? "day" : "night"];
  } else {
    weatherType = filteredType[0];
  }

  return (
    <section className="weather-card">
      <p className="weather-card___temp">{weatherData.temp.F}&deg; F</p>
      <img
        src={weatherType?.url}
        alt={`Card showing ${weatherType?.day ? "day" : "night"} time`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
