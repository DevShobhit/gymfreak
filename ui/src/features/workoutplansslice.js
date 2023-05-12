import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  allworkoutplans: [
    {
      id: 1,
      name: 'Full-body workout plan',
      description:
        'This workout plan involves working out all major muscle groups in a single session.It can be done 2 - 3 times a week and typically includes exercises such as squats, bench press, pull - ups, and lunges.',
      image: 'https://picsum.photos/400/400',
      difficulty: 'beginner',
      duration: 60,
      exercises: [],
    },
    {
      id: 2,
      name: 'Split workout plan',
      description:
        'This workout plan involves splitting your workouts into different days and focusing on specific muscle groups on each day. For example, a popular split is to work out the chest and triceps on one day, back and biceps on another, and legs and shoulders on another.',
      image: 'https://picsum.photos/600/600',
      difficulty: 'beginner',
      duration: 60,
      exercises: [],
    },
    {
      id: 3,
      name: 'Cardio workout plan',
      description:
        'This workout plan focuses on cardiovascular fitness and involves exercises such as running, cycling, swimming, or jumping rope. It can be done several times a week and can be used to improve endurance, burn calories, and increase overall fitness.',
      image: 'https://picsum.photos/200/200',
      difficulty: 'beginner',
      duration: 60,
      exercises: [],
    },
    {
      id: 4,
      name: 'High-intensity interval training (HIIT) workout plan',
      description:
        'This workout plan involves short bursts of high-intensity exercise followed by brief periods of rest. It can be done in a short amount of time and is effective for burning calories and improving cardiovascular fitness.',
      image: 'https://picsum.photos/200/200',
      difficulty: 'beginner',
      duration: 60,
      exercises: [],
    },
    {
      id: 5,
      name: 'Bodyweight workout plan',
      description:
        'This workout plan uses your own bodyweight as resistance and typically includes exercises such as push-ups, squats, lunges, and planks. It can be done anywhere and is an effective way to build strength and endurance without equipment.',
      image: 'https://picsum.photos/200/200',
      difficulty: 'beginner',
      duration: 60,
      exercises: [],
    },
  ],
  workoutplan: {
    id: 1,
    name: 'Full-body workout plan',
    description:
      'This workout plan involves working out all major muscle groups in a single session.It can be done 2 - 3 times a week and typically includes exercises such as squats, bench press, pull - ups, and lunges.',
    image: 'https://picsum.photos/400/400',
    difficulty: 'beginner',
    duration: 60,
    exercises: [
      {
        id: 123,
        exercise: {
          name: 'Incline Hammer Curls',
        },
        sets: 5,
        reps: 10,
        weight: 10,
      },
      {
        id: '234',
        exercise: {
          name: 'Wrist Roller',
        },
        sets: 3,
        reps: 10,
        weight: 5,
      },
      {
        id: '536',
        exercise: {
          name: 'Plank',
        },
        sets: 4,
        reps: 5,
        weight: 5,
      },
      {
        id: '243',
        exercise: {
          name: 'Squats',
        },
        sets: 5,
        reps: 20,
        weight: 5,
      },
    ],
  },
  loading: false,
  error: null,
}

export const fetchAllWorkoutPlan = createAsyncThunk(
  'workoutplans/fetchallworkoutplans',
  async () => {
    const response = await axios.get('/api/workoutplan/all')
    return response.data
  }
)

export const fetchWorkoutPlanById = createAsyncThunk(
  'workoutplans/fetchworkoutplansbyid',
  async (id) => {
    const response = await axios.get(`/api/workoutplan/${id}`)
    return response.data
  }
)

export const workoutPlansSlice = createSlice({
  name: 'WorkoutPlans',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllWorkoutPlan.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAllWorkoutPlan.fulfilled, (state, action) => {
        state.allworkoutplans = action.payload.postworkoutplans
        state.loading = false
      })
      .addCase(fetchAllWorkoutPlan.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })

      .addCase(fetchWorkoutPlanById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchWorkoutPlanById.fulfilled, (state, action) => {
        state.workoutplan = action.payload.workoutplan
        state.loading = false
      })
      .addCase(fetchWorkoutPlanById.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default workoutPlansSlice.reducer
