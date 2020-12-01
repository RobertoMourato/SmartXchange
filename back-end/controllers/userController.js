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
      res.sendStatus(400);
    }
}


exports.updateUser = async function(req,res){
    try{
        var usernewUsername;
        var { username, name, newUsername, email, password } = req.body;
        constUser = await dbUser.getByUsername(username);

        if(newUsername !=undefined){
          usernewUsername = await dbUser.getByUsername(newUsername);
        } 
        if (constUser) {
          if (!usernewUsername) {
            
            req.body.name = (name != undefined ? name : constUser.name);
            req.body.email = (email != undefined ? email : constUser.email);
            req.body.password = (password != undefined ? password : constUser.name);
            req.body.newUsername = (newUsername != undefined ? newUsername : constUser.username);
            if (name.trim() != "" && email.trim()!="" && password.trim()!="" && username.trim()!="") {
              await dbUser.updateUser(req,res);
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

