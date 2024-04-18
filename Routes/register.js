const express = require('express')
const router = express.Router()
const {register, profile, userGetall} = require('../Controllers/register')




router.post('/', register)
router.get('/', profile)
router.get('/getall', userGetall)


module.exports = router