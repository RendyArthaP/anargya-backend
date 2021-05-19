require('dotenv').config()

module.exports = {
  PORT: process.env.PORT,
  JWT_KEY: process.env.JWT_KEY,
  MONGODB_LIVE: process.env.MONGODB_LIVE
}