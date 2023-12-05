const express = require('express');
const app = express();


app.get("/", function(req, res) {
    res.send("Vivek");
});
app.get("/home", function(req, res) {
    res.send("Welcome to home page");
});
app.get("/about", function(req, res) {
    res.send("welcome to about page");
});
app.get("/node", function(req, res) {
    res.send("welcome to my node js project");
});

app.listen(4000, function(){
    console.log("Server started");
});


