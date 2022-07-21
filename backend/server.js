const express =require ('express')
const dotenv = require('dotenv').config()
const port =process.env.PORT || 5000
const allRoutes = require('./routes/allRoutes')

const app = express()

app.use('/api/myroutes', allRoutes)

app.listen(port, () =>console.log(`Server Started On Port ${port}`))