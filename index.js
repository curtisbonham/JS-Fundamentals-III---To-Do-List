// let myListItems = document.getElementsByTagName('listItem');

// for (let i = 0; i < myListItems.length; i++){
//   let span = document.createElement("SPAN");
//   let txt = document.createElement("\u00D7");
//   span.className = 'close';
//   span.appendChild(txt);
//   myListItems[i].appendChild(span);
// };

// let list = document.querySelector("ul");
// list.addEventListener("click", function(e){
//   if(e.target.class === "listItem"){
//     e.target.classList.toggle("checked")
//   }
// }, false);

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

let addNew = addBtn.addEventListener("click", () =>{
  
})
