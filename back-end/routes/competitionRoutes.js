const express = require('express')
const router = express.Router()

const competitionController = require('../controllers/competitionController')

router.get('/',competitionController.getAllCompetitions);
router.post('/',competitionController.addCompetition);
router.put('/toggle',competitionController.toggleCompetition);
router.put('/settings',competitionController.changeSettingsCompetition);
router.post('/question', competitionController.addQuestion);
router.put('/selectQuestions', competitionController.toggleQuestions);
router.post('/answerQuestion', competitionController.answerQuestions);

module.exports = router
