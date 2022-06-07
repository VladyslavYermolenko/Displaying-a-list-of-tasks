DROP TABLE tasksTable;
CREATE TABLE tasksTable (
    id              SERIAL PRIMARY KEY, 
    taskName        varchar not null,
    taskDescription varchar not null,
    done            boolean default false,
    due_date        date
);

INSERT INTO tasksTable (taskName, taskDescription, done, due_date) 
VALUES (
    'Task 1', 
    'Description', 
    false, 
    null
), 
(
    'Task 2', 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit, quis voluptates minima exercitationem iusto aliquid sapiente! Neque ut quo labore at ex facilis aliquid doloribus voluptatibus. Delectus, voluptatibus amet.', 
    true,
    '2023-06-01'
),
(
    'Task 3', 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit, quis voluptates minima exercitationem iusto aliquid sapiente! Neque ut quo labore at ex facilis aliquid doloribus voluptatibus. Delectus, voluptatibus amet.', 
    true,
    '2022-01-15'
),
(
    'Task 4',
    '',
    true,
    '2022-09-21'
),
(
    'Task Task Task Task Task Task Task Task Task 5', 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit, quis voluptates minima exercitationem iusto aliquid sapiente! Neque ut quo labore at ex facilis aliquid doloribus voluptatibus. Delectus, voluptatibus amet.', 
    false,
    '2021-11-05'
);