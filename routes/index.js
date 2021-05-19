const express = require('express');
const router = express.Router()
const productRouter = require('./product.routes');
const userRouter = require('./user.routes');
const authRouter = require('./auth.routes');
const cartRouter = require('./cart.routes');
const checkoutRouter = require('./checkout.routes');

router.get('/', (req, res) => {
  res.json({
    message: 'Connecting Success'
  })
})

router.use('/product', productRouter)
router.use('/user', userRouter)
router.use('/auth', authRouter)
router.use('/cart', cartRouter)
router.use('/checkout', checkoutRouter)

module.exports = router