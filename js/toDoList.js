let taskInput = document.querySelector("#taskInput");
let taskList = document.querySelector("#taskList");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
  let taskText = taskInput.value.trim();
  if (taskText === "") return;
  let task = { text: taskText };
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskInput.value = "";
  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

function editTask(index) {
  let newTaskText = prompt("UPDATE YOUR TASK :", tasks[index].text);
  if (newTaskText !== null) {
    tasks[index].text = newTaskText;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  }
}

function displayTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `<span>${task.text}</span><hr><div>
        <button class = "edtBtn" onclick = "editTask(${index})"><i class="fa fa-pen-to-square"></i></button>
        <button class = "dltBtn" onclick = "deleteTask(${index})"><i class="fa fa-trash"></i></button></div>`;
    taskList.appendChild(li);
  });
}
displayTasks();
