import React, { useState } from 'react';
import Menu from '../component/Menu';
import Footer from '../component/Footer';
import Cover from '../images/cover.png'
import { useHistory } from 'react-router-dom';

const About=()=>{
  let [email,setEmail]=useState("")
  let [message,setMessage]=useState("")
  let history=useHistory()
  const Mailer=(e)=>{
   e.preventDefault();
   fetch('http://localhost:5000/contact',{
     method:"Post",
     headers:{
       'Content-Type':'application/json',
       "Authorization":`Bearer Rs{localStorage.getItem("jwt")}`
     },
     body:JSON.stringify({
       email,
       message
     })
   })
   .then(res => res.json() )
   .then(res => console.log(res) )
   .catch(err => console.log(err))

   history.push('/')
  
  }
  
    return(
        <>
        <Menu />
        <br />
    <div class="contact3 py-5">
  <div class="row no-gutters">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="card-shadow">
            <img src={Cover} />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="contact-box ml-3">
            <h1 class="font-weight-light mt-2">Quick Contact</h1>
            <form class="mt-4" onSubmit={Mailer} >
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input required style={{fontSize:"14px"}} class="form-control" type="text" name="name" placeholder="name" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input required style={{fontSize:"14px"}} class="form-control" type="email" onChange={(e)=>{setEmail(e.target.value)}} name="user-email" placeholder="email address" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input required class="form-control" style={{fontSize:"14px"}} type="text" placeholder="phone" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <textarea required class="form-control" rows="3" style={{fontSize:"14px"}} placeholder="message" name="message"onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                  </div>
                </div>
                <div class="col-lg-12">
                  <button type="submit"  class="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2 "><span> SUBMIT</span></button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="card mt-4 border-0 mb-4">
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail pl-0">
                  <div class="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" />
                  </div>
                  <div class="">
                    <h6 class="font-weight-medium">Address</h6>
                    <p class="">71/1 Phase 1 
                      <br /> Nazimabad karachi</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail">
                  <div class="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" />
                  </div>
                  <div class="">
                    <h6 class="font-weight-medium">Phone</h6>
                    <p class="">+92 312 000 1547
                      <br />+92 324 296 0327</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail">
                  <div class="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" />
                  </div>
                  <div>
                    <h6 class="font-weight-medium">Email</h6>
                    <p class="">
                      techshoor@gmail.com
                      <br /> info@techshoor.store
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<br />
<Footer />
        </>
    )
}

export default About;