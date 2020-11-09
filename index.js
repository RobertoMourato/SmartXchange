var express = require("express");
var app = express();


var usersRouter = require('./routes/userRoutes');
var stockRouter = require('./routes/stockRoutes');

app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log(`App listening on port ${PORT}`);
});


app.use('/users', usersRouter);
app.use('/stocks', stockRouter);

module.exports = app;