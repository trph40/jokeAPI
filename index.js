//jshint version:6

const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const JokeAPI = require('sv443-joke-api');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.post('/', function (req, res) {
    JokeAPI.getJokes().then((res) => res.json()).then((data) => {
        if (data["type"] = "single") {
            res.send(data["joke"]);
        }
        ;
        if (data["type"] = "twopart") {
           res.send(data["setup"])
           res.send(data["delivery"])
        }
        ;
    });
})


app.listen(port, function(){
    console.log("server started");
});