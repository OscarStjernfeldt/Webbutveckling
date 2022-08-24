const form = document.querySelector("#form");
const celsius: HTMLInputElement = document.querySelector("#celsius");
const output = document.querySelector("#output");

function cToF(event) {
    event.preventDefault();

    let cToFahr = parseInt(celsius.value) * 9 / 5 + 32;
    output.textContent = cToFahr + ' \xB0F.';

}

form.addEventListener("submit", cToF, false);
