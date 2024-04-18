const express = require('express')
const router = express.Router()
const {wax, waxinfo, waxDelete, waxes, waxUpdate} = require('../Controllers/wax')




router.post('/', wax)
router.get('/', waxinfo)
router.delete('/', waxDelete)
router.get('/getall', waxes)
router.post('/update', waxUpdate)



module.exports = router