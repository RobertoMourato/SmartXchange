const express = require('express')
const router = express.Router()

const competitionController = require('../controllers/competitionController')

router.get('/', competitionController.getAllCompetitions)
router.get('/getCompetition', competitionController.getById)
router.post('/', competitionController.addCompetition)
router.put('/toggle', competitionController.toggleCompetition)
router.put('/settings', competitionController.changeSettingsCompetition)
router.post('/question', competitionController.addQuestion)
router.get('/compquestion', competitionController.getQuestionsAndAnswers)
router.put('/selectQuestions', competitionController.toggleQuestions)
router.post('/answerQuestion', competitionController.answerQuestions)
router.post('/register/playerCompetition', competitionController.addPlayerCompetitionWithInvite)

module.exports = router
