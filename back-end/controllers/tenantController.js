const typesRepository = require("../repository/tenantTypeRepository");
const tenantRepository = require("../repository/tenantRepository");

exports.getAllTenantTypes = async function (req, res, next) {
    try {
        let results = await typesRepository.index(req,res);
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
        res.json();
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

exports.addTenant = async function(req, res){
    try {
       // console.log(req.body)
        let results = await tenantRepository.addTenant(req,res);
        res.json(results);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

exports.updateTenant = async function(req,res){
    try{
      await tenantRepository.updateTenant(req,res);
      res.json("Tenant updated succesfully!");
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }

}

exports.updateTenant = async function(req,res){
    try{
        
    }catch{

    }
}

