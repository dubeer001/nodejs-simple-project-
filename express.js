const {  error } = require('console');
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('internal server error');
        } else {
            res.send(data);
        }
    });
});

app.get('/about', (req, res) => {
    fs.readFile('about.html', (err, data) => {
        console.log(req)
        if (err) {
            console.error('Error reading about.html:', err);
            res.status(500).send('Internal Server Error on about ');
        } else {
            res.send(data);
        }
    });
});



app.listen(port, () => {
    console.log(`app is listening on port: http://localhost:${port}`);
});
