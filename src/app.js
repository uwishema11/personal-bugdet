
const express= require('express');
const cors=require('cors');
const morgan=require('morgan');
const categoryRoute =require('./routes/categoryRoute')


const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))
app.use('/api/v1/category',categoryRoute)

app.get('/', (req,res)=>{
    res.send("Hello World")
});


module.exports=app;
