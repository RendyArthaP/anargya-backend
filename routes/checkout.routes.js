const express = require('express');
const router = express.Router()

const {
  getCheckout,
  getCheckoutByUser,
  getCheckoutByIdCheckout,
  addCheckout,
  updateCheckout,
  deleteCheckout
} = require('../controller/checkout.controller');

router.get('/', getCheckout)
router.get('/user/:user_id', getCheckoutByUser)
router.get('/:id', getCheckoutByIdCheckout)
router.post('/', addCheckout)
router.put('/:id', updateCheckout)
router.delete('/:id', deleteCheckout)

module.exports = router