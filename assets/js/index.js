var submitButton = document.getElementById("submit-task");
submitButton.addEventListener("click", addToTaskItem);

function addToTaskItem() {
  alert("Your New Task is Added!");
}

var inputTask = document.getElementById("add-task");
var divButton = document.getElementById("nav-action");
var divTask = document.getElementById("list-view");
var listTask = document.getElementById("this-list");

function newItemTask(newItem, complete) {
  var itemTask = document.createElement("li");
  var valueTask = document.createTextNode(newItem);
  itemTask.appendChild(valueTask);

  if (complete) {
    itemTask.classList.add("clear-task");
  }

  listTask.appendChild(itemTask);
  itemTask.addEventListener("dblclick", completeTaskRun);
}

function addToTaskItem() {
  var textValueTask = inputTask.value();
  newItemTask(textValueTask, false);
}

function completeTaskRun() {
  if (this.classList.constains("clear-task")) {
    this.classList.remove("clear-task");
  } else {
    this.classList.add("clear-task");
  }
}
