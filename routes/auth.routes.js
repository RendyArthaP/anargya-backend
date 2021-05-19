const express = require('express');
const router = express.Router()
const {
  handleLoginUser,
  handleRegisterUser
} = require('../controller/auth.controller');

router.post('/login', handleLoginUser)
router.post('/register', handleRegisterUser)

module.exports = router