const express = require('express');
const app = express();
const router = require('./routes/taskRoute');

function logRequest({ method, url }, _, next) {
    console.log(`[${new Date().toLocaleString()}] ${method} ${url}`);
    next();
}

app.use(express.json());
app.use(logRequest);
app.use('/tasks', router);


module.exports = app;