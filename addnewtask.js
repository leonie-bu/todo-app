import {
  parseJSONFromLocalStorage,
  stringifyJSONToLocalStorage,
} from "/utilities/localStorage.js";

// Define what the form variable actually is
const form = document.querySelector(".addTaskForm");

form.onsubmit = function (event) {
  event.preventDefault();

  // Here we create a variable that trefers to what we type into the "Enter Task field --> chose the class from input element"
  const textInput = document.querySelector(".addTaskForm__textInput");

  const checkedDateInput = document.querySelector(
    ".addTaskForm__radio:checked"
  );

  const newTask = { title: "", date: "", isDone: false };

  newTask.title = textInput.value;
  newTask.date = checkedDateInput.value;

  const oldTask = parseJSONFromLocalStorage("tasks", []);

  const tasks = [...oldTask, newTask];

  stringifyJSONToLocalStorage("tasks", tasks);
};
