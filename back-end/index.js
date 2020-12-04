const express = require('express')
require('./models')
const app = express()
const cors = require('cors')

const bodyParser = require('body-parser')

const usersRouter = require('./routes/userRoutes')
const stockRouter = require('./routes/stockRoutes')
const stockValueRouter = require('./routes/stockValueRoutes')
const stockExchangeRouter = require('./routes/stockExchangeRoutes')
const tenantTypesRouter = require('./routes/tenantTypeRoutes')
const tenantRouter = require('./routes/tenantRoutes')
const companyRouter = require('./routes/companyRoutes')
const competitionRouter = require('./routes/competitionRoutes')
const rankingRouter = require('./routes/rankingRoutes')
const orderRouter = require('./routes/orderRoutes')
const evaluationRouter = require('./routes/evaluationRoutes')
const authRouter = require('./routes/AuthRoutes')

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.listen(process.env.PORT, function () {
  console.log(`App listening on port ${process.env.PORT}`)
})

app.use(bodyParser.json())
app.use(cors())

app.use('/users', usersRouter)
app.use('/stocks', stockRouter)
app.use('/stockValues', stockValueRouter)
app.use('/stockExchanges', stockExchangeRouter)
app.use('/tenanttypes', tenantTypesRouter)
app.use('/tenants', tenantRouter)
app.use('/competition', competitionRouter)
app.use('/ranking', rankingRouter)
app.use('/companies', companyRouter)
app.use('/order', orderRouter)
app.use('/evaluation', evaluationRouter)
app.use('/login', authRouter)

module.exports = app
