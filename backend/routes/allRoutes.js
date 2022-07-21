const express =require('express')
const router = express.Router()
const {getHello,setHello,updateHello,deleteHello} = require('../controllers/allController')

router.route('/').get(getHello).post(setHello)
router.route('/:id').put(updateHello).delete(deleteHello)


module.exports = router
