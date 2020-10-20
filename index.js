var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log(`App listening on port ${PORT}`);
});