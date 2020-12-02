const jwt = require('jsonwebtoken')
const { secret } = require('../config')
const { secretAdmin } = require('../config')

exports.verifyTokenUser = function (req, res) {
  const token = req.headers['x-access-token']
  if (!token) return 403

  jwt.verify(token, secret, function (err, decoded) {
    if (err) return 500
    req.user = decoded.user
  })
}

exports.verifyTokenTenant = function (req, res) {
  const token = req.headers['x-access-token']
  if (!token) return 403

  jwt.verify(token, secretAdmin, function (err, decoded) {
    if (err) return 500
    req.user = decoded.user
  })
}
