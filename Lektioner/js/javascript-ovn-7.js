var form = document.querySelector("#form");
var celsius = document.querySelector("#celsius");
var output = document.querySelector("#output");
function cToF(event) {
    event.preventDefault();
    var cToFahr = parseInt(celsius.value) * 9 / 5 + 32;
    alert(output.textContent = cToFahr + ' \xB0F.');
}
form.addEventListener("submit", cToF, false);
