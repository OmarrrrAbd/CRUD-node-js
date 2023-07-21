const express = require('express')
const controller = require('../controller/controller')
const route = express.Router()

route.get('/', (req, res) => {
    res.send('Allo backend')
})

route.get('/signup', (req, res) => {
    res.send('signUp')
})

route.get('/login',(req, res) => {
    res.send('login')
})

route.post('/api/users', controller.create)
route.get('/api/users', controller.findUsers)
route.get('/api/users/:id', controller.findUserById)
route.delete('/api/users/:id', controller.delete)
route.put('/api/users/:id', controller.update)

module.exports = route