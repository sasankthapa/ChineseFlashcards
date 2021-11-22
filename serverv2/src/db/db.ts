import { Mongoose } from "mongoose";

const mongoose:Mongoose=require('mongoose')

export const connectToDB=async()=>{
    mongoose.connect(<string>process.env.MONGODB_URL,{
    ssl:true,
    },(err)=>{
        if(err){
            throw new Error('Error connecting to database');
        }
    });
}

export const disconnectDB=async()=>{
    mongoose.connection.close()
}
