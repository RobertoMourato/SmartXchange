const express = require('express')
const router = express.Router()

const competitionController = require('../controllers/competitionController')

router.get('/all', competitionController.getAllRankings)
router.post('/', competitionController.addRanking)

module.exports = router
