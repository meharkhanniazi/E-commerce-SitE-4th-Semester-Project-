const mongoose=require('mongoose')
const Schema=mongoose.Schema

const productSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    img:{
        type:String,
        default:"no photo"
    }
})

mongoose.model("Product",productSchema)