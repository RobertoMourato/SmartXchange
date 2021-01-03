const express = require('express')
const router = express.Router()

const UserController = require('../controllers/userController.js')
const inviteControlller = require('../controllers/inviteController')

router.get('/all', UserController.getUsers)
router.get('/', UserController.getUserById) // errado
router.post('/register', UserController.addUser)
router.post('/invite', inviteControlller.inviteUser)
router.get('/isManager', inviteControlller.verifyManager)
router.delete('/', UserController.deleteUser)
router.put('/update', UserController.updateUser)
router.put('/completeRegistration', UserController.completeRegistration)
router.get('/byCompetition', UserController.getUsersByCompetition)

module.exports = router
