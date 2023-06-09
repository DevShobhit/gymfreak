const jwt = require('jsonwebtoken')
const User = require('../models/users')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, process.env.SECRET_KEY)

    const user = await User.findOne({
      email: decoded.email,
      'tokens.token': token,
    })

    if (!user) {
      throw new Error()
    }

    req.token = token
    req.user = user

    next()
  } catch (e) {
    res.status(401).send({ error: 'Please Authenticate' })
  }
}

module.exports = auth
