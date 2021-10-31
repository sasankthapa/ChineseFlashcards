import { Request, Response, NextFunction } from "express";
import User from '../models/user';

const jwt=require('jsonwebtoken')

const CheckJWT= async(req:Request,res:Response,next:NextFunction)=>{
    const token = <string>req.headers["auth"];
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        const user=await User.findOne({ _id: decoded._id, 'tokens.token':token })
        if(!user){
            throw new Error()
        }

        res.locals.token=token
        res.locals.user=user
        next()

    }catch(e){
        res.status(401).send({ error : 'Please Authenticate'})
    }
}

export default CheckJWT
