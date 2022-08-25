const elUsername: HTMLInputElement = document.querySelector('#username');  // Get username input
const elPassword: HTMLInputElement = document.querySelector("#password");

function checkUsername() {                             // Declare function
    let elMsg = document.querySelector('#feedback');     // Get feedback element
    elMsg.textContent = elUsername.value.length < 5 ? 'Username must be 5 characters or more, ' : ""; // Set msg
    elMsg.textContent += elPassword.value.length < 5 ? 'Password must be 5 characters or more' : ""; // Set msg
}
