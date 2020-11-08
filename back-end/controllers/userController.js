const dbUser = require("../repository/userDb");

exports.getUsers = async function (req, res, next) {
    try {
        console.log("controller");
        let results = await dbUser.index;
        res.json(results);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

exports.addUser = async function(req, res){
    try {
        console.log(req.body)
        let results = await dbUser.addUser(req,res);
        res.json(results);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}