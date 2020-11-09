var express = require("express");
require('./models');
var app = express();

var bodyParser = require('body-parser');

var usersRouter = require('./routes/userRoutes');
var stockRouter = require('./routes/stockRoutes');
var tenantTypesRouter = require('./routes/tenantTypeRoutes');
var tenantRouter =  require('./routes/tenantRoutes');
var competitionRouter = require("./routes/competitionRoutes");

app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log(`App listening on port ${PORT}`);
});


app.use(bodyParser.json());

app.use('/users', usersRouter);
app.use('/stocks', stockRouter);
app.use('/tenanttypes',tenantTypesRouter);
app.use('/tenants',tenantRouter);
app.use('/competition',competitionRouter);

module.exports = app;