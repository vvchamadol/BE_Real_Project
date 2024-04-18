const express = require('express')
const router = express.Router()
const {package, packageinfo, packageUpdate, packages, packageDelete} = require('../Controllers/package')





router.post('/', package)
router.post('/update', packageUpdate)
router.get('/', packageinfo)
router.get('/getall', packages)
router.delete('/', packageDelete)



module.exports = router