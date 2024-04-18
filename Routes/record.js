const express = require('express')
const router = express.Router()
const {record, recordGetAll} = require('../Controllers/record')





router.post('/', record)
router.get('/getall', recordGetAll)


module.exports = router