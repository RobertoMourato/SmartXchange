const competitionRepository = require('../repository/competitionRepository')
const tenantRepository = require('../repository/tenantRepository')
const questionRep = require('../repository/questionRepository')
const answerRep = require('../repository/answerRepository')
const rankingRep = require('../repository/rankingRepository')

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
exports.addCompetitionDraft = async function (req, res) {
  try {
    console.log(req.body)
    const currDraft = await competitionRepository.getCurrDraft(req.body.managerId)
    if (currDraft != null) {
      const results = await competitionRepository.addCompetitionDraft(req, res)
      res.json(results).status(200)
    } else {
      res.json('There is an ongoing Competition, you cannot start another one').status(400)
    }
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

exports.startCompetition = async function (req, res) {
  try {
    const currentCompetition = competitionRepository.getCurrDraftOrCompetition(managerId)
    if (currentCompetition != null) {
      const results = await competitionRepository.startCompetition(req, res);
      res.json(results).status(200)
    } else {
      res.json('There is an ongoing Competition, you cannot start another one').status(400)
    }
  } catch (error) {
    res.json(error.message).status(500)
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

exports.getQuestionsAndAnswers = async function (req, res) {
  try {
    // console.log(req.body)
    const results = await questionRep.getQuestionsAndAnswers(req.query.userId)
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

exports.answerQuestions = async function (req, res) {
  try {
    req.body.answers.forEach(answer => {
      answerRep.addAnswer(answer.answerText, answer.companyId, answer.questionId)
    })
    res.status(200).json('Answers submited')
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

exports.addRanking = async function (req, res) {
  try {
    // console.log(req.body)
    const results = await rankingRep.addRanking(req, res)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

exports.getAllRankings = async function (req, res) {
  try {
    const results = await rankingRep.index(req, res)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}
exports.getById = async function (req, res) {
  try {
    const results = await competitionRepository.getById(req.query.competitionId)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

exports.addPlayerCompetitionWithInvite = async function (req, res) {
  try {
    const userId = req.query.userId
    const inviteToken = req.query.invite
    const playerCompetition = await competitionRepository.addPlayerCompetitionWithInvite(userId, inviteToken)
    if (playerCompetition) {
      res.json(playerCompetition).status(201)
    } else {
      res.status(400)
    }
  } catch (error) {
    console.log(error.message)
    res.json(error.message).status(500)
  }
}
