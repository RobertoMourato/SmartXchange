const dbUser = require("../repository/userRepository");

exports.getUsers = async function (req, res, next) {
    try {
        //console.log("controller");
        let results = await dbUser.index;
        res.json(results);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

exports.getUserById = async function (req, res, next) {
    try {
        //console.log("controller");
        let results = await dbUser.getUserById(req,res);
        res.json(results);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

exports.addUser = async function(req, res){
    try {
        //console.log(req.body)
        let results = await dbUser.addUser(req,res);
        res.json(results);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

exports.deleteUser = async function(req,res){
    try{
      var deleted =  await dbUser.deleteUser(req);
       res.sendStatus(200);
    }catch(e){
      console.log(e);
      res.sendStatus(500);
    }
}


exports.updateUser = async function(req,res){
    try{
        var usernewUsername;
        var { username, name, newUsername, email, password } = req.body;
        constTenant = await dbUser.getByUsername(username);

        if(newUsername !=undefined){
          usernewUsername = await dbUser.getByUsername(newUsername);
        } 
        if (constTenant) {
          if (!usernewUsername) {
            req.body.name = (name != undefined ? name : constTenant.name);
            req.body.email = (email != undefined ? email : constTenant.email);
            req.body.password = (password != undefined ? password : constTenant.name);
            req.body.username = (newUsername != undefined ? newUsername : constTenant.username);
            if (name.trim() != "" && email.trim()!="" && password.trim()!="" && username.trim()!="") {
              dbUser.u(req,res);
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

