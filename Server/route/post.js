const mongoose=require('mongoose')
const express=require('express')
const router=express.Router()
const User=mongoose.model("User")
const jwt=require('jsonwebtoken');
const {JWT_SECRET}=require('../key')
const bcrypt=require('bcrypt')
const requiredLogin=require('../middleware/requiredLogin')
const Order=mongoose.model("Order")
const nodemailer=require("nodemailer")

// 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


// const transporter=nodemailer.createTransport(sendgridTransport({
//     auth:{
//         api_key:"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"
//     }
// }))

router.get('/protected',requiredLogin,(req,res)=>{
    res.send("Arham SSP")
})

router.post('/signup',(req,res)=>{
    // console.log(req.body)
    const {name , email , address , password}=req.body
    if(!email || !name || !address || !password){
        return res.status(422).json({error:"Please fill all the fields"})
    }
    User.findOne({email:email})
    .then(savedUser => {
        if(savedUser){
            return res.status(422).json({error:"Email Already exists"})
        }
        bcrypt.hash(password,13)
        .then(hashedPassword => {
            const user=new User({
                name,
                address,
                email,
                password:hashedPassword
            })
            user.save()
            .then(doMatch => {
                if(doMatch){
                    return res.status(200).json({message:"Successfully Saved"})
                }
            })
            .catch(err =>{
                console.log(err)
            })
    
        })
            
    })
    .catch(err =>{
        console.log(err)
    })
    
})


router.post('/signin',(req,res)=>{
    const {email , password}=req.body
    if(!email || !password){
        return res.status(422).json({error:"Please Fill all the fields"})
    }
    User.findOne({email:email})
    .then(savedUser => {
        if(!savedUser){
            return res.status(404).json({error:"Invalid email and password"})
        }
        bcrypt.compare(password , savedUser.password)
        .then(doMatch =>{
            if(doMatch){
                const token=jwt.sign({_id:savedUser._id},JWT_SECRET)
                res.json({token , savedUser})
               
            //   return  res.status(200).json({message:"you are Successfully Login"})
            }
            else{
            return res.status(404).json({error:"Invalid email and password"})

        }
    })
    .catch(err =>{
        console.log(err)
    })
})
.catch(err =>{
    console.log(err)
})
})
router.post('/order',requiredLogin  ,(req,res)=>{
  var product=Object.values(req.body)
  const post=new Order({
      shoppingCart:product,
      orderBy:req.user,
      createdAt:new Date()
  })
  post.save()
  .then(data =>{ 
    // Step 1
    let transport=nodemailer.createTransport ({
        service:'gmail',
        auth:{
            user:'techshoor@gmail.com',
            pass:'Tcc#5430An.'
        }
    });
    let mailOption={
        from:'techshoor@gmail.com',
        to:req.user.email,
        subject:'Your Order has been Placed Successfully',
        html:`<h3>Your Order Details</h3> <p>Hi ${req.user.name}</p> <p>Great Choice.Your Order will be delivered to you within an hour.</p> <p>If you have any questions, feel free to contact us at any time via email at techshoor@gmail.com.</p>`
    };
    transport.sendMail(mailOption,function(err,data){
        if(err){
            console.log("Error occurs",err)
        }else{
            console.log("Email Sent!!!")
        }
    })
    res.send([data.shoppingCart,data._id,data.createdAt])
    
    // res.json({shopping:data.shoppingCart,id:data._id,createdAt:data.createdAt})
    
    })
  .catch(err => console.log(err))

})

router.get('/myorders',requiredLogin,(req,res)=>{
    Order.find({orderBy:req.user._id})
    // .populate(" _id")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err => console.log(err))

})


router.post('/contact',requiredLogin,(req,res)=>{
    const {email , message}=req.body
    let transport=nodemailer.createTransport ({
        service:'gmail',
        auth:{
            user:'techshoor@gmail.com',
            pass:'Tcc#5430An.'
        }
    });
    let mailOption={
        from:email,
        to:'techshoor@gmail.com',
        subject:'Your Have a New Message',
        html:`<p>Hi TechShoor Store</p> <p>${message}</p><br /> <p>From ${email}</p>`
    };
    transport.sendMail(mailOption,function(err,data){
        if(err){
            console.log("Error occurs",err)
        }else{
            console.log("Email Sent!!!")
        }
    })

    res.send("Okk")
})

module.exports=router