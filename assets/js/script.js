const tasks = [
  {
    id: 1,
    name: "Task 1",
    description: "Description",
    done: false,
    due_date: "",
  },
  {
    id: 2,
    name: "Task 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit, quis voluptates minima exercitationem iusto aliquid sapiente! Neque ut quo labore at ex facilis aliquid doloribus voluptatibus. Delectus, voluptatibus amet.",
    done: true,
    due_date: new Date("2023-06-01"),
  },
  {
    id: 3,
    name: "Task 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit, quis voluptates minima exercitationem iusto aliquid sapiente! Neque ut quo labore at ex facilis aliquid doloribus voluptatibus. Delectus, voluptatibus amet.",
    done: false,
    due_date: new Date("2022-01-15"),
  },
  {
    id: 4,
    name: "Task 4",
    description: "",
    done: true,
    due_date: new Date("2022-09-21"),
  },
  {
    id: 5,
    name: "Task Task Task Task Task Task Task Task Task 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit, quis voluptates minima exercitationem iusto aliquid sapiente! Neque ut quo labore at ex facilis aliquid doloribus voluptatibus. Delectus, voluptatibus amet.",
    done: false,
    due_date: new Date("2021-11-05"),
  },
];

const increment = (init = tasks.reduce((prev, cur) => prev['id'] > cur['id'] ? prev : cur['id'])) => () => ++init;
const primaryKey = increment();

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

function addToHTML(tasks_list, id, name, description, done, dueDate) {
  let temp = "";
  temp += `<li`;
  if (done) temp += ` class="done"`;
  temp +=`>
  <button class="button_deleteTask" onclick="deleteTask(this)">
    &#10006</button>
  <span>
  <input type="checkbox" id="${id}" onclick="checkboxIsChecked(this)"  class="checkbox_tasks-list" ${checkedOrNot(done)} /><h3 `;
  if (done) temp += `class="isDone" `;
  temp += `id="task-${id}">${name}</h3></span>`;
  if (dueDate) {
    temp += `<p class="due-date`;
    if (new Date(dueDate).getTime() <= new Date().getTime()) temp += ` overdueDate`;
    temp += `">Due Date: ${new Date(dueDate).toLocaleDateString()}</p>`;
  }
  if (description) {
    temp += `<p class="description">${description}</p>`;
  }
  temp += `</li>`;
  tasks_list.innerHTML += temp;
}

function addNewTask() {
  const tasks_list = document.getElementById("tasks-list");
  const id = primaryKey();
  const textBox_name = document.getElementById("pop-up_name");
  const textBox_description = document.getElementById("pop-up_description");
  const date_dueDate = document.getElementById("pop-up_due-date");

  addToHTML(
    tasks_list,
    id,
    textBox_name.value,
    textBox_description.value,
    false,
    date_dueDate.value
  );

  textBox_name.value = "";
  textBox_description.value = "";
  date_dueDate.value = "";
}

const button_addNewTask = document.getElementById("pop-up_add-new-task");
button_addNewTask.addEventListener("click", function clickNewTaskButton(event) {
  event.preventDefault();
  const textBox_name = document.getElementById("pop-up_name");

  if (textBox_name.value) {
    const popUp = document.getElementById("pop-up");
    popUp.style.display = "none";
    addNewTask();
  }
});

function addDefaultTasks() {
  const tasks_list = document.getElementById("tasks-list");
  function addTaskInContainer(object) {
    const { id, name, description, done, due_date } = object;

    addToHTML(tasks_list, id, name, description, done, due_date);
  }
  tasks.forEach(addTaskInContainer);
}

function deleteTask(element) {
  element.closest("li").remove();
}

addDefaultTasks();
