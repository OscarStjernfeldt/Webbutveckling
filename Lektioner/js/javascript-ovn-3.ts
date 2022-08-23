const form: HTMLElement | null = document.querySelector("#formReg");
const price: HTMLInputElement | null = document.querySelector("#price");
const quantity: HTMLInputElement | null = document.querySelector("#quantity");
const output: HTMLElement | null = document.querySelector("#output");

function showPrice(event: SubmitEvent) {
  // Använd value när man hämtar från input i formuläret
  let putPrice = price?.value;

  //console.log('Textfält i funktion ' + name);

  output!!.textContent = "Price of item: " + putPrice + " kr";

  // Submittar inte formuläret
  event.preventDefault(); //
}
function showQuantity(event: SubmitEvent) {
  let putQuantity = quantity?.value;

  output!!.textContent = "Quantity: " + putQuantity;

  event.preventDefault(); //
}

form?.addEventListener("submit", showPrice, showQuantity, false);
