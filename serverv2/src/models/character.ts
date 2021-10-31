import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { ICharacter, ICharacterModel } from '../types/character.types';

const CharacterSchema=new Schema<ICharacter,ICharacterModel>({
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
    char:{
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

const Character=mongoose.model<ICharacter,ICharacterModel>('Character',CharacterSchema);

export default Character;
