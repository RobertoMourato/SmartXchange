var express = require("express");
require('./models');
var app = express();

var bodyParser = require('body-parser');

var usersRouter = require('./routes/userRoutes');
var stockRouter = require('./routes/stockRoutes');
var stockValueRouter = require('./routes/stockValueRoutes');
var tenantTypesRouter = require('./routes/tenantTypeRoutes');
var tenantRouter =  require('./routes/tenantRoutes');
var companyRouter = require("./routes/companyRoutes");
var competitionRouter = require("./routes/competitionRoutes");
var orderRouter = require('./routes/orderRoutes')
var authRouter = require('./routes/AuthRoutes')

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
app.use('/stockValues', stockValueRouter);
app.use('/tenanttypes',tenantTypesRouter);
app.use('/tenants',tenantRouter);
app.use('/competition',competitionRouter);
app.use('/companies', companyRouter);
app.use('/order', orderRouter);
app.use('/login', authRouter);

module.exports = app;