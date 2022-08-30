const elTodosOutput = document.querySelector('#todoOutput');
const elFormNew = document.querySelector('#formNewTodo');
const elNewTodo: HTMLButtonElement = document.querySelector('#txtNewTodo');
const elNewOutput = document.querySelector('#formNewOutput');
const elFormUpdate = document.querySelector('#formUpdateTodo');
const elCurrentTodo: HTMLInputElement = document.querySelector('#txtCurrentTodo');
const elUpdateTodo: HTMLInputElement = document.querySelector('#txtUpdateTodo');
const elUpdateOutput = document.querySelector('#formUpdateOutput');
const elBtnShowTodos = document.querySelector('#btnShowTodos');
const elBtnShowTodosSort = document.querySelector('#btnShowTodosSort');
const elBtnShowTodosRnd = document.querySelector('#btnShowTodosRnd');
const elRandomOutput = document.querySelector('#randomOutput');

let todos = [];

function newTodo(event) {
    // Använd value när man hämtar från input i formuläret
    let newTodo = elNewTodo.value;

    todos.push(newTodo);

    elNewOutput.textContent = 'Du har lagt till: ' + newTodo;

    // Submittar inte formuläret
    event.preventDefault(); //
}

function updateTodo(event) {
    // Använd value när man hämtar från input i formuläret
    let currentTodo = elCurrentTodo.value;
    let updateTodo = elUpdateTodo.value;

    let pos = todos.indexOf(currentTodo);
    todos[pos] = updateTodo;

    elUpdateOutput.textContent = 'Du har uppdaterat ' + currentTodo + ' till ' + updateTodo;

    // Submittar inte formuläret
    event.preventDefault(); //
}

function showTodos() {
    let output = '';

    elNewOutput.textContent = '';
    elUpdateOutput.textContent = '';

    todos.forEach(function (item, index, array) {
        output = output + ' ' + item;
    })
    elTodosOutput.textContent = output;
}

function showTodosSort() {
    todos.sort();

    showTodos();
}

function showTodosRandom() {
    let todoLength = todos.length;
    let randomNum = Math.floor((Math.random() * todoLength));
    elRandomOutput.textContent = todos[randomNum];
}

elFormNew.addEventListener('submit', newTodo, false);
elFormUpdate.addEventListener('submit', updateTodo, false);
elBtnShowTodos.addEventListener('click', showTodos, false);
elBtnShowTodosSort.addEventListener('click', showTodosSort, false);
elBtnShowTodosRnd.addEventListener('click', showTodosRandom, false);