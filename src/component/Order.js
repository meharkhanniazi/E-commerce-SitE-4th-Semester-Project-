import React, { useEffect, useState } from 'react';
import Menu from '../component/Menu';
import Slider from '../component/Slider';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {Button} from '@material-ui/core'
import Footer from './Footer';
import { useHistory } from 'react-router';
import Spinner from '../component/Spinner'
const Order=()=>{
    let history=useHistory()
    let [data,setData]=useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/myorders',{
            method:"Get",
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${localStorage.getItem("jwt")}`
            }
        })
        .then(res => res.json())
        .then(({mypost}) => {
            setData(mypost)
          
        })
        .catch(err => console.log(err))
    },[]);

    const a=data.map(res => res._id)
    const b=a.slice(-1)
  
           
           
    return(
        
        <>
        <Menu />
       
        {
            b[0] ? 
            <>
             
        <div className="text-center" style={{marginTop:"100px"}}>
            <CheckCircleIcon style={{fontSize:"100px",color:"green"}} />
        </div>
         
            <div className="text-center mt-2">
            <h6 style={{fontSize:"14px"}}>Thank You For Your Order.</h6>
            <h6 className="text-muted" style={{fontSize:'12px'}}>Order  # <span className="text-dark" style={{fontSize:'14px'}}>{b[0]}</span> is complete.</h6>
            <h6 className="text-muted" style={{fontSize:'12px'}}>A confirmation email will be sent to you shortly.</h6>
            </div>
            
        <div className="text-center mt-5 mb-5">
            <span className="ml-2"  >

            <Button className="text-dark p-2 pl-4 pr-4 " onClick={()=>{history.push("/myorders")}}  variant="outlined" style={{fontSize:"12px",textTransform:"capitalize"}} >Manage Orders</Button>
            </span>
            <span className="ml-3" onClick={()=>{history.push('/')}}>

            <Button className="text-dark p-2 pl-4 pr-4  " variant="outlined" style={{fontSize:"12px",textTransform:"capitalize"}} >Continue Shopping</Button>
            </span>
        </div>
<div style={{marginTop:"300px"}}>
        <div style={{marginTop:"50px"}}>

        <Footer />
        </div>
</div>

            </>
            :
            <div><Spinner /></div>
        }
       
        </>
        )
    }
    
    export default Order;