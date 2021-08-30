import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";
  import Main from '../screens/Main';
  import Checkout from '../screens/Checkout';
  import Login from '../screens/Login';
  import Signup from '../screens/Signup';
  import Product from '../screens/Product';
import Laptop from '../component/Laptop';
import Computer from '../component/Computer';
import Cart from '../component/Cart';
import PrivateRoutes from './PrivateRoute';
import Order from '../component/Order'
import OrderSummary from '../component/OrderSummary'
import Phone from '../component/Phone';
import Contact from '../screens/Contact';
import About from '../screens/About';



const Router=()=>{
    return(
            <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoutes exact path="/order/success" component={Order} />
                    <Route exact path="/myorders" component={OrderSummary} />
                    <Route exact path="/signup" component={Signup} />
                    <PrivateRoutes exact path="/checkout" component={Checkout} />
                    <Route exact path="/laptop" component={Laptop} />
                    <Route exact path="/phone" component={Phone} />
                    <Route exact path="/computer" component={Computer} />
                    <PrivateRoutes exact path="/cart" component={Cart} />
                    <PrivateRoutes exact path="/product/:id" component={Product} />
                </Switch>
            
            </BrowserRouter>
        
        </>
    )
}

export default Router;