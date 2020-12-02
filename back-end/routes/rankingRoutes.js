var express = require('express');
var router = express.Router();

var competitionController = require('../controllers/competitionController'); 

router.get('/all',competitionController.getAllRankings);
router.post('/',competitionController.addRanking);

module.exports = router;