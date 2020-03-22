const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let newItems = [];
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true }));

app.get("/", function (req, res) {

   /* let today = new Date();
    let currentDay = today.getDay();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName = days[today.getDay()];
    res.render("list", { typeOfDay: dayName });*/
    let options = { weekday: 'long', month: 'long', day: 'numeric' };
    let today = new Date();
    let dayName = today.toLocaleDateString("en-US", options)
    res.render("list", { typeOfDay: dayName, newItemVar: newItems });
});

app.post("/", function(req, res){

    let newItem = req.body.itemNew;
    newItems.push(newItem);
    res.redirect("/");
     

});



app.listen(3000, function () {
    console.log("Server is 3000");

});