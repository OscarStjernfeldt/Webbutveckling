var elFormTemp = document.querySelector('#formTemp');
var elTemp = document.querySelector('#txtTemp');
var elTempChoice = document.querySelector('#tempChoice');
var elOutput = document.querySelector('#output');
function showTemp(event) {
    var inTemp = elTemp.value;
    var getTempChoice = elTempChoice.options[elTempChoice.selectedIndex].value;
    if (getTempChoice === '1') {
        elOutput.textContent = 'Fahrenheit: ' + celsiusToFahrenheit(inTemp);
    }
    else {
        elOutput.textContent = 'Celsius ' + fahrenheitToCelsius(inTemp);
    }
    // Submittar inte formuläret
    event.preventDefault(); //
}
function celsiusToFahrenheit(temp) {
    var outTemp = temp * 9 / 5 + 32;
    return outTemp;
}
function fahrenheitToCelsius(temp) {
    var outTemp = (temp - 32) * 5 / 9;
    return outTemp;
}
elFormTemp.addEventListener('submit', showTemp, false);
