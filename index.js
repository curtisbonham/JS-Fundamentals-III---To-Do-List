const taskInput = document.getElementById("myInput");
const taskList = document.getElementById("myUL");
const addBtn = document.getElementById("addBtn");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// finds value of input field and creates new list item
const newListItem = () =>{
let li = document.createElement("LI");
let inputValue = taskInput.value;
let text = document.createTextNode(inputValue);
li.appendChild(text);
if(inputValue === ""){
  alert("Your entry is blank! Pleae find something to do!");
  return;
} else {
  taskList.appendChild(li);
  tasks.push(inputValue);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();

  //creates a close button when a new item is added with add button
  let toDoList = document.getElementsByTagName("LI");

  for(let i = 0; i < toDoList.length; i++){
  let span = document.createElement("span");
  let closeIcon = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(closeIcon);
  toDoList[i].appendChild(span);
};
}
//clears the input field after submitting new task
taskInput.value = "";

//puts focus back on input field after submitting new task
taskInput.focus();
}

// gives functionality to the add new button
addBtn.addEventListener("click", newListItem);

//allows you to cross off a to-do list item when completed or uncheck
//if not actually completed
const list = document.querySelector("ul");
list.addEventListener("click", (event) => {
  if(event.target.tagName === "LI"){
    event.target.classList.toggle("checked");
  }
}, false);

//removes list item when the close button (X) is clicked
list.addEventListener("click", (event) => {
  if(event.target.className === "close"){
    const listItem = event.target.parentNode;
    listItem.remove()
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  }
});

const addTaskToDOM = (taskText, index) => {
  let li = document.createElement("LI");
  li.textContent = taskText;
  let span = document.createElement("span");
  let closeIcon = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(closeIcon);
  li.appendChild(span);
  taskList.appendChild(li);
  span.addEventListener("click", () => {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  });
//   li.addEventListener("click", () => {
//     li.classList.toggle("checked");
//   });
//   const list = document.querySelector("ul");
//  list.addEventListener("click", (event) => {
//   if(event.target.tagName === "LI"){
//     event.target.classList.toggle("checked");
//   }
// }, false);
};

const displayTasks = () => {
  taskList.innerHTML = "";
  tasks.forEach((taskText, index) => {
    addTaskToDOM(taskText, index);
  });

}

const displayDate = () => {
  let date = new Date()
  date = date.toString().split(" ")
  document.querySelector("#date").innerHTML = `${date[1]} ${date[2]} ${date[3]}`
}

window.onload = () => {
  displayDate()
  displayTasks()
}



// const loadTasks = () => {
//   let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//   tasks.forEach(task => {
//     let li = document.createElement('li');
//     li.textContent = task;
//     taskList.appendChild(li);
//   });
// }

// window.addEventListener('load', loadTasks);




