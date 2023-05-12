const mongoose = require('mongoose')

// User Specific workout tracking schema

const workoutSchema = new mongoose.Schema({
  workoutPlan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'WorkoutPlan',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  exercises: [
    {
      exercise: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise',
        required: true,
      },
      sets: {
        type: Number,
        required: true,
      },
      reps: {
        type: Number,
        required: true,
      },
      weight: {
        type: Number,
        required: true,
      },
    },
  ],
  duration: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
})

const WorkOuts = mongoose.model('WorkOuts', workoutSchema)
module.exports = WorkOuts
