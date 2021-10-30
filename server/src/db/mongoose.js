const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
}).catch(function(e){
    console.log(e);
})
