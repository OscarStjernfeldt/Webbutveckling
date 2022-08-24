const form = document.querySelector("#form");
const output = document.querySelector("#output");
const yourName: HTMLInputElement = document.querySelector("#yourName");

function showGreeting(event) {
    event.preventDefault();

    let today = new Date();
    today.getFullYear();
    let hourNow = today.getHours();
    let greeting;
    if (hourNow > 18) {
        greeting = `Good evening, ${yourName.value}`;
    } else if (hourNow > 12) {
        greeting = `Good afternoon, ${yourName.value}`;
    } else if (hourNow > 0) {
        greeting = `Good morning, ${yourName.value}`;
    } else {
        greeting = `Welcome! ${yourName.value}`;
    }
    output.textContent = greeting + ", Todays date is: " + today;
}

form.addEventListener("submit", showGreeting, false)