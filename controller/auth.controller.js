const { UserAnargya } = require('../models/');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { JWT_KEY } = require('../config')

module.exports = {
  handleLoginUser: async (req, res) => {
    const { email, password } = req.body
    let users = await UserAnargya.findOne({email})
  
    try {
      if(users && bcrypt.compareSync(password, users.password)) {
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
    } catch(error) {
      res.status(500).send(error)
    }
  },

  handleRegisterUser: async (req, res) => {
    const { name, email, password, address, phone} = req.body
    const existingUser = await UserAnargya.findOne({email})
    const hashPassword = await bcrypt.hash(password, 10)

    try {
      if(existingUser) {
        res.status(400).json({
          message: "Email Already Registered, Please Register With Another Email"
        })
      }
      
      if(!hashPassword) throw new Error('Hash password error')

      const User = await UserAnargya.create({
        name,
        email,
        password: hashPassword,
        address,
        phone
      })

      res.status(200).json({
        message: "Register Success",
        data: User
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },

  handleUser: async (req,res) => {
    const data = jwt.decode(req.body.data)

    res.send({
      data:data
    })
  }
}