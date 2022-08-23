"use strict";
const form = document.querySelector("#formReg");
const price = document.querySelector("#price");
const quantity = document.querySelector("#quantity");
const output = document.querySelector("#output");
function showPrice(event) {
    // Använd value när man hämtar från input i formuläret
    let putPrice = price === null || price === void 0 ? void 0 : price.value;
    //console.log('Textfält i funktion ' + name);
    output.textContent = "Price of item: " + putPrice + " kr";
    // Submittar inte formuläret
    event.preventDefault(); //
}
function showQuantity(event) {
    let putQuantity = quantity === null || quantity === void 0 ? void 0 : quantity.value;
    output.textContent = "Quantity: " + putQuantity;
    event.preventDefault(); //
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", showPrice, showQuantity, false);
