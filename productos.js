const { parse } = require("path")
const { listenerCount } = require("process")

const express = requiere('express')
const product = JSON.parse(productos)

const app = express()

app.listen(8080, () => console.log('Server en linea'))