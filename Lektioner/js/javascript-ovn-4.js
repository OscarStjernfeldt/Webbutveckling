var form = document.querySelector("#form");
var output = document.querySelector("#output");
var yourName = document.querySelector("#yourName");
function showGreeting(event) {
    event.preventDefault();
    var today = new Date();
    today.getFullYear();
    var hourNow = today.getHours();
    var greeting;
    if (hourNow > 18) {
        greeting = "Good evening, ".concat(yourName.value);
    }
    else if (hourNow > 12) {
        greeting = "Good afternoon, ".concat(yourName.value);
    }
    else if (hourNow > 0) {
        greeting = "Good morning, ".concat(yourName.value);
    }
    else {
        greeting = "Welcome! ".concat(yourName.value);
    }
    output.textContent = greeting + ", Todays date is: " + today;
}
form.addEventListener("submit", showGreeting, false);
