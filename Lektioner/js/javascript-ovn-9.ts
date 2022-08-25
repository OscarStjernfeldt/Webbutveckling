const form: HTMLFormElement = document.querySelector("#form");
const text: HTMLInputElement = document.querySelector("#text");
const number: HTMLInputElement = document.querySelector("#number");
const output: HTMLParagraphElement = document.querySelector("#output");

function writeTextAndNum(event) {
    event.preventDefault();

    for (let i = 0; i < parseInt(number.value); i++) {
        console.log(`${text.value} ${i+1}`);
    }
}

form.addEventListener("submit", writeTextAndNum, false);
