const express = require('express')
const router = express.Router()
const {walkin, walkIninfo, walkinUpdate, walkinGetAll} = require('../Controllers/walkIn')





router.post('/', walkin)
router.post('/update', walkinUpdate)
router.get('/', walkIninfo)
router.get('/getall', walkinGetAll)


module.exports = router