import { Router } from "express";
import User from '../models/user';
import CheckJWT from '../middleware/auth'

const router:Router = Router();

router.get('/ctw',(req,res)=>{
    console.log('hello')
    res.send('hello')
})

router.get('/authed',CheckJWT,(req,res)=>{
    res.send('routed')
})

export default router;
