const express = require('express')
const route = express.Router()

route.get('/registration', function (req, res) {
    res.send('this is router from auth')
})


module.exports = route