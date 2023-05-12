const express = require('express')
require('./config/mongoose')
const userRouter = require('./routers/user')
const exerciseRouter = require('./routers/exercise')
const workoutPlanRouter = require('./routers/workoutplan')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(userRouter)
app.use(exerciseRouter)
app.use(workoutPlanRouter)

app.use(express.static('ui/build'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../ui', 'build', 'index.html'))
})

app.listen(PORT, () => {
  console.log('listening on port ' + PORT)
})
