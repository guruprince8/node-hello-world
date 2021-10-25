const express = require('express');
const app = express();
const port = 8080;

app.post('/token',(req,res) => {
    console.log('/token');
});

app.get('/users',(req,res) => {
    console.log('/users');
    var response = {
        "users":[
            {
                "profile":{
                    "empid":"",
                    "nameprefix":"",
                    "firstname":"",
                    "middleinitial":"",
                    "lastname":"",
                    "gender":"",
                    "primaryemail":"",
                    "fathername":"",
                    "mothername":"",
                    "mothermaidenname":"",
                    "dateofbirth":"",
                    "timeofbirth":"",
                    "ageinyrs":"",
                    "weightinkgs":"",
                    "dateofjoining":"",
                    "quarterofjoining":"",
                    "halfofjoining":"",
                    "yearofjoning":"",
                    "monthofjoining":"",
                    "monthnameofjoining":"",
                    "shortmonth":"",
                    "dayofjoining":"",
                    "dowofjoining":"",
                    "ageincompany":"",
                    "salary":"",
                    "lasthike":"",
                    "phone":"",
                    "placename":"",
                    "county":"",
                    "city":"",
                    "state":"",
                    "zip":"",
                    "region":"",
                    "username":"",
                    "password":""

                }
            },
            {
                "profile":{
                    "empid":"",
                    "nameprefix":"",
                    "firstname":"",
                    "middleinitial":"",
                    "lastname":"",
                    "gender":"",
                    "primaryemail":"",
                    "fathername":"",
                    "mothername":"",
                    "mothermaidenname":"",
                    "dateofbirth":"",
                    "timeofbirth":"",
                    "ageinyrs":"",
                    "weightinkgs":"",
                    "dateofjoining":"",
                    "quarterofjoining":"",
                    "halfofjoining":"",
                    "yearofjoning":"",
                    "monthofjoining":"",
                    "monthnameofjoining":"",
                    "shortmonth":"",
                    "dayofjoining":"",
                    "dowofjoining":"",
                    "ageincompany":"",
                    "salary":"",
                    "lasthike":"",
                    "phone":"",
                    "placename":"",
                    "county":"",
                    "city":"",
                    "state":"",
                    "zip":"",
                    "region":"",
                    "username":"",
                    "password":""

                }
            },
            {
                "profile":{
                    "empid":"",
                    "nameprefix":"",
                    "firstname":"",
                    "middleinitial":"",
                    "lastname":"",
                    "gender":"",
                    "primaryemail":"",
                    "fathername":"",
                    "mothername":"",
                    "mothermaidenname":"",
                    "dateofbirth":"",
                    "timeofbirth":"",
                    "ageinyrs":"",
                    "weightinkgs":"",
                    "dateofjoining":"",
                    "quarterofjoining":"",
                    "halfofjoining":"",
                    "yearofjoning":"",
                    "monthofjoining":"",
                    "monthnameofjoining":"",
                    "shortmonth":"",
                    "dayofjoining":"",
                    "dowofjoining":"",
                    "ageincompany":"",
                    "salary":"",
                    "lasthike":"",
                    "phone":"",
                    "placename":"",
                    "county":"",
                    "city":"",
                    "state":"",
                    "zip":"",
                    "region":"",
                    "username":"",
                    "password":""

                }
            },
            {
                "profile":{
                    "empid":"",
                    "nameprefix":"",
                    "firstname":"",
                    "middleinitial":"",
                    "lastname":"",
                    "gender":"",
                    "primaryemail":"",
                    "fathername":"",
                    "mothername":"",
                    "mothermaidenname":"",
                    "dateofbirth":"",
                    "timeofbirth":"",
                    "ageinyrs":"",
                    "weightinkgs":"",
                    "dateofjoining":"",
                    "quarterofjoining":"",
                    "halfofjoining":"",
                    "yearofjoning":"",
                    "monthofjoining":"",
                    "monthnameofjoining":"",
                    "shortmonth":"",
                    "dayofjoining":"",
                    "dowofjoining":"",
                    "ageincompany":"",
                    "salary":"",
                    "lasthike":"",
                    "phone":"",
                    "placename":"",
                    "county":"",
                    "city":"",
                    "state":"",
                    "zip":"",
                    "region":"",
                    "username":"",
                    "password":""

                }
            },
            {
                "profile":{
                    "empid":"",
                    "nameprefix":"",
                    "firstname":"",
                    "middleinitial":"",
                    "lastname":"",
                    "gender":"",
                    "primaryemail":"",
                    "fathername":"",
                    "mothername":"",
                    "mothermaidenname":"",
                    "dateofbirth":"",
                    "timeofbirth":"",
                    "ageinyrs":"",
                    "weightinkgs":"",
                    "dateofjoining":"",
                    "quarterofjoining":"",
                    "halfofjoining":"",
                    "yearofjoning":"",
                    "monthofjoining":"",
                    "monthnameofjoining":"",
                    "shortmonth":"",
                    "dayofjoining":"",
                    "dowofjoining":"",
                    "ageincompany":"",
                    "salary":"",
                    "lasthike":"",
                    "phone":"",
                    "placename":"",
                    "county":"",
                    "city":"",
                    "state":"",
                    "zip":"",
                    "region":"",
                    "username":"",
                    "password":""

                }
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
