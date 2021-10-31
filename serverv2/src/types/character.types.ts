import { Model, ObjectId } from "mongoose";

export interface ICharacter{
    char:string; //Make sure is chinese characters
    pinyin:string;
    meaning:string;
    parentNode:ObjectId;
    childNode:Array<ObjectId>;
    POS:string;
}

export interface ICharacterModel extends Model<ICharacter>{
    //staticMethods
}

export interface ICharacterObject extends ICharacter{
    _id?:string,
    _v?:string;
}

