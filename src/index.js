//const express = require('express')//common js
import express from 'express'
import AppRoutes from './routes/index.js'
const app = express()
let PORT = process.env.PORT ||  8000

app.use(express.json())

app.use('/',AppRoutes)



app.listen(PORT,()=>console.log(`App is listen Port ${PORT}`))