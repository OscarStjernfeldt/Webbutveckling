var elTodosOutput = document.querySelector('#todoOutput');
var elFormNew = document.querySelector('#formNewTodo');
var elNewTodo = document.querySelector('#txtNewTodo');
var elNewOutput = document.querySelector('#formNewOutput');
var elFormUpdate = document.querySelector('#formUpdateTodo');
var elCurrentTodo = document.querySelector('#txtCurrentTodo');
var elUpdateTodo = document.querySelector('#txtUpdateTodo');
var elUpdateOutput = document.querySelector('#formUpdateOutput');
var elBtnShowTodos = document.querySelector('#btnShowTodos');
var elBtnShowTodosSort = document.querySelector('#btnShowTodosSort');
var elBtnShowTodosRnd = document.querySelector('#btnShowTodosRnd');
var elRandomOutput = document.querySelector('#randomOutput');
var todos = [];
function newTodo(event) {
    // Använd value när man hämtar från input i formuläret
    var newTodo = elNewTodo.value;
    todos.push(newTodo);
    elNewOutput.textContent = 'Du har lagt till: ' + newTodo;
    // Submittar inte formuläret
    event.preventDefault(); //
}
function updateTodo(event) {
    // Använd value när man hämtar från input i formuläret
    var currentTodo = elCurrentTodo.value;
    var updateTodo = elUpdateTodo.value;
    var pos = todos.indexOf(currentTodo);
    todos[pos] = updateTodo;
    elUpdateOutput.textContent = 'Du har uppdaterat ' + currentTodo + ' till ' + updateTodo;
    // Submittar inte formuläret
    event.preventDefault(); //
}
function showTodos() {
    var output = '';
    elNewOutput.textContent = '';
    elUpdateOutput.textContent = '';
    todos.forEach(function (item, index, array) {
        output = output + ' ' + item;
    });
    elTodosOutput.textContent = output;
}
function showTodosSort() {
    todos.sort();
    showTodos();
}
function showTodosRandom() {
    var todoLength = todos.length;
    var randomNum = Math.floor((Math.random() * todoLength));
    elRandomOutput.textContent = todos[randomNum];
}
elFormNew.addEventListener('submit', newTodo, false);
elFormUpdate.addEventListener('submit', updateTodo, false);
elBtnShowTodos.addEventListener('click', showTodos, false);
elBtnShowTodosSort.addEventListener('click', showTodosSort, false);
elBtnShowTodosRnd.addEventListener('click', showTodosRandom, false);
