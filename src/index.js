import { Weather } from "./weather";
import { displayController } from "./displayController";
import "./style.css";
import "./switch.css";
import searchIconImage from "./img/search_icon.svg";

let unit = "C";
const searchIcon = document.getElementById("search-icon");
const toggleSwitch = document.querySelector(".switch-checkbox");
const searchInput = document.getElementById("search-input");
searchIcon.src = searchIconImage;

async function searchWeather() {
  let inputField = document.getElementById("search-input");
  currentWeather = await Weather.getWeather(inputField.value);
  try {
    displayController.displayWeather(currentWeather, unit);
    displayController.displayBackground(currentWeather);
  } catch {
    console.log("error");
  }
}

let currentWeather = await Weather.getWeather("Linz");
displayController.displayWeather(currentWeather, unit);
displayController.highlightUnit(unit);
displayController.displayBackground(currentWeather);

searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    searchIcon.click();
  }
});
searchIcon.addEventListener("click", function () {
  searchWeather();
});

toggleSwitch.addEventListener("change", function (e) {
  toggleSwitch.checkboxValue = e.target.checked ? "on" : "off";
  if (toggleSwitch.checkboxValue === "on") {
    unit = "F";
  } else {
    unit = "C";
  }
  displayController.highlightUnit(unit);
  displayController.displayWeather(currentWeather, unit);
});
