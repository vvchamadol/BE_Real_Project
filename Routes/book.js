const express = require('express')
const router = express.Router()
const {book, bookinginfo, bookingUpdate, bookingGetAll, bookingDelete} = require('../Controllers/book')





router.post('/', book)
router.post('/update', bookingUpdate)
router.get('/', bookinginfo)
router.get('/getall', bookingGetAll)
router.delete('/', bookingDelete)



module.exports = router