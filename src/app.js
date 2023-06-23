
const express= require('express');
const cors=require('cors');
const morgan=require('morgan');
const categoryRoute =require('./routes/categoryRoute');
const envelopeRoute=require('./routes/envelopeRoute');
const transactionRoute= require('./routes/transactionRoute')


const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))
app.use('/api/v1/category',categoryRoute);
app.use('/api/v1/envelope',envelopeRoute);
app.use('/api/v1/transaction',transactionRoute);

app.get('/', (req,res)=>{
    res.send("Hello World")
});


module.exports=app;
