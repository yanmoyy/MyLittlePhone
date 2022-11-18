const toDoForm = document.getElementById("todo-list__form");
const toDoContainer = document.querySelector(".todo-list__container");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const toDoClear = document.getElementById("todo-list__clear");
const TODOS_KEY = "todos";
const MAX_Todo = 20;
const fadeOutSpeed = 500;
let toDos = [];

function removeFadeOut(el, speed) {
  var seconds = speed/1000;
  el.style.transition = "opacity "+seconds+"s ease";
  el.style.opacity = 0;
  setTimeout(function() {
      el.remove();
  }, speed);
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteToDo(event) {
  const li = event.target.parentElement;
  removeFadeOut(li, fadeOutSpeed);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}
function clearToDo(event) {
  toDoList.querySelectorAll("li").forEach(li => removeFadeOut(li,fadeOutSpeed));
  toDos = [];
  saveToDos();
}
function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  if (toDos.length >= MAX_Todo){
    alert('Too Many ToDo!','Remove ToDo or clear the list\n(MAX = '+MAX_Todo+')');
    return;
  }
  const newToDoObj = {
    text : newToDo,
    id : Date.now()
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  toDoContainer.scrollTop = toDoContainer.scrollHeight;
  saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  toDos.forEach(paintToDo);
}

toDoClear.addEventListener("click",clearToDo)