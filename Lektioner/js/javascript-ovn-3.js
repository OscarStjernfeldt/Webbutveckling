var form = document.querySelector("#formReg");
var price = document.querySelector("#price");
var quantity = document.querySelector("#quantity");
var output = document.querySelector("#output");
function showSum(event) {
    event.preventDefault();
    // @ts-ignore
    var sum = price.value * quantity.value;
    output.textContent = 'Summary: ' + sum;
}
form.addEventListener("submit", showSum, false);
