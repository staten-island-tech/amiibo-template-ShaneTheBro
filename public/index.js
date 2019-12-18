// const path = require("path");

// //express shrinks things down in node

// const express = require("express");
// const app = express(); //this shows express is a method


// //define paths for express
// const publicDirectorypath = path.join(__dirname, "../public");
// const partialsPath = path.join(__dirname, "../templates/partials");
// const viewsPath = path.join(__dirname, "..templates/views");

// //setup handbars engine and views location
// app.set("view engine", "hbs"); //telling express/Node to use handbars for templates
// app.set("views", viewsPath); //telling express to get templates from templates/views folder
// hbs.registerPartials(partialsPath);
// app.get("/swag", async(req,res) => {
//     try{
//         res.render("swag");
//     }
//     catch (error){
// res.status(500).send("Page not found");
//     }
// });
// app.get("/thamisucks", (req,res) => {
//     res.send("thami sucks");
// });
// app.listen(3000, (req,res) => {
//     console.log('listening on port 3000');
// });
//127.0.0.1:3000

const path = require("path");
const hbs = require("hbs");
const express = require("express");
const app = express();

//define paths for express
const publicDirectoryPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../templates/partials");

const viewsPath = path.join(__dirname, "../templates/views");
//setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath); //telling express to get templates from templates/views folder
hbs.registerPartials(partialsPath);
app.get("", async (req, res) => {
try {
res.render("index",{
    title: "Our first express app"
}
} catch {
res.status(500).send();
}
});

