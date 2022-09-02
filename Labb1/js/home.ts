function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function getJsonData() {
    fetch("./json/greeting.json")
        .then((response) => response.json())
        .then((data) => {
            alert(data.greeting)
            console.log("more code")
        });
}
