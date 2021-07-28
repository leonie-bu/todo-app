// Define what the form variable actually is
const form = document.querySelector(".addTaskForm");

form.onsubmit = function (event) {
  event.preventDefault();

  // Here we create a variable that trefers to what we type into the "Enter Task field --> chose the class from input element"
  const textInput = document.querySelector(".addTaskForm__textInput");
  //
  const taskName = textInput.value;

  const checkedDateInput = document.querySelector(
    ".addTaskForm__radio:checked"
  );
  const selectedDate = checkedDateInput.value;
  console.log(selectedDate, taskName);
};
