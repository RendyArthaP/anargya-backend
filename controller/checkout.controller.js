const { CheckoutAnargya } = require('../models/');

module.exports = {
  getCheckout: async (req, res) => {
    const checkout = await CheckoutAnargya.find({}, "-_v")

    try {
      res.status(200).json({
        message: "Get checkout success",
        data: checkout
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  getCheckoutByUser: async (req, res) => {
    const userID = req.params.user_id
    const checkout = await CheckoutAnargya.find({
      "user_id": userID
    }).populate({
      path: "cart_id",
      select: "-__v -user_id", 
      populate: {
        path: "products"
      }
    })

    try {
      res.status(200).json({
        message: "Get checkout by user success",
        data: checkout
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  getCheckoutByIdCheckout: async (req, res) => {
    const ids = req.params.id
    const checkout = await CheckoutAnargya.findById(ids)
  
    try {
      res.status(200).json({
        message: "Get checkout by id success",
        data: checkout
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  addCheckout: async (req, res) => {
    const checkout = await CheckoutAnargya.create(req.body)

    try {
      res.status(200).json({
        message: "Add checkout success",
        data: checkout
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  updateCheckout: async (req, res) => {
    const ids = req.params.id
    const inputUpdateCheckout = req.body

    try {
      await CheckoutAnargya.findByIdAndUpdate(ids, inputUpdateCheckout)
      res.status(200).json({
        message: "Update checkout success"
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  deleteCheckout: async (req, res) => {
    const ids = req.params.id

    try {
      await CheckoutAnargya.findByIdAndDelete(ids)
      res.status(200).json({
        message: "Delete checkout success"
      })
    } catch(error) {
      res.status(500).send(error)
    }
  }
}