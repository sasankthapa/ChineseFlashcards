import { Router } from "express";
import User from '../models/user';
import CheckJWT from '../middleware/auth'

const router:Router = Router();

router.post('/ctw',(req,res)=>{
    res.send('hello')
})

router.post('/authed',CheckJWT,(req,res)=>{
    res.send('routed')
})

export default router;
