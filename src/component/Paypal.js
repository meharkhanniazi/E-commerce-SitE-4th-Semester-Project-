import React, { useEffect, useRef } from 'react';

export  function Paypal()
{
    const paypal=useRef()
    useEffect(()=>{
        window.paypal.Buttons({
            createOrder:(data,action,err)=>{
                return action.order.create({
                    intent:"CAPTURE",
                    purchase_units:[
                        {
                            description:"Cool looking table",
                            amount:{
                                
                                value:650.00
                            }
                        }
                    ]
                });
            },
            onApprove: async (data , action) => {
                const order=await action.order.capture();
                console.log(order)
            },
            onError:(err)=>{
                console.log(err)
            }
        }).render(paypal.current)
    },[])

    return(
        <div>
            <div ref={paypal}></div>
        </div>
    )
}