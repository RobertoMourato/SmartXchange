const stockExchangeRepository = require("../repository/stockExchangeRepository");

exports.getAllStockExchanges = async function (req, res, next) {
    try {
        let results = await stockExchangeRepository.index(req,res);
        res.json(results);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

exports.addStockExchange = async function(req, res){
    try {
        console.log(req.body)
        let results = await stockExchangeRepository.addStockExchange(req,res);
        res.json(results);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}