const form = document.querySelector("#form");
const price = document.querySelector("#price");
const quantity = document.querySelector("#quantity");
const output = document.querySelector("#output");

function showPrice(event) {
    event.preventDefault();

    // @ts-ignore
    let orderPrice = price.value * quantity.value;
    if (orderPrice >= 150) {
        orderPrice = orderPrice *= 0.9;
    }
    output.textContent = 'Orders final price: ' + orderPrice;
}

form.addEventListener("submit", showPrice, false);
