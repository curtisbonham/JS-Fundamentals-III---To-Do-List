const taskInput = document.getElementById("myInput");
const taskList = document.getElementById("myUL");
const addBtn = document.getElementById("addBtn");

// Retrieve tasks from localStorage or initialize an empty array
// Each task is now an object with { text, completed }
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Render tasks on the page
const renderTasks = () => {
  taskList.innerHTML = ""; // Clear existing list
  tasks.forEach((task, index) => {
    // Create list item for each task
    let li = document.createElement("LI");
    li.textContent = task.text;

    // If the task is marked as completed, add the "checked" class
    if (task.completed) {
      li.classList.add("checked");
    }

    // Create close button for the task
    let span = document.createElement("span");
    span.className = "close";
    span.appendChild(document.createTextNode("\u00D7"));
    li.appendChild(span);

    // Add click event on list item to toggle its completed state
    li.addEventListener("click", (event) => {
      // Prevent the click on the close button from toggling the check
      if (event.target.classList.contains("close")) {
        return;
      }
      // Toggle the "checked" class and update the task object
      li.classList.toggle("checked");
      tasks[index].completed = li.classList.contains("checked");
      localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    // Add click event for the close button to delete the task
    span.addEventListener("click", () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks(); // Re-render list after deletion
    });

    // Append the list item to the task list
    taskList.appendChild(li);
  });
};

// Function to add a new task
const newListItem = () => {
  let inputValue = taskInput.value.trim();
  if (inputValue === "") {
    alert("Your entry is blank! Please find something to do!");
    return;
  }

  // Create a new task object with completed set to false
  let newTask = {
    text: inputValue,
    completed: false
  };

  // Add new task to tasks array and update localStorage
  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();

  // Clear and refocus input field
  taskInput.value = "";
  taskInput.focus();
};

// Attach event listener to add button
addBtn.addEventListener("click", newListItem);

// Display the current date
const displayDate = () => {
  let date = new Date().toDateString();
  document.querySelector("#date").innerHTML = date;
};

// When the page loads, display the date and render tasks from localStorage
window.onload = () => {
  displayDate();
  renderTasks();
};