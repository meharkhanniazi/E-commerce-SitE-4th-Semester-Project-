import React from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from '../component/images/efas1.png'
import {Paper , Button } from '@material-ui/core'
import { Form, Input } from 'antd';
import { useHistory } from 'react-router';
import { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import tech from '../images/logo.png'

const Login=()=>{
  let history=useHistory()
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")
  let [err,setErr]=useState(false)
  let [error,setError]=useState("")

  const postData=()=>{
    setErr(false)
    fetch("http://localhost:5000/signin",{
      method:"Post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data.error){
        setError(data.error)
        setErr(true)
    }else{
      localStorage.setItem("jwt",data.token)
      localStorage.setItem("User",JSON.stringify(data.savedUser))
        history.push("/")
    }
    } )
    .catch(err=>console.log(err))
  }
    return(
        <>
         <div class="loginMain text-center align-content-center">
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
             
                <div className="lginComp">
                    <div>
                    <Paper variant="outlined" square elevation={20} style={{width:"300px",height:"290px",backgroundColor:"rgb(255, 255, 255)",borderBottomColor:"rgb(219, 219, 219)"}}>
                   <div>
                       <div>
                           <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                              <img src={tech} />
                           </div>
                       </div>
                      </div>
                      
                      <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>
                         <div>
                         <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
     
    > 
      <Form.Item
        style={{width:"250px"}}
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
        onChange={(e)=>{setEmail(e.target.value)}}
      >
        <Input  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        style={{width:"250px"}}
      
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
        onChange={(e)=>{setPassword(e.target.value)}}

      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
         
        />
      </Form.Item>

     
     
    </Form>

                          {/* <Arham   /> */}
                            {/* <br /> */}
                            <Button variant="contained" onClick={postData} style={{width:"250px",backgroundColor:"#2196f3"}}>
      <span style={{fontSize:"14px",fontWeight:"900",color:"#fff"}}>Login in</span>
    </Button>

                        </div> 
      
                         
 </div>
                {/* <div style={{textAlign:"center",color:"gray",marginTop:"20px"}}>
                    <span>_____________</span>
                    <span>OR</span>
                    <span>_____________</span>

                </div> */}
                {/* <div>
                    <span style={{fontWeight:"900",color:"blue",marginTop:"20px",display:"flex",justifyContent:"center"}}>Login with Facebook</span>
                </div>
                <div>
                    <span style={{fontSize:"12px",color:"#00376B",marginTop:"20px",display:"flex",justifyContent:"center"}}>Forgot password</span>
                </div> */}
               
                </Paper>
                    </div>
                    <div >

                <Paper variant="outlined" square elevation={20} style={{width:"400",height:"50px",marginTop:"10px"}} >
                <div style={{display:"flex",justifyContent:"center",marginTop:"13px"}}>

                <div>
                    <span style={{color:"262626"}}>Don't have an account? </span><span style={{fontSize:"15px",fontWeight:"900",color:"#0095F6",cursor:"pointer"}} onClick={()=>{history.push('/signup')}} > Sign up</span>
                </div>
                </div>
                </Paper>
            </div>
            <Snackbar open={err} autoHideDuration={6000} >
                    <Alert severity="error" style={{fontSize:"12px"}}>{error}</Alert>   
                    </Snackbar>

                    {/* <div >
                        <div style={{textAlign:"center",marginTop:"5px",fontWeight:"500"}}>Get  the app</div>
                        <div style={{display:"flex",justifyContent:"center",marginTop:"8px"}}>
                        <div ><img style={{marginRight:"5px"}} width="150" src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" /></div>
                            <div><img width="150" src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" /></div>
                        </div>
                    </div> */}
                </div>
                

              

            </div>
        </div>
        </>
    )
}

export default Login;