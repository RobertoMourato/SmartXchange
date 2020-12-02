const db = require('../repository/companyDb')

exports.addCompany = async function (req, res) {
  try {
    // console.log(req.body)
    const results = await db.addCompany(req, res)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}
