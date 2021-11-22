import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { ICharacter, ICharacterModel } from '../types/character.types';

const CharacterSchema=new Schema<ICharacter,ICharacterModel>({
    value:{
        type:String,
        required:true,
        trim:true
    },
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
    POS:{
        type:String,
        required:true
    },
    parents:[{
        type:mongoose.Schema.Types.ObjectId,
        required:false,
        ref:'child'
    }],
})

const Character=mongoose.model<ICharacter,ICharacterModel>('Character',CharacterSchema);

export default Character;
