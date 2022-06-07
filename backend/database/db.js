const { Pool } = require('pg');

const pool = new Pool({
    host: '127.0.0.1',
    user: 'todolist_app',
    password: 'secret',
    database: 'tasklists',
    
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
});

pool.connect();

module.exports = pool;