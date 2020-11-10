var jwt = require('jsonwebtoken');
const { secret } = require('../config');
const { secret_admin } = require('../config');

exports.verifyTokenUser = function (req, res) {
    var token = req.headers['x-access-token'];
    if (!token) return 403;

    jwt.verify(token, secret, function (err, decoded) {
        if (err) return 500;
        req.user = decoded.user;
    });
}

exports.verifyTokenTenant = function (req, res) {
    var token = req.headers['x-access-token'];
    if (!token) return 403;

    jwt.verify(token, secret_admin, function (err, decoded) {
        if (err) return 500;
        req.user = decoded.user;
    });
}