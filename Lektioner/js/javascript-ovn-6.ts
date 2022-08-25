const form = document.querySelector("#form");
const rain: HTMLInputElement = document.querySelector("#rain");
const cold: HTMLInputElement = document.querySelector("#cold");
const output = document.querySelector("#output");

function showWeatherAndCold() {

    let rainingText = rain.checked ? "raining" : "not raining";
    let coldText = cold.checked ? "cold" : "not cold";
    output.textContent = `It is  ${rainingText} and it is  ${coldText}`;
}
