import React from 'react';

import Menu from '../component/Menu';
import Slider from '../component/Slider';
import Category from '../component/Category';
import Card from '../component/Card';

import Footer from '../component/Footer';

const Main=()=>{
    return(
        <>
        <Menu />
        <Slider />
        <Category />
        <Card />
        
        <Footer />
        </>
    )
}

export default Main;