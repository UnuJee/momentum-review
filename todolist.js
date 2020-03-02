const toDoContainer = document.querySelector(".js-todolist-container");
const toDoLabel = toDoContainer.querySelector(".js-todolist-label");
const toDoInput = toDoContainer.querySelector(".js-todolist-input");
const toDoUl = toDoContainer.querySelector(".js-todo-ul");
const toDoLs = "to-do-local-storage";
const toDoArray = [];

function saveToDo() {
  localStorage.setItem(toDoLs, JSON.stringify(toDoArray));
}

function handleSubmit(event) {
  event.preventDefault();
  const toDoInputValue = toDoInput.value;
  updateToDo(toDoInputValue);
  toDoInput.value = "";
}

// function delToDo() {

// }

function updateToDo(todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("botton");
  const newId = toDoArray.length + 1;
  span.innerText = todo;
  delBtn.innerText = "❌";
  // delBtn.addEventListener("click", delToDo);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoUl.appendChild(li);
  const toDoObj = {
    text: todo,
    id: newId
  };
  toDoArray.push(toDoObj);
  saveToDo();
}

function loadToDo() {
  const getToDoLs = localStorage.getItem(toDoLs);
  if (getToDoLs !== null) {
    const parsedToDo = JSON.parse(getToDoLs);
    parsedToDo.forEach(function(todo) {
      updateToDo(todo.text);
    });
  }
}

function init() {
  loadToDo();
  toDoContainer.addEventListener("submit", handleSubmit);
}
init();

// camelcase uppercase 언제?
// toDoLs 는 빨간색 X TODOS_LS는 빨간색
// loadToDo() 하지 않았는데 실행되는 것.
