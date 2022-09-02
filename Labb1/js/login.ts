const form = document.querySelector("#form");
const email: HTMLInputElement = document.querySelector("#email");
const output = document.querySelector("#output");

function alertMessage(event) {
    event.preventDefault();
    alert(output.textContent = email.value);
    window.location.pathname = "Webbutveckling/Labb1/Laboration1.html";
}

form.addEventListener("submit", alertMessage, false);