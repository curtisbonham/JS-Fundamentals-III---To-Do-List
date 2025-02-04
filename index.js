// finds value of input field and creates new list item and adds a close button
const newListItem = () =>{
let li = document.createElement("LI");
let inputValue = document.getElementById("myInput").value;
let text = document.createTextNode(inputValue);
li.appendChild(text);
if(inputValue === ""){
  alert("Your entry is blank! Pleae find something to do!")
} else {
  document.getElementById("myUL").appendChild(li);
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

//adds a close button to a list item
let toDoList = document.getElementsByTagName("LI");
for(let i = 0; i < toDoList.length; i++){
  let span = document.createElement("span");
  let closeIcon = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(closeIcon);
  toDoList[i].appendChild(span);
};

//removes list item when the close button (X) is clicked
list.addEventListener("click", (event) => {
  if(event.target.className === "close"){
    const listItem = event.target.parentNode;
    listItem.remove()
  }
});



