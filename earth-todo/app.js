const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));

app.use("/public", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const router = require("./routes/index");
app.use(router);

mongoose.connect("mongodb+srv://dellose:dbalsgh10@cluster0.myqat.mongodb.net/myFirstDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (err) {
    if (err) {
        console.error("mongoDB Connection Error!", err);
    }
    console.log("mongoDB Connected!");

    app.listen(3000, function () {
        console.log("Server listening on port 3000!");
    });
});