import rainImage from "./img/rainy.jpg";
import sunImage from "./img/sunny.jpg";
import snowImage from "./img/snowy.jpg";
import cloudImage from "./img/cloudy.jpg";

const displayController = (function () {
  function displayWeather(data, unit) {
    let locationElement = document.getElementById("location");
    let dateElement = document.getElementById("date");
    let timeElement = document.getElementById("time");
    let tempElement = document.getElementById("temperature");
    let humidityElement = document.getElementById("humidity");
    let windElement = document.getElementById("wind");
    let cloudElement = document.getElementById("cloud");
    let imageElement = document.getElementById("weather-icon");

    locationElement.textContent = data.location;
    let dateArray = data.time.split(" ");
    dateElement.textContent = dateArray[0];
    timeElement.textContent = dateArray[1];
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
      C.style.color = "grey";
      F.style.color = "orange";
    } else {
      F.style.color = "grey";
      C.style.color = "orange";
    }
  }

  function displayBackground(data) {
    if (data.condition.includes("rain")) {
      document.body.style.backgroundImage = `url(${rainImage}`;
    } else if (data.condition.includes("snow")) {
      document.body.style.backgroundImage = `url(${snowImage}`;
      console.log(sunImage);
    } else if (data.condition.includes("cloud")) {
      document.body.style.backgroundImage = `url(${cloudImage}`;
      console.log(sunImage);
    } else {
      document.body.style.backgroundImage = `url(${sunImage}`;
      console.log(sunImage);
    }
  }

  return { displayWeather, highlightUnit, displayBackground };
})();

export { displayController };
