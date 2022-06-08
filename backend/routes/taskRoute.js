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
            res.status(204).send();
        }
    }
    catch (error) {
        res.status(404).send('Not found!');
        console.log(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const { taskname, taskdescription, due_date } = req.body;
        if (taskname) {
            const newTask = await controller.createTask(taskname, taskdescription, due_date);
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

module.exports = router;