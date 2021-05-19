const mongoose = require('mongoose');
const CheckoutSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userAnargya"
  },
  cart_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cartAnargya"
  },
  shippingReturns: {
    type: String,
    required: true
  }
})

const CheckoutAnargya = mongoose.model('checkoutAnargya', CheckoutSchema)
module.exports = CheckoutAnargya