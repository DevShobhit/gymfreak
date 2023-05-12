const express = require('express')
const router = new express.Router()
const auth = require('../middlewares/auth')
const workoutController = require('../controllers/workout')

router.get('/api/workouts/all', auth, async (req, res) => {
  workoutController.getAllWorkout(req, res)
})

router.post('/api/workouts', async (req, res) => {
  workoutController.addWorkout(req, res)
})

module.exports = router
