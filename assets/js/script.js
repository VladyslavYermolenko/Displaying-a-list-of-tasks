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
    due_date: new Date("2022-06-01"),
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

function addNewTask() {
  const tasks_list = document.getElementById("tasks-list");
  const textBox_name = document.getElementById('pop-up_name');
  const textBox_description = document.getElementById('pop-up_description');
  const date_dueDate = document.getElementById('pop-up_due-date');
  
  if (date_dueDate.value) {
    tasks_list.innerHTML += `<li>
  <span>
      <input type="checkbox" />
      <h3>${textBox_name.value}</h3>
  </span>
  <p class="due-date">Due Date: ${new Date(date_dueDate.value).toLocaleDateString()}</p>
  <p class="description">${textBox_description.value}</p>
</li>
`;
  } else {
    tasks_list.innerHTML += `<li>
  <span>
      <input type="checkbox" />
      <h3>${textBox_name.value}</h3>
  </span>
  <p class="description">${textBox_description.value}</p>
</li>
`;
  }
  tasks.push({
    id: primaryKey,
    name: textBox_name.value,
    description: textBox_description.value,
    done: false,
    due_date: date_dueDate.value
  });
}

const button_addNewTask = document.getElementById('pop-up_add-new-task');
button_addNewTask.addEventListener('click', function clickNewTaskButton(event) {
  event.preventDefault();
  const textBox_name = document.getElementById('pop-up_name');
  
  if (textBox_name.value) {
    addNewTask();
  }
});

function addDefaultTasks() {
  const tasks_list = document.getElementById("tasks-list");
  function addTaskInContainer(object) {
    const { id, name, description, done, due_date } = object;
    if (due_date) {
      tasks_list.innerHTML += `<li>
    <span>
        <input type="checkbox" ${checkedOrNot(done)} />
        <h3>${name}</h3>
    </span>
    <p class="due-date">Due Date: ${new Date(due_date).toLocaleDateString()}</p>
    <p class="description">${description}</p>
  </li>
  `;
    } else {
      tasks_list.innerHTML += `<li>
    <span>
        <input type="checkbox" ${checkedOrNot(done)} />
        <h3>${name}</h3>
    </span>
    <p class="description">${description}</p>
  </li>
  `;
    }
  }

  tasks.forEach(addTaskInContainer);
}

addDefaultTasks();
