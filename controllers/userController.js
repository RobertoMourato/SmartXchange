const db = require("../db/userDb");

exports.getUsers = async function (req, res, next) {
    try {
        console.log("controller");
        let results = await db.getAll();
        res.json(results);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}
