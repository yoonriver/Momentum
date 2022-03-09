const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const toDos = [];

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);
    saveToDos();
    paintTodo(newToDo);
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function deleteToDo(event) {   
    const li = event.target.parentElement;
    li.remove();
}

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", handleToDoSubmit);
