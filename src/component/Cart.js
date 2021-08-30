import React , {useContext} from 'react';
import {CardContext} from '../context/CardContext';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Menu from './Menu';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const Cart=()=>{
    let history=useHistory()
    let {shoppingCart , totalPrice , qty , dispatch}=useContext(CardContext)
    console.log(shoppingCart)
    return(
        <>
        <Menu />
        <div className="container-fluid"  style={{width:"100%",display:"flex",flexWrap:"wrap",alignItems:"flex-start"}}>
            <div  style={{marginTop:"100px",width:"75%",border:"1px solid #fafafa",borderRadius:"5px"}}>
                {qty===0 ? 
                                     
               <span className="container ml-5 ">Sorry your cart is currently</span>
            
            :
            shoppingCart.map(cart =>{
                console.log("CART",cart)
                return(
                    <div  style={{display:"flex",alignItems:"center",background:"#fff",padding:"15px 20px"}} key={cart.id}>
                        <span style={{display:"inline-block",width:"80px",cursor:"pointer",height:"80px"}}>
                            <img style={{width:"100%",height:"100%"}} src={cart.photo} alt="image not found" />
                        </span>
                        <span style={{width:"150px",padding:"0 15px",fontWeight:"bold",fontSize:"14px",cursor:"pointer",display:"inline-block"}}>{cart.name}</span>
                        <span style={{display:"inline-block",width:"120px",paddin:"0 15px",textAlign:"center",cursor:"pointer",fontWeight:"bold",color:"black"}} className="cart-product-price">{cart.price}</span>
                        <span onClick={()=> dispatch({
                            type:"INCREMENT",
                            id:cart.id,
                            cart
                                
                        
                        })} style={{display:"inline-block",width:"40px",height:"40px",lineHeight:"40px",cursor:"pointer",textAlign:"center",border:"1px solid blue",fontSize:"14px",color:"black",borderRadius:"3px"}}><AddIcon /></span>
                        <span className="cart-quantity" style={{display:"inline-block",padding:"0 15px",fontSize:"15px",width:"70px",textAlign:"center"}}>{cart.qty }</span>
                        <span className="dec" onClick={()=>{
                            dispatch({
                                type:"DECREMENT",
                                id:cart.id,
                                cart
                            })
                        }} style={{display:"inline-block",width:"40px",height:"40px",cursor:"pointer",lineHeight:"40px",textAlign:"center",border:"1px solid rgb(187,58,58)",fontSize:"14px",color:"rgb(187,58,58)",borderRadius:"3px"}}><RemoveIcon /></span>
                        <span className="cart-total-price" style={{display:"inline-block",width:"150px",cursor:"pointer",padding:"0 15px",textAlign:"center"}}>{(cart.price * cart.qty)}</span>
                        <span className="delete-product" onClick={()=>{
                             dispatch({
                                type:"DELETE",
                                id:cart.id,
                                cart
                            })

                        }} style={{border:"none",color:"rgb(187,58,58)",cursor:"pointer"}} ><DeleteIcon /></span>
      

                </div>
            )
        })
        

            }
                    
                </div>

            {
                qty===0 ?
                <div />
                :
                <div className="cart-summary">

                <div className="summary">
                    <h3>Cart Summary</h3>
                    <div className="total-items">
                        <div className="item">
                            Total Items

                        </div>
                        <div className="item-count">{qty}</div>

                    </div>
                    <div className="total-price-section">
                        <div className="title">Total Price</div>
                        <div className="items-price" >Rs{totalPrice}.00</div>
                    </div>
                        <Button variant="contained" size="large" color="primary" className="mt-3 ml-1" style={{fontSize:"12px"}} onClick={()=>{history.push('/checkout')}}>Go to Checkout</Button>
                </div>
                </div>
            }
        </div>
        </>
    )
}

export default Cart;