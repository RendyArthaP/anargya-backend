const express = require('express');
const { PORT } = require('./config')
const cors = require('cors');
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})