var form = document.querySelector("#form");
var price = document.querySelector("#price");
var quantity = document.querySelector("#quantity");
var output = document.querySelector("#output");
function showPrice(event) {
    event.preventDefault();
    // @ts-ignore
    var orderPrice = price.value * quantity.value;
    if (orderPrice >= 150) {
        orderPrice = orderPrice *= 0.9;
    }
    output.textContent = 'Orders final price: ' + orderPrice;
}
form.addEventListener("submit", showPrice, false);
