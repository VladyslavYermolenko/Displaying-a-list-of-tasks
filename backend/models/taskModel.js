const res = require('express/lib/response');
const db = require('../database/db');

async function getAllTasks() {
    const tasks = await db.query(
        `SELECT * FROM tasksTable;`
    );
    return tasks.rows;
}

async function createTask(taskname, taskdescription, due_date) {
    const newTask = await db.query(
        `INSERT INTO tasksTable (taskname, taskdescription, due_date) VALUES ($1, $2, $3) RETURNING *;`,
        [taskname, taskdescription, due_date]
    );
    // res.json(newTask.rows[0]);
    return newTask.rows[0];
}

async function deleteTask(taskId) {
    await db.query(
        `DELETE FROM tasksTable WHERE id = $1`,
        [taskId]
    );
    return true;
}

module.exports = {
    getAllTasks,
    createTask,
    deleteTask
}