
// import express from 'express';
// import cors from 'cors';
// import morgan from 'morgan';


// const app = express();
// app.use(cors());
// app.use(morgan('dev'))

// app.get('/', (req,res)=>{
//     res.send("Hello World")
// });


// export default app;

const express= require('express');
const cors=require('cors');
const morgan=require('morgan')


const app = express();
app.use(cors());
app.use(morgan('dev'))

app.get('/', (req,res)=>{
    res.send("Hello World")
});


module.exports=app;
