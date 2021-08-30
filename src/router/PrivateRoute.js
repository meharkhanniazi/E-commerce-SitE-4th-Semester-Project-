import React from 'react';
import { Redirect , Route } from 'react-router';

const PrivateRoutes=({path , component:Component})=>{
    let a=localStorage.getItem("jwt")
    

    return(
        <>
        <Route path={path}  render={()=>{
            if(a==="null"){
                return  <Redirect to='/login' />
            }else{
                return <Component />
            }
        }}/>
        </>
    )

}

export default PrivateRoutes;