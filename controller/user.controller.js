const { UserAnargya } = require('../models/');

module.exports = {
  getUser: async (req, res) => {
    const user = await UserAnargya.find({}, "-_v")

    try {
      res.status(200).json({
        message: "Get User Success",
        data: user
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },

  getUserById: async (req, res) => {
    const ids = req.params.id
    const user = await UserAnargya.findById(ids)

    try {
      if(!user) {
        res.status(500).json({
          message: "You can't find the user by ID"
        })
      } else {
        res.status(200).json({
          message: "You get the user by ID",
          data: user
        })
      }
    } catch(error) {
      res.status(500).send(error)
    }
  },

  postUser: async (req, res) => {
    const user = await UserAnargya.create(req.body)

    try {
      res.status(200).json({
        message: "Input user success",
        data: user
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  updateUser: async (req, res) => {
    const ids = req.params.id
    const inputUpdateUser = req.body

    try {
      await UserAnargya.findByIdAndUpdate(ids, inputUpdateUser)
      res.status(200).json({
        message: "Update user success"
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  
  deleteUser: async (req, res) => {
    const ids = req.params.id
    
    try {
      await UserAnargya.findByIdAndDelete(ids)
      res.status(200).json({
        message: "Delete user success"
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
}