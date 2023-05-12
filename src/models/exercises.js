const mongoose = require('mongoose')

const ExerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  muscleGroup: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  instructions: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  video: {
    type: String,
  },
  equipment: {
    type: String,
  },
})

const Exercise = mongoose.model('Exercise', ExerciseSchema)
module.exports = Exercise
