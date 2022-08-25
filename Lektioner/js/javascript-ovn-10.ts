const form: HTMLFormElement = document.querySelector("#form");
const output: HTMLParagraphElement = document.querySelector("#output");

let movieArray = ["The Godfather", "The Dark Knight"];

movieArray.push("Free Guy"); //Steg 1
movieArray.pop(); //Steg 2
movieArray[0] = "The GodFather 2"; //Steg 3
movieArray.push("Despicable me 2"); //Steg 4
console.log(movieArray.indexOf('The GodFather 2')); //Steg5
console.log(movieArray.splice(movieArray.indexOf('Despicable me 2'), 1)); //Steg 6
movieArray.sort(); //Steg 7
console.log(movieArray); //Show movie list:

function showMovies(event) {
    event.preventDefault();

    for (let i = 0; i < movieArray.length; i++) {
        console.log(`${movieArray }`)
    }
}

form.addEventListener("submit", showMovies, false);
