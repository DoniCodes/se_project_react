import "./WeatherCard.css";
import { weatherTypes, defaultWeather } from "../../utils/constants";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
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
      <p className="weather-card___temp">
        {weatherData.temp[currentTemperatureUnit]}&deg; {currentTemperatureUnit}
      </p>
      <img
        src={weatherType?.url}
        alt={`Card showing ${weatherType?.day ? "day" : "night"} time`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
