const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');
let listOfAddedToDos = ["Make Coffee", "Give the pets Treats/Food", "Practice Coding"];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res, next) => {
    var today = new Date();
    var currentDay = today.getDay();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay: day, theAppendedToDoList: listOfAddedToDos});
});

app.post("/", (req, res, next) => {
    let addListItem = req.body.addToDo;
    listOfAddedToDos.push(addListItem);
    res.redirect("/");
})

app.listen(3000, () => {
    console.log("The server is running on port 3000");
})