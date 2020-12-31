const express=require('express');
require('./db/mongoose')

const app= express();

const userRouter=require('./routers/user');
const cardRouter=require('./routers/card');

app.use(express.json())

app.use(userRouter);
app.use(cardRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`);
})
