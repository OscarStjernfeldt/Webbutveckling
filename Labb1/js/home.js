function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function getJsonData() {
    fetch("./json/greeting.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            alert(data.greeting);
            console.log("more code");
        });
}
