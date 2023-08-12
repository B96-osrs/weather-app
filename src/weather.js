const Weather = (function () {
  async function fetchData(region) {
    const response =
      await fetch(`http://api.weatherapi.com/v1/current.json?key=27136f6df35e4ca398405149231208&q=${region}&aqi=yes
      `);
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  }

  async function getWeather(region) {
    const data = await fetchData(region);
    const location = data.location.name;
    const time = data.current.last_updated;
    const tempC = data.current.temp_c;
    const tempF = data.current.temp_f;
    const windMph = data.current.wind_mph;
    const windKph = data.current.wind_kph;
    const humidity = data.current.humidity;
    const cloud = data.current.cloud;
    const condition = data.current.condition.text;
    const iconSource = `https://${data.current.condition.icon}`;
    return {
      location,
      time,
      tempC,
      tempF,
      windMph,
      windKph,
      humidity,
      cloud,
      condition,
      iconSource,
    };
  }
  return { getWeather };
})();

export { Weather };
