const form: HTMLFormElement = document.querySelector("#form");
const password: HTMLInputElement = document.querySelector("#password");
const confPassword = document.querySelector("#confPassword")

if (password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,15}$/) && password === confPassword) {
    function strictPassword(event) {
        event.preventDefault();
        alert("Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character, and must be between 8 and 15 characters long.");
        password.focus();
        return false;
    }

    form.addEventListener("submit", strictPassword)
}