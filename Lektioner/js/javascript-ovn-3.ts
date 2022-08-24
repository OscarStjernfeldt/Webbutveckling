const form = document.querySelector("#formReg");
const price = document.querySelector("#price");
const quantity = document.querySelector("#quantity");
const output = document.querySelector("#output");

function showSum(event) {
    event.preventDefault();

    // @ts-ignore
    let sum = price.value * quantity.value;

    output.textContent = 'Summary: ' + sum;
}

form.addEventListener("submit", showSum, false);
