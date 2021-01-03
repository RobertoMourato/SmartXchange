const dbUser = require('../repository/userRepository')

exports.getUsers = async function (req, res) {
  try {
    // console.log("controller");
    const results = await dbUser.index()
    console.log(results)
    res.status(200).json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

exports.getUserById = async function (req, res) {
  try {
    // console.log("controller");
    const results = await dbUser.getUserById(req, res)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

exports.addUser = async function (req, res) {
  try {
    // console.log(req.body)
    const results = await dbUser.addUser(req, res)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

exports.deleteUser = async function (req, res) {
  try {
    await dbUser.deleteUser(req)
    res.sendStatus(200)
  } catch (e) {
    console.log(e)
    res.sendStatus(400)
  }
}

exports.updateUser = async function (req, res) {
  try {
    let usernewUsername
    const { username, name, newUsername, email, password } = req.body
    const constUser = await dbUser.getByUsername(username)

    if (newUsername != undefined) {
      usernewUsername = await dbUser.getByUsername(newUsername)
    }
    if (constUser) {
      if (!usernewUsername) {
        req.body.name = (name != undefined ? name : constUser.name)
        req.body.email = (email != undefined ? email : constUser.email)
        req.body.password = (password != undefined ? password : constUser.name)
        req.body.newUsername = (newUsername != undefined ? newUsername : constUser.username)
        if (name.trim() != '' && email.trim() != '' && password.trim() != '' && username.trim() != '') {
          await dbUser.updateUser(req, res)
          res.status(200).json('Tenant updated succesfully!')
        } else {
          res.status(400).json('Invalid arguments!')
        }
      } else {
        res.status(400).json('New username is unavailable!')
      }
    } else {
      res.status(400).json('Tenant not found!')
    }
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}
