const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");

const newItems = [];
const workItems = [];


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {

    const dayName = date.getDate();

    
    res.render("list", { title: dayName, newItemVar: newItems });
});

app.post("/", function(req, res){
    
    
    const newItem = req.body.itemNew;

    if (req.body.list === "Work"){
        workItems.push(newItem);
        res.redirect("/work");

    }else {
        newItems.push(newItem);
        res.redirect("/");
    }

});

app.get("/work", function(req, res){
    res.render("list", { title: "Work", newItemVar: workItems });

});

app.post("/work", function(req, res){
    const newItem = req.body.itemNew;
    workItems.push(newItem);
    res.redirect("/work");

});

app.get("/about", function(req, res){

    res.render("about");

});



app.listen(3000, function () {
    console.log("Server is 3000");

});