var express = require("express");
var app = express();

const PORT = 8000;

var usersRouter = require('../routes/userRoutes');
var stockRouter = require('../routes/stockRoutes');

app.listen(PORT, () => {
    console.log("Server running on PORT " + PORT + "...");
})

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.use('/users', usersRouter);
app.use('/stocks', stockRouter);