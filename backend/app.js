require("dotenv").config()
const express = require('express')

const app = express()

app.use(express.json())

app.get('/', function(req, res) {
    console.log(req.body)
    
    res.send({req: JSON.stringify(req.body, null, 2)}, 200)
})

module.exports= app