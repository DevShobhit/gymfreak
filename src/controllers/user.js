const User = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const getUser = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, {
      expiresIn: '1h',
    })

    user.tokens = user.tokens.concat({ token })
    await user.save()

    res.status(200).json({ user, token })
  } catch (e) {
    res.status(500).send()
  }
}

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const token = jwt.sign({ email }, process.env.SECRET_KEY, {
      expiresIn: '1h',
    })

    const user = new User({
      name,
      email,
      password: hashedPassword,
    })

    user.tokens = user.tokens.concat({ token })

    await user.save()

    res.status(201).json({ user, token })
  } catch (e) {
    res.status(500).send()
  }
}

const updateUser = async (req, res) => {
  try {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'notifications']
    const isValidOperation = updates.every((update) => {
      return allowedUpdates.includes(update)
    })

    if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid Updates' })
    }

    try {
      if (updates.includes('password')) {
        let hashedPassword = await bcrypt.hash(req.body.password, 10)
        req.user.password = hashedPassword
      }

      updates.forEach((update) => {
        if (update !== 'password') {
          req.user[update] = req.body[update]
        }
      })

      await req.user.save()

      res.send(req.user)
    } catch (e) {
      res.send(400).send()
    }
  } catch (e) {
    res.status(500).send()
  }
}

const logoutUser = async (req, res) => {
  try {
    req.user.tokens = []
    await req.user.save()
    res.status(200).json()
  } catch (e) {
    res.status(500).send()
  }
}

module.exports = { getUser, createUser, updateUser, logoutUser }
