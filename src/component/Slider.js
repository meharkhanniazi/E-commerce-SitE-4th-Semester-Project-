import React from 'react';
import bumat from './images/bumat.png';
import {Carousel} from 'react-bootstrap';
import certified from './images/certified.png';
import efas1 from './images/efas1.png';
import {Button} from '@material-ui/core';

const Slider=()=>{
    return(
        <>
        <Carousel >
  <Carousel.Item style={{height:"300px"}}>
    <img
        
      className="d-block w-100"
      src={bumat}
      alt="First slide"
    />
    {/* Built By Microsoft , Google , IBM Certified Developers */}
  




    <Carousel.Caption>
    <div style={{marginTop:"-220px",color:"gray"}}>

<h5 style={{fontSize:"35px"}} >Built Using Most Advanced Technologies</h5>
<p>MongoDb | BootStrap | React</p>
<p>Built With ❤</p>
<Button style={{border:"3px solid gray",color:"black"}} variant="outlined">CHECK WORK NOW <span><i class="fab fa-github mr-2 mx-2"></i></span></Button>
</div>     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{height:"300px"}}>
    <img
        
      className="d-block w-100"
      src={efas1}
      alt="Second slide"
    />

    <Carousel.Caption >
        <div style={{marginTop:"-220px"}}>

      <h5 style={{fontSize:"40px",color:"white"}} >Easy | Fast | Secure Online Store</h5>
      <p >Shop For All the Electronic Things</p>
      <p >      The most Trusted Site        </p>
      <Button style={{border:"3px solid white",color:"white"}} variant="outlined">Shop Now   <span><i class="fa fa-shopping-bag mx-2" aria-hidden="true"></i></span></Button>
        </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{height:"300px",backgroundColor:"gray"}}>
    <img
    style={{backgroundColor:"gray"}}
        
      className="d-block w-100"
      src={certified}
      alt="Third slide"
    />

    <Carousel.Caption>
    <div style={{marginTop:"-230px",color:"gray"}}>

<h5 style={{fontSize:"35px"}} >Built By Microsoft , Google , IBM Certified  Developers</h5>

<Button style={{border:"3px solid gray",color:"black"}} size="large" variant="outlined">TEAM <span><i class="fa fa-users mx-2" aria-hidden="true"></i></span></Button>
</div>     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </>
    )
}

export default Slider;