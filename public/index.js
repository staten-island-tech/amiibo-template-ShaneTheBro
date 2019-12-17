const path = require("path");

//express shrinks things down in node

const express = require("express");
const app = express(); //this shows express is a method


//define paths for express
const publicDirectorypath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "..templates/views");

//setup handbars engine and views location
app.set("views engine", "hbs"); //telling express/Node to use handbars for templates
app.set("views", viewsPath); //telling express to get templates from templates/views folder
app.get("", async(req,res) => {
    try{
        res.render("index");
    }
    catch (error){
res.status(500).send("Page not found");
    }
    res.send("Thami likes bagels and butter and he smells");
});
app.get("/thamisucks", (req,res) => {
    res.send("thami sucks");
});
app.listen(3000, (req,res) => {
    console.log('listening on port 3000');
});
//127.0.0.1:3000



