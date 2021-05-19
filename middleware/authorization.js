const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/db');

const verifyToken = (req, res, next) => {
  const header = req.headers.authorization
  if(!header) {
    res.status(500).json({
      message: "You need a token!"
    })
  }

  const token = header.split(' ')[1]
  if(!token) {
    res.status(500).json({
      message: "Invalid token!"
    })
  }

  const payload = jwt.verify(token, JWT_KEY)
  req.payload = payload

  next()
}

module.exports = verifyToken