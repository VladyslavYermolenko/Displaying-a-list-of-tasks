const res = require('express/lib/response');
const db = require('../database/db');

async function getAllTasks() {
    const tasks = await db.query(
        `SELECT * FROM tasksTable;`
    );
    return tasks.rows;
}

async function getOneTask(taskId) {
    const tasks = await db.query(
        `SELECT * FROM tasksTable WHERE id=$1;`,
        [taskId]
    );
    return tasks.rows[0];
}

async function createTask(taskName, done) {
    const newTask = await db.query(
        `INSERT INTO tasksTable (taskName, done) VALUES ($1, $2) RETURNING *;`,
        [taskName, done || false]
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

async function putTask(id, taskName, done) {
    const taskIsExists = await getOneTask(id);
    if (taskIsExists) {
        await db.query(
            `UPDATE tasksTable SET taskName=$2, done=$3 WHERE id=$1 RETURNING *;`,
            [id, taskName || null, done || false]
        );
        const newTask = await getOneTask(id);
        return newTask;
    }
    else {
        return undefined;
    }
}

async function patchTask(id, taskName, done) {
    const curTask = await getOneTask(id);
    if (curTask) {
        await db.query(
            `UPDATE tasksTable SET taskName=$2, done=$3 WHERE id=$1 RETURNING *;`,
            [id, taskName || curTask['taskName'], done ?? curTask['done']]
        );
        const newTask = await getOneTask(id);
        return newTask;
    }
    else {
        return undefined;
    }
}

module.exports = {
    getAllTasks,
    getOneTask,
    createTask,
    deleteTask,
    putTask,
    patchTask
}