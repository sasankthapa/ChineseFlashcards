const mongoose=require('mongoose')

mongoose.connect(<string>process.env.MONGODB_URL,{
    ssl:true,
},(err)=>{
        console.log(err)
    if(err){
        throw new Error('Error connecting to database');
    }
});

