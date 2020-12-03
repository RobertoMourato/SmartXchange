var express = require("express");
require('./models');
var app = express();
var cors = require('cors')

var bodyParser = require('body-parser');

var usersRouter = require('./routes/userRoutes');
var stockRouter = require('./routes/stockRoutes');
var stockValueRouter = require('./routes/stockValueRoutes');
var stockExchangeRouter = require('./routes/stockExchangeRoutes');
var tenantTypesRouter = require('./routes/tenantTypeRoutes');
var tenantRouter =  require('./routes/tenantRoutes');
var companyRouter = require("./routes/companyRoutes");
var competitionRouter = require("./routes/competitionRoutes");
var rankingRouter = require("./routes/rankingRoutes");
var orderRouter = require('./routes/orderRoutes')
var evaluationRouter = require('./routes/evaluationRoutes')
var authRouter = require('./routes/AuthRoutes')

app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
})

app.listen(process.env.PORT, function() {
  console.log(`App listening on port ${process.env.PORT}`);
});

app.use(bodyParser.json());
app.use(cors());

app.use('/users', usersRouter);
app.use('/stocks', stockRouter);
app.use('/stockValues', stockValueRouter);
app.use('/stockExchanges', stockExchangeRouter);
app.use('/tenanttypes',tenantTypesRouter);
app.use('/tenants',tenantRouter);
app.use('/competition',competitionRouter);
app.use('/ranking',rankingRouter);
app.use('/companies', companyRouter);
app.use('/order', orderRouter);
app.use('/evaluation', evaluationRouter);
app.use('/login', authRouter);

module.exports = app;