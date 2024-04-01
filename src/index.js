//const express = require('express')//common js
import express from 'express'
import AppRoutes from './routes/index.js'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
const app = express()
let PORT = process.env.PORT 

app.use(cors())
app.use(express.json())

app.use('/',AppRoutes)



app.listen(PORT,()=>console.log(`App is listen Port ${PORT}`))