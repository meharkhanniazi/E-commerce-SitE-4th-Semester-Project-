import React , {createContext , useReducer} from 'react';
import {CartReducer} from '../reducer/CartReducer'

export const CardContext=createContext()


const CardContextProvider=({children})=>{
    const [cart , dispatch]=useReducer(CartReducer , {
        shoppingCart:[],
        totalPrice:0,
        qty:0
    } )
    return(
        <>
        <CardContext.Provider value={{...cart , dispatch}}>
            {children}
        </CardContext.Provider>
        </>
    )
}

export default CardContextProvider;