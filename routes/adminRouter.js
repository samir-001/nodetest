const express = require('express')

const productController = require("../controllers/productController")
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('index',{path:"home"})
})

module.exports = router