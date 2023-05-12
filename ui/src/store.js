import { configureStore } from '@reduxjs/toolkit'
import workoutPlansReducer from './features/workoutplansslice'
import userReducer from './features/userslice'

export const store = configureStore({
  reducer: {
    workoutplans: workoutPlansReducer,
    user: userReducer,
  },
})
