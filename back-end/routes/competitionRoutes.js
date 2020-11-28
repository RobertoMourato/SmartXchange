var express = require('express');
var router = express.Router();

var competitionController = require('../controllers/competitionController'); 

router.get('/',competitionController.getAllCompetitions);
router.post('/',competitionController.addCompetition);
router.put('/toggle',competitionController.toggleCompetition);
router.put('/settings',competitionController.changeSettingsCompetition);
router.post('/question', competitionController.addQuestion);
router.put('/selectQuestions', competitionController.toggleQuestions);
router.post('/answerQuestion', competitionController.answerQuestion);

module.exports = router;