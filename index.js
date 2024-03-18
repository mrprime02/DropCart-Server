require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./Connection/db')
const router = require('./Routes/router')

const DropCartServer = express()
DropCartServer.use(cors())
DropCartServer.use(express.json())
DropCartServer.use(router)

const PORT = 3000 || process.env.PORT
DropCartServer.listen(PORT,()=>{
    console.log(`Drop Cart Server started at Port ${PORT}`);
})

DropCartServer.get('/',(req,res)=>{
    res.send(`<h1> Drop Cart Server Started... Waiting for Client Requests!!!</h1>`)
})