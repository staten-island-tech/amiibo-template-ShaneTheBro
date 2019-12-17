const path = require("path");

//express shrinks things down in node

const express = require("express");
const app = express(); //this shows express is a method

app.get("", (req,res) => {
    res.send("Thami likes bagels and butter and he smells");
});
app.get("thamisucks", (req,res) => {
    res.send("thami sucks");
});

app.listen(3000, (req,res) => {
    console.log('listening on port 3000');
    
});

//127.0.0.1:3000



