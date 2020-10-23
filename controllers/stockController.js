const db = require("../repository/stockDb");

exports.getMyStocks = async function (req, res, next) {
    try {
        let results = await db.getMyStocks(req.params.username);
        res.json(results);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}