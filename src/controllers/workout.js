const Workouts = require('../models/workouts')

const addWorkout = async (req, res) => {
  try {
    const workout = new Workouts(req.body)
    await workout.save()
    res.status(201).json({ workout })
  } catch (e) {
    res.status(500).send()
  }
}

const getAllWorkout = async (req, res) => {
  try {
    const workout = await Workouts.findOne({ user: req.user })
    if (!workout) {
      res.status(404).send()
    }
    res.status(200).json({ workout })
  } catch (e) {
    res.status(500).send()
  }
}

module.exports = { getAllWorkout, addWorkout }
