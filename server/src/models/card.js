const mongoose=require('mongoose');

const cardSchema=new mongoose.Schema({
    meaning:{
        type:String,
        required:true,
        trim:true
    },
    pinyin:{
        type:String,
        required:true,
        trim:true
    },
    characters:{
        type:String,
        required:true,
        trim:true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
})

cardSchema.method.toJSON=function(){
    const card=this;
    const cardObject=card.toObject();

    delete cardObject.owner;

    return cardObject
}

const Card=mongoose.model('Cards',cardSchema)

module.exports=Card
