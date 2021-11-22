import { Application } from "express"
import { connectToDB } from "./db/db";
import UserRouter from './routers/user';

connectToDB()

const express=require('express')
const cors=require('cors')

const app:Application=new express()

app.use(cors())
app.use(UserRouter)

app.get('/test', async (req, res) => {
  res.json({message: 'pass!'})
})

export default app;

