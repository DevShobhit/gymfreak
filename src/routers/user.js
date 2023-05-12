const express = require('express')
const router = new express.Router()
const auth = require('../middlewares/auth')
const userController = require('../controllers/user')

router.post('/api/user', async (req, res) => {
  userController.createUser(req, res)
})

router.post('/api/user/login', async (req, res) => {
  userController.getUser(req, res)
})

router.post('/api/user/logout', auth, async (req, res) => {
  userController.logoutUser(req, res)
})

router.patch('/api/users/me', auth, async (req, res) => {
  userController.updateUser(req, res)
})

module.exports = router
