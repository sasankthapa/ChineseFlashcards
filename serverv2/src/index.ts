import { Application } from "express"
import './db/db'
import UserRouter from './routers/user';

const express=require('express')
const cors=require('cors')

const app:Application=new express()

app.use(cors())
app.use(UserRouter)

app.listen(process.env.PORT,()=>{
    console.log(`Running on port ${process.env.PORT}`)
})
