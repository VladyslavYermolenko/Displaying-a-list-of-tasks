
const button_addNewTask = document.getElementById("pop-up_add-new-task");
const url = 'http://localhost:3000';

const res = fetch(url + '/tasks')
  .then(response => response.json())
  .then(addDefaultTasks)
  .catch(alert);

function checkedOrNot(isDone) {
  if (isDone) {
    return "checked";
  }
  return "";
}

function checkboxAllTasks(element) {
  document
    .getElementById(`tasks-list`)
    .classList.toggle("hide-completed-tasks", !element.checked);
}

function checkboxIsChecked(element) {
  const task = document.getElementById(`task-${element.id}`);
  task.classList.toggle("isDone", element.checked);
  task.closest("li").classList.toggle("done", element.checked);
}

function addToHTML(object) {
  const tasks_list = document.getElementById("tasks-list");
  const {id, taskname, taskdescription, done, due_date} = object;
  let temp = "";
  temp += `<li`;
  if (done) temp += ` class="done"`;
  temp +=`>
  <button class="button_deleteTask" onclick="deleteTask(this)">
    &#10006</button>
  <span>
  <input type="checkbox" id="${id}" onclick="checkboxIsChecked(this)"  class="checkbox_tasks-list" ${checkedOrNot(done)} /><h3 `;
  if (done) temp += `class="isDone" `;
  temp += `id="task-${id}">${taskname}</h3></span>`;
  if (due_date) {
    temp += `<p class="due-date`;
    if (new Date(due_date).getTime() <= new Date().getTime()) temp += ` overdueDate`;
    temp += `">Due Date: ${new Date(due_date).toLocaleDateString()}</p>`;
  }
  if (taskdescription) {
    temp += `<p class="description">${taskdescription}</p>`;
  }
  temp += `</li>`;
  tasks_list.innerHTML += temp;
}

async function addNewTask() {
  // debugger;
  const taskname = document.getElementById("pop-up_name");
  const taskdescription = document.getElementById("pop-up_description");
  const due_date = document.getElementById("pop-up_due-date") ;

  const object = {
    taskname: taskname.value,
    taskdescription: taskdescription.value,
    due_date: (due_date.value || null)
  };

  const response = await fetch(url + "/tasks", {
    method: "POST",
    body: JSON.stringify(object),
    headers: { "Content-Type": "application/json" },
  });

  if (response) {
    const json = await response.json();
    addToHTML(json);
  }
  else {
    alert('ERROR! Task not add to database.');
  }

  taskname.value = "";
  taskdescription.value = "";
  due_date.value = "";
}

button_addNewTask.addEventListener("click", function clickNewTaskButton(event) {
  event.preventDefault();
  const textBox_name = document.getElementById("pop-up_name");

  if (textBox_name.value) {
    const popUp = document.getElementById("pop-up");
    popUp.style.display = "none";
    addNewTask();
  }
});

function addDefaultTasks(todo) {
  todo.forEach(addToHTML);
}

function deleteTask(element) {
  element.closest("li").remove();
}
