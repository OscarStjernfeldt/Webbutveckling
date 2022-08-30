const elFormPizza = document.querySelector('#formPizza');
const elPizzaChoice: HTMLSelectElement = document.querySelector('#pizzaChoice');
const elAntal: HTMLFormElement = document.querySelector('#txtAntal');
let elOutput = document.querySelector('#output');

function pizzaOrder(event) {
    let inAntal = elAntal.value;
    let getPizzaChoice = elPizzaChoice.options[elPizzaChoice.selectedIndex].value;

    if (inAntal.length < 1) {
        elOutput.textContent = 'Du måste beställa minst 1 pizza.';
    } else {
        elOutput.textContent = pizzaFinishedOrder(getPizzaChoice, inAntal);
    }

    // Submittar inte formuläret
    event.preventDefault(); //
}

function pizzaFinishedOrder(pizzaChoice, antal) {
    let pizzaPris;
    let totalPris = 0;
    let output = '';

    if (pizzaChoice === 'Margherita') {
        pizzaPris = 70;
    } else if (pizzaChoice === "Funghi" || pizzaChoice === "Vesuvio") {
        pizzaPris = 75;
    } else if (pizzaChoice === "Hawaii" || pizzaChoice === "Capricciosa") {
        pizzaPris = 80;
    } else if (pizzaChoice === "Vegetariana") {
        pizzaPris = 90;
    } else if (pizzaChoice === "Pepperoni") {
        pizzaPris = 95;
    } else if (pizzaChoice === "Bombay") {
        pizzaPris = 100;
    } else if (pizzaChoice === "Kebabpizza") {
        pizzaPris = 110;
    } else {
        pizzaPris = 0; // Något har gått fel
    }

    totalPris = antal * pizzaPris;

    output = 'Du har beställt ' + antal + ' ' + pizzaChoice + '. Total pris: ' + totalPris + ' kr.';

    if (totalPris > 150) {
        let rabattPris = totalPris * 0.9;
        output = output + ' Du får 10 % rabatt. Du betalar: ' + rabattPris + ' kr.';
    }

    return output;
}

elFormPizza.addEventListener('submit', pizzaOrder, false);