const express = require('express')
const app = express()
const path = require('path')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require("body-parser");
const connectDB = require('./dataBase/mongoDB.js')
const controller = require('./controller/controller.js')



app.use(morgan('tiny'))
connectDB();

app.use(bodyparser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyparser.json())

app.use('/', require('./routes/routes'))

app.listen(3000, () => {
        
    console.log(`server running on http://localhost:${PORT}`)
    
})

dotenv.config({path : './configs/config.env'})
const PORT = process.env.PORT || 8080


