const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

var app = express()
app.use(express.static('model'))
app.use(express.json())
app.use(cors())
app.use('/model', express.static(__dirname + '/model'))

//start server

// app.get('/model/', (req, res)= > {

// })


app.listen(4000, ()=> console.log(`Server started  at 4000`))
