const mongoose = require('mongoose');
const CartSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userAnargya"
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "productAnargya"
  }]
})

const CartAnargya = mongoose.model('cartAnargya', CartSchema)
module.exports = CartAnargya
