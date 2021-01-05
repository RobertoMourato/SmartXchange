const express = require('express')
const router = express.Router()

const UserController = require('../controllers/userController.js')
const inviteControlller = require('../controllers/inviteController')

router.get('/all', UserController.getUsers)
router.get('/wallet', UserController.getWallet) 
//router.get('/', UserController.getUserById) // errado
router.get('byId/:id', UserController.getUserById)
router.post('/register', UserController.addUser)
router.post('/invite', inviteControlller.inviteUser)
router.get('/invites', inviteControlller.getManagersInvites)
router.get('/isManager', inviteControlller.verifyManager)
router.delete('/', UserController.deleteUser)
router.delete('/manager/:id', UserController.deleteManager)
router.put('/update', UserController.updateUser)
router.put('/completeRegistration', UserController.completeRegistration)
router.get('/allByCompetition', UserController.getUsersByCompetition)
router.get('/manager/byCompetition', UserController.getManagerByCompetitionId)

module.exports = router
