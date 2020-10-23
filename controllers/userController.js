const db = require("../repository/userDb");

exports.getUsers = async function (req, res, next) {
    try {
        console.log("controller");
        let results = await db.index;
        res.json(results);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}
