const mongoose = require('mongoose')

const WorkoutPlanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
  },
  duration: {
    type: Number,
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
})

const WorkoutPlan = mongoose.model('WorkoutPlan', WorkoutPlanSchema)
module.exports = WorkoutPlan
