const express=require('express');
const app=express()
const mongoose=require('mongoose')
const PORT = 5000;
const {MONGOURI}=require('./key')
const cors=require('cors') 

app.use(cors("*"))
app.use(express.json())
require('./Model/user')
require('./Model/order')
require('./Model/product')

app.use(require('./data/data'))
app.use(require('./route/post'))
mongoose.connect(MONGOURI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Connected to Mongodb")
})
.catch((err)=>{
    console.log("Error while Connecting to Mongodb",err)
})



app.listen(PORT, ()=>{
    console.log(`Server is listening at ${PORT}` )
})