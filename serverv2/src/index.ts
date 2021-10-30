import { Application } from "express"
import './db/db'

const express=require('express')
const cors=require('cors')

const app:Application=new express()

app.use(cors())

app.listen(process.env.PORT,()=>{
    console.log(`Running on port ${process.env.PORT}`)
})
