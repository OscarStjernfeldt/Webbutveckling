const elFormTemp = document.querySelector('#formTemp');
const elTemp: HTMLFormElement = document.querySelector('#txtTemp');
const elTempChoice: HTMLSelectElement = document.querySelector('#tempChoice');
let elOutput = document.querySelector('#output');

function showTemp(event) {
    let inTemp = elTemp.value;
    let getTempChoice = elTempChoice.options[elTempChoice.selectedIndex].value;

    if (getTempChoice === '1') {
        elOutput.textContent = 'Fahrenheit: ' + celsiusToFahrenheit(inTemp);
    } else {
        elOutput.textContent = 'Celsius ' + fahrenheitToCelsius(inTemp);
    }

    // Submittar inte formuläret
    event.preventDefault(); //
}

function celsiusToFahrenheit(temp) {
    let outTemp = temp * 9 / 5 + 32;
    return outTemp;
}

function fahrenheitToCelsius(temp) {
    let outTemp = (temp - 32) * 5 / 9;
    return outTemp;
}

elFormTemp.addEventListener('submit', showTemp, false);