const path = require('path') 
const fs = require('fs')
const express = require('express')
const db = require('./util/database')


const adminRouter = require('./routes/adminRouter')
const productRouter = require('./routes/productRouter')

const app = express()
app.listen(4000)
app.set("view engine", 'ejs')
app.set("views", 'public')

app.use(express.static(path.join(__dirname,"public")))

app.use(adminRouter)
app.use(productRouter)





app.use("*",(req,res,next)=>{
    res.render("404",{path:''})
})
