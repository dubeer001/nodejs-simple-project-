const {  Error } = require('console');
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
    app.get('/about', (req, res) => {
        res.end('<h1>THIS IS /about url  </h1>  <P>  HELLO WORLD WEB <P/>')
    })

    app.get('/hello', (req, res) => {
        res.end('<h1>THIS IS /hello url  </h1>  <P>  HELLO WORLD WEB <P/>')
    })
    


});

app.listen(port, () => {
    console.log(`app is listening on port: http://localhost:${port}`);
});
