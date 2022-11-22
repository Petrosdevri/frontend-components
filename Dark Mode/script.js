const element = document.body;
const modeBtn = document.getElementById("mode-btn");
const modeImage = document.getElementById("mode-img");
const preferenceQuery = window.matchMedia("(prefers-color-scheme: dark)");

const addDarkMode = () => {
    element.classList.remove("light-mode");
    element.classList.add("dark-mode");
    modeImage.src = "images/light-mode.png";
};
  
const addLightMode = () => {
    element.classList.remove("dark-mode");
    element.classList.add("light-mode");
    modeImage.src = "images/dark-mode.png";
};
  
const toggleTheme = () =>
    !element.classList.contains("dark-mode") ? addDarkMode() : addLightMode();
  
const checkPreference = () =>
    preferenceQuery.matches ? addDarkMode() : addLightMode();
  
modeBtn.addEventListener("click", toggleTheme);
preferenceQuery.addEventListener("change", checkPreference);
// window.addEventListener("DOMContentLoaded", checkPreference);
(() => checkPreference())();