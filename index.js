console.log("Hello");

const menuButton = document.querySelector(".menuButton");
menuButton.onclick = sendAlert;

function sendAlert() {
  alert("Hello World!");
}

const taskList = document.querySelector(".taskList");

// Von 28. Juli:
// Create the object placeholder
// const todoTask = { title: "Take a walk", date: "Today", isDone: false };

// Define a variable that takes the TaskListItem based in what is inside the object placeholder
// const fromtodoTask = createTaskListItem(todoTask);

// Whatever is in the fromtodoTask variable will be appended to the taskList (this is where all tasks are listed)
// taskList.append(fromtodoTask);

// 29. Juli: Arrays

const tasks = [
  { title: "Take a walk", 
   date: "Today", 
   isDone: false 
  },
  { title: "Have dinner", 
   date: "Today", 
   isDone: false 
  },
  { title: "Go running", 
   date: "Tomorrow", 
   isDone: false 
  },
  { title: "Relax", 
   date: "Tomorrow", 
   isDone: false 
  },

function createTaskListItem(task) {
  const taskListItem = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  taskListItem.className = "taskItem";

  input.className = "taskItem__checkbox";
  input.type = "checkbox";
  input.setAttribute("name", "tasks");
  input.checked = task.isDone; // durchstreichen

  span.className = "taskItem__labelText";
  span.innerText = task.title;

  taskListItem.append(input, span);

  return taskListItem;
}

// First exercise
//const taskOne = createTaskListItem("Kaffee kochen");
//const taskTwo = createTaskListItem("Javascript lernen");
