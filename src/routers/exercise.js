const express = require('express')
const router = new express.Router()

const exerciseController = require('../controllers/exercise')

router.get('/api/exercise/:id', async (req, res) => {
  exerciseController.getExerciseById(req, res)
})

router.post('/api/exercise', async (req, res) => {
  exerciseController.createExercise(req, res)
})

module.exports = router
