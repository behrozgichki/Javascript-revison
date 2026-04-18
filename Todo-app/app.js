const input = document.querySelector("#input");
const list = document.querySelector("#list");

let arr = [];

function renderTodo() {
  list.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    list.innerHTML += `<li>${arr[i]}
        <button onclick=" deleteTodo(${i})">Delete</button>
        <button onclick= "editTodo(${i})">Edit</button>
        </li>`;
  }
}
function addTodo() {
    arr.push(input.value);
    console.log(input.value);
    renderTodo();
    input.value = ""
}
function deleteTodo(index) {
  console.log("todo delted", index);
  arr.splice(index, 1);
  renderTodo();
  console.log(arr);
}
function editTodo(index) {
  console.log("Todo Edited", index);
  const updatedValue = prompt("Enter your updated value");
  arr.splice(index, 1, updatedValue);
  renderTodo();
}
