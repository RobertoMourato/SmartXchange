var express = require("express");
var app = express();

const PORT = 8000;

app.listen(PORT, () => {
    console.log("Server running on PORT " + PORT + "...");
})

app.get("/", (req, res) => {
    res.send("Hello World!");
})