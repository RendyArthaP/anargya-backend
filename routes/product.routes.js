const express = require('express');
const router = express.Router()

const {
  getProduct,
  getProductById,
  getProductByCategory,
  postProduct,
  updateProduct,
  deleteProduct
} = require('../controller/product.controller');

router.get('/', getProduct)
router.get('/:id', getProductById)
router.get('/category/:category', getProductByCategory)
router.post('/', postProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router