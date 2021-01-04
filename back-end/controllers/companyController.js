const companyDb = require('../repository/companyDb')
const db = require('../repository/companyDb')
const evaluationRep = require('../repository/evaluationRepository')

exports.addCompany = async function (req, res) {
  try {
    // console.log(req.body)
    const results = await db.addCompany(req, res)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

exports.getMyCompany = async function (req, res) {
  try {
    // console.log(req.body)
    const results = await db.getMyCompany(req, res)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

exports.getCompany = async function (req, res) {
  try {
    // console.log(req.body)
    const results = await db.getCompany(req.query.companyId)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

exports.getAllEvaluations = async function (req, res) {
  try {
    const results = await evaluationRep.index(req, res)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

exports.addEvaluation = async function (req, res) {
  try {
    console.log(req.body)
    const results = await evaluationRep.addEvaluation(req, res)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

exports.updateCompany = async function (req, res) {
  try {
    const results = await db.updateCompany(req.body)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

exports.testeStartCompStocks = async function (req, res) {
  try {
    const results = await companyDb.startCompaniesStocks(1, 1)
    res.json(results).status(200)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}
