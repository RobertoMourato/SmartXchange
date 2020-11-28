const stockRepository = require("../repository/stockRepository");

exports.getAllStocks = async function (req, res, next) {
    try {
        let results = await stockRepository.index(req,res);
        res.json(results);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

exports.addStock = async function(req, res){
    try {
        console.log(req.body)
        let results = await stockRepository.addStock(req,res);
        res.json(results);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}