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
