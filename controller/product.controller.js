const { ProductAnargya } = require('../models/');

module.exports = {
  getProduct: async (req, res) => {
    const product = await ProductAnargya.find({}, "-_v")

    try {
      res.status(200).json({
        message: "Get Products Success",
        data: product
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },

  getProductById: async (req, res) => {
    const ids = req.params.id
    const product = await ProductAnargya.findById(ids)

    try {
      if(!product) {
        res.status(500).json({
          message: "You can't find the product by ID"
        })
      } else {
        res.status(200).json({
          message: "You get the product by ID",
          data: product
        })
      }
    } catch(error) {
      res.status(500).send(error)
    }
  },

  getProductByCategory: async (req, res) => {
    const product = await ProductAnargya.find({
      "categoryProduct": req.params.category
    })

    try {
      res.status(200).json({
        message: "You get the product by category",
        data: product
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },

  postProduct: async (req, res) => {
    const product = await ProductAnargya.create(req.body)

    try {
      res.status(200).json({
        message: "Input product success",
        data: product
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },

  updateProduct: async (req, res) => {
    const ids = req.params.id
    const inputUpdateProduct = req.body

    try {
      await ProductAnargya.findByIdAndUpdate(ids, inputUpdateProduct)
      res.status(200).json({
        message: "Update product success",
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },

  deleteProduct: async (req, res) => {
    const ids = req.params.id

    try {
      await ProductAnargya.findByIdAndDelete(ids)
      res.status(200).json({
        message: "Delete product success"
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
}