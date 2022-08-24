var form = document.querySelector("#form");
var text = document.querySelector("#text");
var number = document.querySelector("#number");
var output = document.querySelector("#output");
function writeTextAndNum(event) {
    event.preventDefault();
    for (var i = 0; i <= parseInt(number.value); i++) {
        output.textContent = "".concat(text, " ").concat(i);
    }
}
form.addEventListener("submit", writeTextAndNum, false);
