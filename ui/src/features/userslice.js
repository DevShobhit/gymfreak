import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  user: {},
  token: '',
  makingreq: false,
  error: null,
}

export const signinUser = createAsyncThunk('user/signin', async (user) => {
  const response = await axios.post('/api/user/login', user)
  return response.data
})

export const signupUser = createAsyncThunk('user/signup', async (user) => {
  const response = await axios.post('/api/user', user)
  return response.data
})

export const updateUser = createAsyncThunk(
  '/user/update',
  async (user, thunkAPI) => {
    const state = thunkAPI.getState()
    const token = 'Bearer ' + state.user.token
    let Axios = axios.create({
      headers: {
        Authorization: token,
      },
    })

    const response = await Axios.patch('/api/users/me', user)
    return response.data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signinUser.pending, (state) => {
        state.makingreq = true
        state.error = null
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        sessionStorage.setItem('Token', action.payload.token)
        state.makingreq = false
      })
      .addCase(signinUser.rejected, (state, action) => {
        state.makingreq = false
        state.error = action.error.message
      })

      .addCase(signupUser.pending, (state) => {
        state.makingreq = true
        state.error = null
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.user = action.payload.user
        sessionStorage.setItem('Token', action.payload.token)
        state.token = action.payload.token
        state.makingreq = false
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.makingreq = false
        state.error = action.error.message
      })

      .addCase(updateUser.pending, (state) => {
        state.makingreq = true
        state.error = null
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.makingreq = false
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.makingreq = false
        state.error = action.error.message
      })
  },
})

export default userSlice.reducer
