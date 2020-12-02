const { text } = require("express");
const db = require("../repository/companyDb");
const evaluationRep = require('../repository/evaluationRepository');

exports.addCompany = async function(req, res){
    try {
        //console.log(req.body)
        let results = await db.addCompany(req,res);
        res.json(results);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

exports.getAllEvaluations = async function (req, res, next) {
    try {
        let results = await evaluationRep.index(req,res);
        res.json(results);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
},

exports.addEvaluation = async function(req, res){
    try {
        console.log(req.body)
        let results = await evaluationRep.addEvaluation(req,res);
        res.json(results);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}