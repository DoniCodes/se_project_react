function _checkResponse(res) {
  if (!res.ok) {
    Promise.reject(`Error ${res.status}`);
  }
  return res.json();
}

export function filterWeatherData(data) {
  const result = {};
  result.city = data.name;
  result.type = getWeatherType(data.main.temp);
  result.temp = {
    F: data.main.temp,
    /* C: Math.round((data.main.temp - 32) * (5 / 9)), */
  };
  result.condition = data.weather[0].main.toLowerCase();
  result.isDay = isDay(data.sys, Date.now());
  return result;
}

function isDay({ sunrise, sunset }, now) {
  return sunrise * 1000 < now && now < sunset * 1000;
}

function getWeatherType(temperature) {
  if (temperature > 86) {
    return "hot";
  } else if (temperature >= 66 && temperature < 86) {
    return "warm";
  } else {
    return "cold";
  }
}

export const getWeather = async ({ latitude, longitude }, APIkey) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(_checkResponse);
  return response;
};
