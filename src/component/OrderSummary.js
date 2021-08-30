import React, { useEffect, useState } from 'react';
import moment from 'moment';

import Menu from './Menu';


const OrderSummary = () => {
    const [data,setData]=useState([])
    const [res,setRes]=useState([])
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
            // console.log(mypost)
            setData(mypost)
            
            
        })
        .catch(err => console.log(err))
        
        // const a=data.map((item)=>{
            //     const obj=[
                //         item.shoppingCart.flat(Infinity),item._id,item.createdAt
                //     ]
                //     return obj
                    
                        
                        
                        
                        // })
                        
                        
                    },[])
                    const a=data.map((item)=>{
                        const obj=[
                            item.shoppingCart.flat(4),item._id,item.createdAt
                        ]
                       return obj
                            
                    }) 
                    // console.log(a)
                    const arham=[]
                    for (let i=0 ; i<a.length ; i++){
                        
                        let b=a[i][0][0]
                        b['id']=a[i][1]
                        b['createdAt']=a[i][2]
                        arham.push(b)
                        // console.log([].push(b))
                        // const arham=[]
                        // a[i][0][0].id=a[i][1]
                        // a[i][0].createdAt=a[i][2];
                        // // // return a
                        // console.log(a)
                    }
                    console.log(arham)
                //    console.log(Object.values(a))
                    // for(let i=0 ;i<a.length;i++){
                    //     if(typeof(a[i]==Arr))
                    // }
                    // const b=a.findIndex()
                    
                    // const b=a.filter((item) => item.shift())
                  

                    // const b=obj[0].map(cart => {
                    //     return({
                    //             name:cart.name,
                    //             price:cart.photo,
                    //             id:obj[1],
                    //             createdAt:obj[2]
                    //         })
                    //     })
                    //     setRes(b)                    
              
                    
                        // console.log(res)

                   
                        // console.log(moment().format('llll'));               

//     
//       
             return(
                 <>
                 <Menu />
                 {/* <br /> */}
                     <div className="container" style={{marginTop:"60px"}}>
            <h4>Your Orders</h4>
            <hr />
            {/* <br /> */}
            {!data ? 
            <div />
                :
                arham.map(item =>{
                    return(
                        <>
                        <div>
            <div style={{display:"flex",marginBottom:"30px"}}>
                <div>
                    <img width="200" height="150" src={item.photo}/>
                </div>
                <div style={{display:"flex",flexDirection:"column",marginLeft:"70px",marginTop:"20px"}}>
                    <div>
                        <span className="text-muted" style={{fontSize:"15px"}}>Status</span>
                        <span className="ml-4" style={{color:"#758696",marginLeft:"200px"}}>Not Processed</span>
                    </div>
                    <div>
                        <span className="text-muted" style={{fontSize:"15px"}}>Order #</span>
                        <span className="ml-4" style={{color:"#758696"}}>{item.id}</span>
                    </div>
                    <div>
                        <span className="text-muted" style={{fontSize:"15px"}}>Quantity</span>
                        <span className="ml-4" style={{color:"#758696"}}>{item.qty}</span>
                    </div>
                    <div>
                        <span className="text-muted" style={{fontSize:"15px"}}>Order on</span>
                        <span className="ml-4" style={{color:"#758696"}}>{moment(item.createdAt).format('llll')}</span>
                    </div>
  
                    <div className="mb-5">
  
                        <span className="text-muted" style={{fontSize:"15px"}}>Order Total</span>
                        <span className="ml-4" style={{color:"#758696"}}>{item.price * item.qty}</span>
                    </div>
                </div>
            </div>
            
         
            
            </div>
                        </>
                    )
                })
        }
        </div>
                 </>
             
         

  

        
  
     
    );
  

  
};
export default OrderSummary;