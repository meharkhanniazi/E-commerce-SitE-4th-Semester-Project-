import React , {useContext} from 'react';
import Menu from '../component/Menu';
import Footer from '../component/Footer'
import { useHistory } from 'react-router';
import {CardContext} from '../context/CardContext';
const Product=()=>{
    let {dispatch}=useContext(CardContext)
    
    let history=useHistory()
    const state=history.location.state
    console.log(state)
    
    return(
        <>
        <Menu />
      <div class="mt-5 pt-4">
        <div class="container dark-grey-text mt-5">

            {/* <!--Grid row--> */}
            <div class="row wow fadeIn">

                

{/* <!--Grid column--> */}
                
<div class="col-md-6 mb-4">

                    <img src={state.photo} class="img-fluid" alt="" />

                </div>
                {/* <!--Grid column--> */}
                
                {/* <!--Grid column--> */}
                <div class="col-md-6 mb-4">

                    {/* <!--Content--> */}
                    <div class="p-4">

                        <div class="mb-3">
                            <a href="">
                                <span class="badge purple mr-1" style={{backgroundColor:"purple",color:"#fff"}}>Safe</span>
                            </a>
                            <a href="">
                                <span class="badge blue mr-1" style={{backgroundColor:"blue",color:"#fff"}} >Fast</span>
                            </a>
                            <a href="">
                                <span class="badge red mr-1" style={{backgroundColor:"red",color:"#fff"}}>Authantic</span>
                            </a>
                        </div>

                        <p class="lead">
                            <span class="mr-1">
            
              </span>
                            <span style={{fontSize:"16px"}}>Rs {state.price}</span>
                        </p>

                        <p class="lead font-weight-bold">Description</p>

                        <p>{state.info}</p>

                        <div class="d-flex justify-content-left"  onClick={()=> dispatch({
                            type:"ADD TO CART",
                           payload:{
                            id:state.id,
                            product:state
                           }
                        })} >
                            {/* <!-- Default input --> */}
                            
                            <button style={{width:"500px",fontSize:'14px'}} class="btn btn-primary btn-md my-0 p ml-0 mt-2"   >Add to cart
                <i class="fas fa-shopping-cart ml-1"></i>
              </button>

                        </div>

                    </div>
                    

                </div>
                
                
                </div>
                
                </div>
                
                </div>
                <div class="container">
              <hr />

          </div>

<div class="row d-flex justify-content-center wow fadeIn">


<div class="col-md-6 text-center">

    <h4 class="my-4 h4 " style={{fontWeight:"bolder"}}>Additional information</h4>


    <p>{state.description} </p>

</div>


</div>



<div class="row wow fadeIn">


<div class="col-lg-4 col-md-12 mb-4">

    <img src={state.photo1} class="img-fluid" alt="" />

</div>


<div class="col-lg-6 col-md-6 mb-4 text-center">

    <img src={state.photo2} class="img-fluid" alt="" width="300" height="200" />

</div>



<div class="col-lg-6 col-md-6 mb-4">

    <img src={state.photo3} class="img-fluid" width="300" height="300" alt="" />

</div>


</div>


<Footer />

</>
)
}

export default Product;