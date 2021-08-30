import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import CustomizedMenus from './Dropdown';
import { CardContext } from '../context/CardContext';
import logo from '../images/logo.png'


const Menu = () => {
  const { qty } = useContext(CardContext)
  let a = JSON.parse(localStorage.getItem("User"))
  return (
    <>
      <div class="bs-example">
        <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
          <Link to="/" class="navbar-brand">
            <img src={logo} style={{ width: "90px", height: "30px" }} alt="CoolBrand" />
          </Link>
          <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
              <Link to="/" class="nav-item nav-link active">Home</Link>
              <Link to="/about" class="nav-item nav-link">About us</Link>
              <Link to="/contact" class="nav-item nav-link">Contact us</Link>
              <Link to="/cart" class="nav-item nav-link"><i class="fas fa-shopping-cart mr-1"></i>Cart <span style={{background:"red",padding:"1px 5px",color:"white"}}>{qty}</span></Link>
              
            </div>

            <div class="navbar-nav ml-auto">
              {
                !a ? <Link to="/login" class="nav-item nav-link">Login/Signup</Link>
                  :
                  <Chip size="Large" avatar={<Avatar style={{ backgroundColor: "blue" }}><span style={{ color: "#fff", fontWeight: "bolder", fontSize: "16px" }}>{(a !== "null") ? a.name.slice(0, 1).toUpperCase() : <div></div>}</span></Avatar>} label={<CustomizedMenus />} />

              }
            </div>


          </div>
        </nav>
      </div>
      {/* <Navbar fixed="top" bg="white" variant="light" expand="lg" style={{backgroundColor:"#212529"}}>
  <Container>
    <Navbar.Brand   ><Link to="/"><img  style={{width:"60%",marginTop:"-6px"}} src={logo} /></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className="ml-auto">
      
   

        <Nav.Link ><Link to="/">Home</Link></Nav.Link>
        <div style={{display:"flex"}}>
         <div>
        <Nav.Link >
          <Link to="/cart">
        <span style={{backgroundColor:"red",padding:"2px",color:"#fff",marginLeft:"2px"}} ><span class="text-center" > {qty} </span > </span>
         <i class="fas fa-shopping-cart"></i>
        <span class="clearfix d-none d-sm-inline-block"> Cart </span>
          </Link>
        </Nav.Link>
      
        </div> 
        </div>
       
         
  
        <Nav.Link style={{marginTop:"-5px"}}>
         {
           a ? 
           <Chip size="medium" avatar={<Avatar style={{ backgroundColor: "blue" }}><span style={{ color: "#fff", fontWeight: "bolder", fontSize: "16px" }}>{(a!== "null") ? a.name.slice(0,1).toUpperCase() : <div></div> }</span></Avatar>} label={ <CustomizedMenus /> } />
           :<div>

           <Link to="/login" style={{marginTop:"-50px"}}>Login/Signup</Link>
           </div>
         } 
      
      </Nav.Link>
      
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */}

      <br />
      <br />

    </>
  )
}

export default Menu;