const express=require('express');
require('./db/mongoose')
const cors=require('cors');

const app= express();

const allowedOrigins = ['localhost:3000/']
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors());
app.use(express.json())

const userRouter=require('./routers/user');
const cardRouter=require('./routers/card');
const characterRouter=require('./routers/character');

app.get('/',(req,res)=>{
    res.send('whhhoeuy');
});

app.use(userRouter);
app.use(cardRouter);
app.use(characterRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`);
})
