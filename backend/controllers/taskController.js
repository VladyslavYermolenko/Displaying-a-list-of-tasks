const Task = require('../models/taskModel')

class TaskController {
    getAllTasks() {
        return Task.getAllTasks();
    }

    createTask(taskname, taskdescription, due_date) {
        return Task.createTask(taskname, taskdescription, due_date);
    }

    deleteTask(taskId) {
        return Task.deleteTask(taskId);
    }

    patchTask(id, done) {
        return Task.patchTask(id, done);
    }
}

module.exports = new TaskController();