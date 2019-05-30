const express = require('express')

const app = new express()

const port = 3001

app.use(express.static('../ui/dist'))

app.listen(port)


