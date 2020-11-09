var express = require('express');
var router = express.Router();

var competitionController = require('../controllers/competitionController'); 

//router.get('/',competitionController.getAllTenants);
router.get('/',competitionController.getAllCompetitions);
router.post('/',competitionController.addCompetition);
router.put('/',competitionController.startCompetition);

module.exports = router;