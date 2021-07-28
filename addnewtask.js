form.onsubmit = function (event {

    event.preventDefault();

    const textInput = document.querySelector (".addTaskForm__textInput");
    const taskName = textInput.value;
    const checkedDateInput = document.querySelector (".addTaskForm__radio:checked");
    const selectedDate = checkedDateInput.value;
    console.log(selectedDate, taskName);

}



