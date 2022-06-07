const app = require('./backend/app');

const hostname = 'localhost';
const port = 3000;
app.listen(port, hostname, (error) => {
    error ? console.log(error) : console.log(`Server listens http://${hostname}:${port}`);
});