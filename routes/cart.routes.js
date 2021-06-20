const express = require('express');
const router = express.Router()
const verifyToken = require('../middleware/authorization');

const {
  getCart,
  getCartByUser,
  getCartByIdCart,
  addCart,
  updateCart,
  deleteCart
} = require('../controller/cart.controller');

router.get('/', getCart)
router.get('/user/:user_id', getCartByUser)
router.get('/:id', getCartByIdCart)
router.post('/', verifyToken, addCart)
router.put('/:id', updateCart)
router.delete('/:id', deleteCart)

module.exports = router