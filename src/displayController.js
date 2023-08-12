import rainImage from "./img/rainy.jpg";
import sunImage from "./img/sunny.jpg";

const displayController = (function () {
  function displayWeather(data, unit) {
    let locationElement = document.getElementById("location");
    let dateElement = document.getElementById("date-time");
    let tempElement = document.getElementById("temperature");
    let humidityElement = document.getElementById("humidity");
    let windElement = document.getElementById("wind");
    let cloudElement = document.getElementById("cloud");
    let imageElement = document.getElementById("weather-icon");

    locationElement.textContent = data.location;
    dateElement.textContent = data.time;
    humidityElement.textContent = "Humidity: " + data.humidity + " %";
    cloudElement.textContent = "Cloud Cover: " + data.cloud;
    imageElement.src = data.iconSource;
    if (unit === "F") {
      tempElement.textContent = data.tempF + "° F";
      windElement.textContent = "Wind: " + data.windMph + " mph";
    } else {
      tempElement.textContent = data.tempC + "° C";
      windElement.textContent = "Wind: " + data.windKph + " kph";
    }
  }

  function highlightUnit(unit) {
    let C = document.querySelector(".celsius");
    let F = document.querySelector(".fahrenheit");
    if (unit === "F") {
      C.style.color = "black";
      F.style.color = "orange";
    } else {
      F.style.color = "black";
      C.style.color = "orange";
    }
  }

  function displayBackground(data) {
    if (data.condition.includes("rain")) {
      document.body.style.backgroundImage = url(rainImage);
    } else {
      document.body.style.backgroundImage = sunImage;
    }
  }

  return { displayWeather, highlightUnit, displayBackground };
})();

export { displayController };
