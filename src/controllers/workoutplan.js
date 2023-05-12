const WorkoutPlan = require('../models/workoutPlan')

const getAllWorkoutPlan = async (req, res) => {
  try {
    const workoutPlans = await WorkoutPlan.find({})
    res.status(200).json({ workoutPlans })
  } catch (e) {
    res.status(500).send()
  }
}

const getWorkoutPlanById = async (req, res) => {
  try {
    const _id = req.params.id

    const workoutplan = await WorkoutPlan.findOne({ _id })
    if (!workoutplan) {
      res.status(404).send()
    }
    res.status(200).json({ workoutplan })
  } catch (e) {
    res.status(500).send()
  }
}

const createWorkOutPlan = async (req, res) => {
  try {
    const workoutPlan = new WorkoutPlan(req.body)
    await workoutPlan.save()
    res.status(201).json({ workoutPlan })
  } catch (e) {
    res.status(500).send()
  }
}

module.exports = { getAllWorkoutPlan, getWorkoutPlanById, createWorkOutPlan }
