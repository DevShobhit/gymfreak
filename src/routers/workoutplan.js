const express = require('express')
const router = new express.Router()

const workoutPlanController = require('../controllers/workoutplan')

router.get('/api/workoutplan/all', async (req, res) => {
  workoutPlanController.getAllWorkoutPlan(req, res)
})

router.get('/api/workoutplan/:id', async (req, res) => {
  workoutPlanController.getWorkoutPlanById(req, res)
})

router.post('/api/workoutplan', async (req, res) => {
  workoutPlanController.createWorkOutPlan(req, res)
})

module.exports = router
