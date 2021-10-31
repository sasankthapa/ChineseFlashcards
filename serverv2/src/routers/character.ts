import { Router } from "express";
import CheckJWT from '../middleware/auth';
import Character from '../models/character';

const router=Router();

router.get('/char:id',CheckJWT,(req,res)=>{
    const id=req.params.id
    try{
        const char=Character.findById(id)
        res.send(char)
    }catch(e){
        console.log(e)
        res.status(400).send(`can't find character`)
    }
})
