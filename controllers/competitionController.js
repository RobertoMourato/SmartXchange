const competitionRepository = require("../repository/competitionRepository");
const tenantRepository = require("../repository/tenantRepository");

exports.getAllCompetitions = async function (req, res, next) {
    try {
        let results = await competitionRepository.index(req,res);
        res.json(results);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

exports.getAllTenants = async function (req, res, next) {
    try {
        let results = await tenantRepository.index(req,res);
        res.json(results);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

exports.addCompetition = async function(req, res){
    try {
        console.log(req.body)
        let results = await competitionRepository.addCompetition(req,res);
        res.json(results);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

exports.startCompetition = async function(req, res){
    try {
        console.log(req.body)
        let results = await competitionRepository.startCompetition(req,res);
        res.json(results);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

