const express = require('express');
const app = express();
const port = 8080;

app.get('/users',(req,res) => {
    console.log('/users');
    var response = {
        "users":[
            {
                "name":"Adam"
            },
            {
                "name":"Smith"
            }
        ]
    };
    res.statusCode = 200;
    res.setHeader("Content-Type","application/json");
    res.send(JSON.stringify(response));
});

app.get('/users/:user',(req,res) => {
    console.log('/users/:user');
    var response = {
        "users":[
            {
                "name":"Adam"
            },
            {
                "name":"Smith"
            }
        ]
    };
    res.statusCode = 200;
    res.setHeader("Content-Type","application/json");
    res.send(JSON.stringify(response));
});

app.get('/',(req,res) => {
    console.log('/');
    res.send('Hello World');
});

app.listen(port,"0.0.0.0",() => {
    console.log(`Example app listening at http://localhost:${port}`);
});
