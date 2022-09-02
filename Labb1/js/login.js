var form = document.querySelector("#form");
var email = document.querySelector("#email");
var output = document.querySelector("#output");
function alertMessage(event) {
    event.preventDefault();
    alert(output.textContent = email.value);
    window.location.pathname = "Webbutveckling/Labb1/Laboration1.html";
}
form.addEventListener("submit", alertMessage, false);
