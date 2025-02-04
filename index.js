// finds value of input field and creates new list item
const newListItem = () =>{
let li = document.createElement("li");
let inputValue = document.getElementById("myInput").value;
let text = document.createTextNode(inputValue);
li.appendChild(text);
if(inputValue === ""){
  alert("Your entry is blank! Pleae find something to do!")
} else {
  document.getElementById("myUL").appendChild(li);
}
document.getElementById("myInput").value = "";
}

// gives functionality to the add new button
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", newListItem);

//allows you to cross off a to-do list item when completed or uncheck
//if not actually completed
const list = document.querySelector("ul");
list.addEventListener("click", (event) => {
  if(event.target.tagName === "LI"){
    event.target.classList.toggle("checked");
  }
}, false);
