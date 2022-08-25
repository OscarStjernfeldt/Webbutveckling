var form = document.querySelector("#form");
var text = document.querySelector("#text");
var number = document.querySelector("#number");
var output = document.querySelector("#output");
function writeTextAndNum(event) {
    event.preventDefault();
    for (var i = 0; i < parseInt(number.value); i++) {
        console.log("".concat(text.value, " ").concat(i + 1));
    }
}
form.addEventListener("submit", writeTextAndNum, false);
