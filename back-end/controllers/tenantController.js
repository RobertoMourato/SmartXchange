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
        var tenantNewUsername;
        var { username, name, newUsername, email, password } = req.body;
        constTenant = await tenantRepository.getTenantByUsername(username);

        if(newUsername !=undefined){
          tenantNewUsername = await tenantRepository.getTenantByUsername(newUsername);
        } 
        if (constTenant) {
          if (!tenantNewUsername) {
            req.body.name = (name != undefined ? name : constTenant.name);
            req.body.email = (email != undefined ? email : constTenant.email);
            req.body.password = (password != undefined ? password : constTenant.name);
            req.body.username = (newUsername != undefined ? newUsername : constTenant.username);
            if (name.trim() != "" && email.trim()!="" && password.trim()!="" && username.trim()!="") {
              tenantRepository.updateTenant(req,res);
              res.status(200).json("Tenant updated succesfully!");;
            } else {
              res.status(400).json("Invalid arguments!");
            }
          } else {
            res.status(400).json("New username is unavailable!");
          }
        } else {
          res.status(400).json("Tenant not found!");
        }
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }

}

exports.deleteTenant = async function(req,res){
    try{

    }catch{

    }
}

