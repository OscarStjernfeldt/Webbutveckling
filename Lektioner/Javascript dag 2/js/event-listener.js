var elUsername = document.querySelector('#username'); // Get username input
var elPassword = document.querySelector("#password");
function checkUsername() {
    var elMsg = document.querySelector('#feedback'); // Get feedback element
    elMsg.textContent = elUsername.value.length < 5 ? 'Username must be 5 characters or more, ' : ""; // Set msg
    elMsg.textContent += elPassword.value.length < 5 ? 'Password must be 5 characters or more' : ""; // Set msg
}
