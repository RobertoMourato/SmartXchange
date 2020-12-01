const { text } = require("express");
const db = require("../repository/companyDb");

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