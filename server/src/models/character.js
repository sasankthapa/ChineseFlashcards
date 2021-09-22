const mongoose=require('mongoose');

const characterSchema=new mongoose.Schema()
characterSchema.add({
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
    character:{
        type:String,
        required:true,
        trim:true
    },
    parentNode:{
        type:mongoose.Schema.Types.ObjectId,
        required:false,
        ref:'parent'
    },
    childNode:[{
        type:mongoose.Schema.Types.ObjectId,
        required:false,
        ref:'child'
    }],
    POS:{
        type:String,
        required:false
    },
})
const Character=mongoose.model('Character',characterSchema);

/*
try{
    const char1=new Character({
        meaning:'you',
        pinyin:'ni3',
        character:'你'
    })
    const char2=new Character({
        meaning:'hello',
        pinyin:'ni3hao3',
        character:'你好'
    })
    char1.save()
    char2.save();
}catch(e){
    console.log(e);
}
*/

module.exports=Character;
