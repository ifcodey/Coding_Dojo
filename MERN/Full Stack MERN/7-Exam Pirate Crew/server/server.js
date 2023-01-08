const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000

app.use(cors())

require('../server/config/mongoose.config')

app.use(express.json(), express.urlencoded({ extended: true }))

const AllMyPirateRoutes = require('../server/routes/pirates.routes')
AllMyPirateRoutes(app)

app.listen(port, () => console.log(`running on port ${port}`))
