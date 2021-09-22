const express=require('express');
const {sendWelcomeEmail} =require('../email/emailer');

const Character=require('../models/character');
const auth=require('../middleware/auth');

const router = new express.Router();

router.get('/characters/',async(req,res)=>{
    res.send('he0');
})

router.get('/character/parent/:word',async(req,res)=>{
})

//expects a query param of character
router.get('/characters/getOne/',async(req,res)=>{
    console.log('finding one')
    try{
        console.log(req)
        const characters=await Character.findOne(req.param.char)
        console.log(characters);
    }catch(e){
        console.log(e)
    }
    res.send(characters)
})

router.get('/characters/queryMultiple?:searchkey',async(req,res)=>{
})

router.post('/characters/create',auth,async(req,res)=>{
})

module.exports=router
