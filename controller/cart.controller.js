const { CartAnargya } = require('../models/');

module.exports = {
  getCart: async (req, res) => {
    const cart = await CartAnargya.find({}, "-_v")

    try {
      res.status(200).json({
        message: "Get cart success",
        data: cart
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  getCartByUser: async (req, res) => {
    const userID = req.params.user_id
    const cart = await CartAnargya.find({
      "user_id": userID,
    }).populate("products", "-_v")

    try {
      res.status(200).json({
        message: "Get cart by user success",
        data: cart
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  getCartByIdCart: async (req, res) => {
    const ids = req.params.ids
    const cart = await CartAnargya.findById(ids)

    try {
      res.status(200).json({
        message: "Get cart by ID success",
        data: cart
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  addCart: async (req, res) => {
    let cart = await CartAnargya.findOne({user_id: req.body.user_id})
    if(cart) {
      cart.products.push(req.body.product_id)
      cart.save()
    } else {
      cart = await CartAnargya.create(req.body)
      cart.products.push(req.body.product_id)
      cart.save()
    }
  
    try {
      res.status(200).json({
        message: "Add cart success",
        data: cart
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  updateCart: async (req, res) => {
    const ids = req.params.id
    const inputUpdateCart = req.body

    try {
      await CartAnargya.findByIdAndUpdate(ids, inputUpdateCart)
      res.status(200).json({
        message: "Update cart success"
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  deleteCart: async (req, res) => {
    const ids = req.params.id

    try {
      await CartAnargya.findByIdAndDelete(ids)
      res.status(200).json({
        message: "Delete cart success"
      })
    } catch(error) {
      res.status(500).send(error)
    }
  }
}