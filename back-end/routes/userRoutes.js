const express = require('express')
const router = express.Router()

const UserController = require('../controllers/userController.js')
const inviteControlller = require('../controllers/inviteController')

router.get('/all', UserController.getUsers)
router.get('/', UserController.getUserById)
router.post('/register', UserController.addUser)
router.post('/invite', inviteControlller.inviteUser)
router.get('/isManager', inviteControlller.verifyManager)
router.delete('/', UserController.deleteUser)
router.put('/update', UserController.updateUser)

module.exports = router
