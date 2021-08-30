import React, { useContext, useEffect, useState } from 'react';
import Menu from '../component/Menu';
import {Paypal} from '../component/Paypal'
import Footer from '../component/Footer';
import { CardContext } from '../context/CardContext';
import { useHistory } from 'react-router-dom';








const Checkout=()=>{
    let history=useHistory()
    let user=JSON.parse(localStorage.getItem("User"))
    const {shoppingCart , qty , totalPrice ,dispatch }=useContext(CardContext)
  
    // console.log(dispatch)
   let [debit,setDebit]=useState(false)
   let [cash,setCash]=useState(false)
   let [Loader,setLoader]=useState(false)

   const createOrder = (data, actions) =>{
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01",
          },
        },
      ],
    });
  };

const onApprove=(data,actions)=>{
    return actions.order.capture();

}
   
    const placeOrder=(e)=>{

        e.preventDefault()
        fetch('http://localhost:5000/order',{
            method:"Post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer Rs {localStorage.getItem("jwt")}`
            },
            body:JSON.stringify({
                shoppingCart

            })
        }).then(res=>res.json())
        .then(arham => {console.log(arham)
        setLoader(true)
        })
        .catch(err=> console.log(err))
        dispatch({type:"ORDERDONE"})
        
        
        history.push('/order/success')        
        
    }
   
      

    
   
    
    return(
        <>
        <Menu />


        <div class="container wow fadeIn text-muted">

            {/* <!-- Heading --> */}
            <h2 class="my-5 h2 text-center">Checkout form</h2>

            {/* <!--Grid row--> */}
            <div class="row">

                {/* <!--Grid column--> */}
                <div class="col-md-8 mb-4">

                    {/* <!--Card--> */}
                    <div class="card">

                        {/* <!--Card content--> */}
                        <form class="card-body" onSubmit={placeOrder}>

                            {/* <!--Grid row--> */}
                            <div class="row">

                                {/* <!--Grid column--> */}
                                
                                {/* <!--Grid column--> */}

                                {/* <!--Grid column--> */}
                                                                {/* <!--Grid column--> */}

                            </div>
                            {/* <!--Grid row--> */}

                            {/* <!--Username--> */}
                            <div class="md-form input-group pl-0 mb-5">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                </div>
                                <input type="text" style={{fontSize:"14px"}} class="form-control py-0" placeholder="Username" aria-describedby="basic-addon1" value={user.name} />
                            </div>

                            {/* <!--email--> */}
                            <div class="md-form mb-5">
                                <label for="email" class="">Email (optional)</label>
                                <input type="text" id="email" class="form-control" style={{fontSize:"14px"}} placeholder="youremail@example.com" value={user.email} />
                            </div>

                            {/* <!--address--> */}
                            <div class="md-form mb-5">
                                <label for="address" class="">Address</label>
                                <input type="text" id="address" style={{fontSize:"14px"}} class="form-control" placeholder="1234 Main St" value={user.address} />
                            </div>

                            {/* <!--address-2--> */}
                            <div class="md-form mb-5">
                                <label for="address-2" class="">Address 2 (optional)</label>
                                <input style={{fontSize:"14px"}} type="text" id="address-2" class="form-control" placeholder="Apartment or suite" />
                            </div>

                            {/* <!--Grid row--> */}
                            <div class="row">

                                {/* <!--Grid column--> */}
                                <div class="col-lg-4 col-md-12 mb-4">

                                    <label for="country">Country</label>
                                    <select style={{fontSize:"14px"}} class="custom-select d-block w-100" id="country" required>
                    <option value="">Choose...</option>
                    <option>Pakistan</option>
                  </select>
                                    <div class="invalid-feedback">
                                        Please select a valid country.
                                    </div>

                                </div>
                                {/* <!--Grid column--> */}

                                {/* <!--Grid column--> */}
                                <div class="col-lg-4 col-md-6 mb-4">

                                    <label for="state">State</label>
                                    <select style={{fontSize:"14px"}} class="custom-select d-block w-100" id="state" required>
                    <option value="">Choose...</option>
                    <option>Karachi</option>
                  </select>
                                    <div class="invalid-feedback">
                                        Please provide a valid state.
                                    </div>

                                </div>
                                {/* <!--Grid column--> */}

                                {/* <!--Grid column--> */}
                                <div class="col-lg-4 col-md-6 mb-4">

                                    <label for="zip">Zip</label>
                                    <input style={{fontSize:"14px"}} type="text" class="form-control" id="zip" placeholder="" required />
                                    <div class="invalid-feedback">
                                        Zip code required.
                                    </div>

                                </div>
                                {/* <!--Grid column--> */}

                            </div>
                            {/* <!--Grid row--> */}

                            <hr />
                            {/* <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required> */}
{/* <label class="custom-control-label" for="debit">Debit card</label> */}

                            <div class="col-lg-4 col-md-6 mb-4">
                                <label>Payment</label>
                                <div    class="custom-control custom-radio" style={{minWidth:"220%",border:"1px solid gray",padding:"10px",marginLeft:"10px"}}>
                                    {/* <h4>Credit / Debit Card</h4> */}
                                    <input onChange={(e)=> setDebit((e.target.checked))} style={{marginLeft:"50px"}} id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                                    <label style={{marginLeft:"-10px"}} class="custom-control-label pl-3" for="debit"><div>
                                        <div>Credit / Debit Card</div>
                                        {debit ? <div style={{marginLeft:"20px",padding:"15px 30px"}}> <Paypal /> </div> : <div/>}
                                        </div>
                                        </label> 
                                    
                                </div>
                                <br />

                                <div   class="custom-control custom-radio" style={{minWidth:"220%",border:"1px solid gray",padding:"10px",marginLeft:"10px"}}>
                                <input id="cash" onChange={(e)=>{
                                    setCash((e.target.checked))
                                    
                                    setDebit(false)
                                
                                } }   name="paymentMethod" type="radio"   className="custom-control-input" required />
                                <label style={{marginLeft:"-10px"}} class="custom-control-label pl-3 text-muted" for="cash">
                                   
                                    <h4 className="text-muted" style={{marginTop:"-5px"}}>Cash</h4>
                                    <div style={{marginTop:"-12px",fontSize:"12px",fontWeight:"bolder"}}>PAY BY CASH</div>
                                    <div style={{fontSize:"12px"}}>Consider payment upon ordering for contactless delivery. You can't pay by a card to the rider upon delivery.</div>
                                    </label> 
                                </div>

                            </div>


                      

                           
                            <hr class="mb-4" />
                            <button class="btn btn-primary btn-lg btn-block" style={{fontSize:"14px"}} >Place Order</button>

                        </form>

                    </div>
                    {/* <!--/.Card--> */}

                </div>
                

            {
                !qty==0 ? 
              
                <div class="col-md-4 mb-4">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
    <span class="text-muted">Your cart</span>
    <span class="badge badge-secondary badge-pill" style={{backgroundColor:"#AA66CC"}}>{qty}</span>
</h4>



<ul class="list-group mb-3 z-depth-1">
    {
        shoppingCart.map(cart => {
            return (
                <>
                <li class="list-group-item d-flex justify-content-space-around lh-condensed">
        <div>
            
            <h6 class="my-0">{cart.name}</h6>
            <small class="text-muted" style={{fontSize:"12px"}}>Price</small>
        <span class="text-muted" style={{marginLeft:"115px"}}>Rs {cart.price}</span>
        <br />
        <small class="text-muted" style={{fontSize:"12px"}}>Quantity</small>
        <span class="text-muted" style={{marginLeft:"115px",textAlign:"end"}}>{cart.qty}</span>
        </div>
    </li>
  
    
    </>
    
            )
        })
    }
    <li class="list-group-item d-flex justify-content-between">
        <span>Total (USD)</span>
        <strong>Rs {totalPrice}</strong>
    </li>
 
</ul>

</div>
:
<div />
}


                </div>
                </div>


<Footer />
        </>
    )
}

export default Checkout;