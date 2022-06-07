const express = require('express');
const router = express.Router();
const controller = require('../controllers/taskController');

router.get('/', async (_, res) => {
    try {
        const tasks = await controller.getAllTasks();
        if (tasks) {
            res.status(200).json(tasks);
        }
        else {
            res.status(204).send('At the moment there are no tasks...');
        }
    }
    catch (error) {
        res.status(404).send('Not found!');
        console.log(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const taskId = req.params['id'];
        if (taskId) {
            const task = await controller.getOneTask(taskId);
            if (task) {
                res.status(200).json(task);
            }
            else {
                res.status(404).send('Task not found!');
            }
        }
        else {
            res.status(404).send('Incorrect ID task input!');
        }
    }
    catch (error) {
        res.status(404).send('Not found!');
        console.log(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const { taskName, done } = req.body;
        if (taskName) {
            const newTask = await controller.createTask(taskName, done);
            if (newTask) {
                res.status(201).json(newTask);
            }
            else {
                res.status(404).send('Failed to send request.');
            }
        }
        else {
            res.status(404).send('The body is incorrect.');
        }
    }
    catch (error) {
        res.status(404).send('Not found!');
        console.log(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const taskId = req.params['id'];
        const isDeleteTask = await controller.deleteTask(taskId);
        if (isDeleteTask) {
            res.status(204).send();
        }
        else {
            res.status(404).send('Failed to remove item from database.');
        }
    }
    catch (error) {
        res.status(404).send('Not found!');
        console.log(error);
    }
});

router.put('/:id', async (req, res) => {
    const taskId = req.params['id'];
    const {taskName, done} = req.body;
    const newTask = await controller.putTask(taskId, taskName, done);
    if (newTask) {
        res.status(200).json(newTask);
    }
    else {
        res.status(404).send('Failed to change item from database.');
    }
});

router.patch('/:id', async (req, res) => {
    const taskId = req.params['id'];
    const {taskName, done} = req.body;
    const newTask = await controller.patchTask(taskId, taskName, done);
    if (newTask) {
        res.status(200).json(newTask);
    }
    else {
        res.status(404).send('Failed to change item from database.');
    }
});

module.exports = router;