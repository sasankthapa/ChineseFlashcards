import { Model, Schema } from "mongoose";

const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')

interface IFolder{
    name:string;
    data:Array<string>;
}

interface IUser{
    username:string;
    email:string;
    password:string;
    folders:Array<IFolder>;
    tokens:Array<string>
}

interface IUserModels extends Model<IUser>{
}

const folderSchema=new Schema<IFolder>({
    name:{
        type:String,
        required:true,
        trim:true
    },
    data:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Character'
    }]
})

const userSchema=new Schema<IUser,IUserModels>({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        minlength:7,
        trim:true
    },
    folders:[folderSchema],
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
});

userSchema.methods.generateAuthToken = async function(){
    const user=this;

    const token=jwt.sign({_id :user._id.toString()},process.env.JWT_SECRET,{expiresIn:'5 hour'});

    user.tokens=user.tokens.concat(token);
    await user.save();
    return token
}

userSchema.methods.toJSON=function(){
    const user =this
    const userObject=user.toObject();
    
    delete userObject.password;
    delete userObject.tokens;
    return userObject
}

userSchema.statics.findByCredentials=async(username,password)=>{
    const user = await User.findOne({username});
    if(!user){
        throw new Error('Could not find user')
    }

    const isMatch=await bcrypt.compare(password,user.password);
    
    if(!isMatch){
        throw new Error('Unable to login');
    }
    return user
}

//Hash the plain text before saving
userSchema.pre('save',async function(next){
    const user=this;

    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,8)
    }

    next()
})


const User=mongoose.model('User',userSchema)

/*
try{
    const user=new User({
        email:'thapas@beloit.edu',
        username:'testlah',
        password:'newpassword'
    })
    console.log(user)
    user.save()
}catch(e){
    console.log(e)
}
*/

export default User;

