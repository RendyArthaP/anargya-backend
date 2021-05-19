const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  descriptionProduct: {
    type: String,
    required: true
  },
  priceProduct: {
    type: Number,
    required: true
  },
  imageProduct: {
    type: String,
    required: true
  },
  categoryProduct: {
    type: String,
    required: true
  },
  stockProduct: {
    type: Number,
    required: true
  },
  sizeProduct: {
    type: String,
    required: true
  }
})

const ProductAnargya = mongoose.model('productAnargya', ProductSchema)

module.exports = ProductAnargya;