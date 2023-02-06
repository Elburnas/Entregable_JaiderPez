const { response } = require('express')
const express = require('express')
const app = express()
const fs = require('fs')
const { stringify } = require('querystring')
let productos = fs.readFileSync('./productos.json', 'utf-8')
var obj = JSON.parse(productos)

app.listen(8080, () => console.log('Server en linea'))

app.get('/productos/:id', (request, response) => {
    const { id } = request.params
    var product = obj.find(item => item.id == id)
    if(!product) response.send({ error: "Id no encontrado"})
    else response.send({ product })
})

app.get('/productos', (req, res) => {
    const {limit} = req.query
    if(limit == 0 || !limit) res.send({obj})
    else res.send(obj.slice(0,limit))
})

