const express=require('express')
const Card=require('../models/card')
const auth=require('../middleware/auth')
const router=express.Router();

router.post('/cards',auth,async(req,res)=>{
    const card=new Card({
        ...req.body,
        pinyin,
        owner:req.user._id
    });

    try{
        await card.save();
        res.status(201).send(card);
    }catch(e){
        res.status(400).send(e)
    }
});

router.get('/cards',auth,async (req,res)=>{
    try{
        const cards=await Card.find({});
        await req.user.populate({
            path:'usercards',
            options:{
                limit:parseInt(req.query.limit),
                skip:parseInt(req.query.skip),
            }
        }).execPopulate()
        res.send(req.user.usercards);
    }catch(e){
        res.status(500).send()
    }
})

router.delete('/cards/:id',auth,async(req,res)=>{
    console.log(req.params.id,req.user._id)
    try{
        const card=await Card.findOneAndDelete({_id:req.params.id,owner:req.user._id})
        if(!card){
            return res.status(404).send();
        }
        res.send(card);
    }catch(e){
        console.log(e);
        res.status(500).send();
    }
})

module.exports=router
