var form = document.querySelector("#form");
var rain = document.querySelector("#rain");
var cold = document.querySelector("#cold");
var output = document.querySelector("#output");
function showWeatherAndCold() {
    var rainingText = rain.checked ? "raining" : "not raining";
    var coldText = cold.checked ? "cold" : "not cold";
    output.textContent = "It is  ".concat(rainingText, " and it is  ").concat(coldText);
}
