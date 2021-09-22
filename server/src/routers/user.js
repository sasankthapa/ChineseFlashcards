const express=require('express');
const {sendWelcomeEmail} =require('../email/emailer');

const User=require('../models/user');
const Character=require('../models/character');
const auth=require('../middleware/auth');

const router = new express.Router();

router.post('/users/register',async (req,res)=>{
    const user=new User(req.body)

    try{
        await user.save()
        sendWelcomeEmail(user.email,user.name);
        const token =await user.generateAuthToken();
        res.status(201).send({user,token});
    }catch(e){
        console.log(e)
        res.status(400).send(e);
    }
})

router.post('/users/addword',auth,async(req,res)=>{
    const user=req.body.user;
    try{
        user.folders.push[req.folderName,req.body.word]
        await user.save();
        res.status(201).send({success:true});
    }catch(e){
        console.log(e)
        res.status(400).send(e.body);
    }
})

router.post('/users/addworddb',auth,async(req,res)=>{
    try{
        const currChar=req.body.character;
        if(currChar.length>1){
            const root=await Character.findOne({character:req.body.character[0]})
            console.log('root',root)
        }else{
            const character=new Character({
                ...req.body
            })
            await character.save()
        }
        res.status(201).send({success:true});
    }catch(e){
        console.log(e);
        res.status(400).send()
    }
})

router.post('/users/login',async(req,res)=>{
    try{
        const user=await User.findByCredentials(req.body.email,req.body.password);
        const token=await user.generateAuthToken();
        res.send({user,token});
    }catch(e){
        console.log(e);
        res.status(400).send();
    }
})

router.post('/users/logout',auth,async(req,res)=>{
    try{
        req.user.tokens=req.user.tokens.filter((token)=>{
            return token.token !==req.token
        })
        await req.user.save()

        res.send();
    }catch(e){
        res.status(500).send();
    }
})

router.get('/users/me',auth,async(req,res)=>{
    try{
        res.send(req.user)
    }catch(e){
        console.log(e);
        res.status(500).send();
    }
});

router.delete('/users/me',auth,async(req,res)=>{
    try{
        const user=await req.user.remove();
        res.send(user);
    }catch(e){
        console.log(e);
        res.status(500).send();
    }
})

module.exports=router
