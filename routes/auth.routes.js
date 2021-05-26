const express = require('express');
const router = express.Router()
const {
  handleLoginUser,
  handleRegisterUser,
  handleUser
} = require('../controller/auth.controller');

router.post('/login', handleLoginUser)
router.post('/register', handleRegisterUser)
router.post('/user', handleUser)

module.exports = router