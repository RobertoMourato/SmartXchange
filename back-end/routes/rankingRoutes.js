const express = require('express')
const router = express.Router()

const competitionController = require('../controllers/competitionController')

router.get('/all', competitionController.getAllRankings)
router.post('/', competitionController.addRanking)
router.get('/playerAndCompetition', competitionController.getRankingsByPlayerAndCompetition)
router.get('/latest', competitionController.getCompetitionLatestRankings)

module.exports = router
