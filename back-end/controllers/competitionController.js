const competitionRepository = require('../repository/competitionRepository')
const tenantRepository = require('../repository/tenantRepository')
const questionRep = require('../repository/questionRepository')

exports.getAllCompetitions = async function (req, res, next) {
  try {
    const results = await competitionRepository.index(req, res)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

exports.getAllTenants = async function (req, res, next) {
  try {
    const results = await tenantRepository.index(req, res)
    res.json(results)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

exports.addCompetition = async function (req, res) {
  try {
    console.log(req.body)
    const results = await competitionRepository.addCompetition(req, res)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

exports.toggleCompetition = async function (req, res) {
  try {
    console.log(req.body)
    const results = await competitionRepository.toggleCompetition(req, res)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

exports.changeSettingsCompetition = async function (req, res) {
  try {
    console.log(req.body)
    const results = await competitionRepository.changeSettingsCompetition(req, res)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

exports.addQuestion = async function (req, res) {
  try {
    // console.log(req.body)
    const results = await questionRep.addQuestion(req.body.questionText, req.body.competitionId)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

exports.toggleQuestions = async function (req, res) {
  console.log(req.body.selected)
  try {
    req.body.selected.forEach(questionId => {
      console.log(questionId)
      questionRep.toggleQuestion(questionId, true)
    })
    res.status(200).json('Questions should be available for entrepreneurs to respond!')
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}
