import React, { useEffect, useState } from 'react';
import { Form, Input  } from 'antd';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Menu from '../component/Menu';
import Footer from '../component/Footer';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router';
import Loading from '../component/Spinner';
import Logo from '../images/logo.png';

const Signup=()=>{
    let history=useHistory()
    let [name,setName]=useState("")
    let [address,setAddress]=useState("")
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let [message,setMessage]=useState("");
    let [error,setError]=useState("");
    let [succ,setSucc]=useState(false)
    let [err,setErr]=useState(false)
    let [click,setClick]=useState(false)
  
  

        const postData=()=>{
            setClick(true)
            setErr(false)
            setSucc(false)
            fetch("http://localhost:5000/signup",{
                method:"Post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,
                    email,
                    address,
                    password
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const { error, message } = data
                if (message) {
                    console.log(message)
                    setMessage(message)
                    setSucc(true)
                    setClick(false)
                } else if (error) {
                    console.log(error)
                    setError(error)
                    setErr(true)
                    setClick(false)
                }
                
            })
            .catch(err => console.log(err))
        }
        
   
    return(
        <>
     
        <Menu />
        <br />
        {/* <br /> */}
        <div  style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", marginTop: "10px",marginBottom:"85px" }}>


<div style={{ backgroundColor: "#FAFAFA", width: "350px", height: "500px", display: "flex", flexDirection: "column" }}>
    <Paper variant="outlined" square elevation={20} >
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "13px" }}>
            <img src={Logo} />
        </div>
        <div style={{ textAlign: "center", marginTop: "5px" }}>
            <div style={{ color: "#8E8E8E", fontWeight: "700", fontSize: "16px" }}>Sign up to see products and</div>
            <div style={{ color: "#8E8E8E", fontWeight: "700", fontSize: "16px" }}> share with your friends</div>
        </div>
        
        <div style={{ textAlign: "center", color: "gray", marginTop: "10px" }}>
            <span >  _____________  </span>
            <span >OR</span>
            <span >   _____________  </span>

        </div>
        <div style={{ textAlign: "center", padding: "17px 48px" }}>
            <Form >
                <Form.Item
                    style={{ width: "250px", marginBottom: "7px" }}
                    name="Mobile Number or Email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    >

                    <Input placeholder="Mobile Number or Email"   />
                </Form.Item>
                <Form.Item
                    style={{ width: "250px", marginBottom: "7px" }}
                    name="Full Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Full Name!',
                        },
                    ]}
                    onChange={(e)=>{setName(e.target.value)}}

                >
                    <Input placeholder="Full Name" />
                </Form.Item>
                <Form.Item
                    style={{ width: "250px", marginBottom: "7px" }}
                    name="address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Address!',
                        },
                    ]}
                    onChange={(e)=>{setAddress(e.target.value)}}

                >
                    <Input placeholder="Address"  />
                </Form.Item>
                <Form.Item
                    style={{ width: "250px", marginBottom: "7px" }}
                    name="Password"
                    type="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password',
                        },
                    ]}
                    onChange={(e)=>{setPassword(e.target.value)}}

                >
                    <Input placeholder="Password" type="password"  />
                </Form.Item>
            </Form>
        </div>
        <div style={{ textAlign: "center", marginTop: "-8px" }}>
            <Button variant="contained"  style={{ backgroundColor: "#0095F6", color: "#fff", fontWeight: "600", width: "250px" }}>
                <span style={{ fontSize: "14px", textTransform: "capitalize" }} onClick={postData}>Signup</span>
            </Button>
        </div>
        <div style={{ textAlign: "center", marginTop: "7px" }}>
            <div style={{ color: "#8E8E8E", fontSize: "12px" }}>By signing up, you agree to our,<b>Terms</b> , <b>Data</b></div>
            <div style={{ color: "#8E8E8E", fontSize: "11px" }}><b>Policy </b> and <b>Cookies Policy </b></div>
        </div>

    </Paper>
    <div >

        <Paper variant="outlined" square elevation={20} style={{ width: "400", height: "50px", marginTop: "10px" }} >
            <div style={{ display: "flex", justifyContent: "center", marginTop: "13px" }}>

                <div>
                    <span style={{ color: "262626" }}>Don't have an account? </span><span style={{ fontSize: "15px", fontWeight: "900", color: "#0095F6",cursor:"pointer" }} onClick={()=>{history.push('/login')}} > Sign In </span>
                </div>
            </div>
        </Paper>
       

        {
                        message ?  <Snackbar  open={succ} autoHideDuration={6000} >
                        <Alert  severity="success">
                            {message}
                         </Alert>
                    </Snackbar>
                    :
                    click ? <Loading />:<div />
                    }
                   
                    <Snackbar open={err} autoHideDuration={6000} onClose={()=>{setErr(false)}} >
                    <Alert severity="error">{error}</Alert>   
                    </Snackbar>
    </div>
    
    
</div>









</div>
<div > 


<Footer />
</div>
        </>
    )
}

export default Signup;