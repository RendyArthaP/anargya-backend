const { UserAnargya } = require('../models/');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { JWT_KEY } = require('../config')

module.exports = {
  handleLoginUser: async (req, res) => {
    const { email, password } = req.body
    let users = await UserAnargya.findOne({email})  
  
    if(users && bcrypt.compareSync(password, users.passwordUser)) {
      users = users.toObject()
      const { password, ...payload } = users
      const token = jwt.sign(payload, JWT_KEY)

      res.status(200).json({
        message: "Login Success",
        data: payload,
        token
      })
    } else {
      res.status(500).send({
        message: "Invalid email or password"
      })
    }
  },

  handleRegisterUser: async (req, res) => {
    const users = req.body
    const hashPassword = await bcrypt.hash(users.password, 10)

    if(!hashPassword) throw new Error('Hash password error')

    const User = await UserAnargya.create({
      ...users,
      password: hashPassword
    })

    res.status(200).json({
      message: "Register Success",
      data: User
    })
  },

  handleUser: async (req,res) => {
    const data = jwt.decode(req.body.data)

    res.send({
      data:data
    })
  }
}