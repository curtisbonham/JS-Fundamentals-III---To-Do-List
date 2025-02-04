// finds value of input field and creates new list item
const newListItem = () =>{
let li = document.createElement("LI");
let inputValue = document.getElementById("myInput").value;
let text = document.createTextNode(inputValue);
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
li.appendChild(text);
if(inputValue === ""){
  alert("Your entry is blank! Pleae find something to do!")
} else {
  document.getElementById("myUL").appendChild(li);

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
document.getElementById("myInput").value = "";
document.getElementById("myInput").focus();
localStorage.setItem("tasks", JSON.stringify(tasks));
console.log(document.getElementById("myUL"));
}

// gives functionality to the add new button
const addBtn = document.getElementById("addBtn")
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
  }
});

const displayDate = () => {
  let date = new Date()
  date = date.toString().split(" ")
  document.querySelector("#date").innerHTML = `${date[1]} ${date[2]} ${date[3]}`
}

window.onload = () => {
  displayDate()
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




