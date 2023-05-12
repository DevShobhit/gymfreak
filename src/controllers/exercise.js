const Exercise = require('../models/exercises')

const getExerciseById = async (req, res) => {
  try {
    const _id = req.params.id

    const exercise = await Exercise.findOne({ _id })
    if (!exercise) {
      res.status(404).send()
    }
    res.status(200).json({ exercise })
  } catch (e) {
    res.status(500).send()
  }
}

const createExercise = async (req, res) => {
  try {
    const exercise = new Exercise(req.body)
    await exercise.save()
    res.status(201).json({ exercise })
  } catch (e) {
    res.status(500).send()
  }
}

module.exports = { createExercise, getExerciseById }
