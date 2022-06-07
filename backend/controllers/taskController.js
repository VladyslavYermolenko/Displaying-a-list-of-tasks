const Task = require('../models/taskModel')

class TaskController {
    getAllTasks() {
        return Task.getAllTasks();
    }
    
    getOneTask(taskId) {
        return Task.getOneTask(taskId);
    }

    createTask(taskName, done) {
        return Task.createTask(taskName, done);
    }

    deleteTask(taskId) {
        return Task.deleteTask(taskId);
    }

    putTask(id, taskName, done) {
        return Task.putTask(id, taskName, done);
    }

    patchTask(id, taskName, done) {
        return Task.patchTask(id, taskName, done);
    }
}

module.exports = new TaskController();