import '../login.css'
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../axios";
import toast from 'react-hot-toast';


function SignUpScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    password: "",
    correctionPassword:"",
    email: "",
  });
  const [disabled, setDisabled]=useState(true)
  useEffect(() => {
    if(formData.password.length >= 8 && formData.fullname.length >= 5 && formData.correctionPassword === formData.password){
      setDisabled(false)
    }
    else{setDisabled(true)}
  }, [formData]);
  return (
    <div name="auth" className="app">
      <div className="login">
        <div className="container">
            <p className="text-2xl font-bold pb-5 text-[#8E05C2]">Create Account</p>
          
          <form onSubmit={(e) => {
              e.preventDefault();

              register(formData)
                .then((res) => {
                  navigate("/signin");
                })
                .catch((err) => toast.error(err.response.data.message));
            }}>
            <label>User Name</label>
            <input controlid="formBasicName" onChange={(e) =>
                  setFormData({ ...formData, fullname: e.target.value })
                }
                type="name"
                placeholder="Enter your name" />
            <label>E-mail</label>
            <input controlid="formBasicEmail" onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="email"
                 placeholder="Enter your email"/>
            <label>Password</label>
            <input controlid="formBasicPassword" onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                type="password"
                placeholder="Enter password"/>
            <label>Repeat Password </label>
            <input onChange={(e)=>{setFormData({...formData,correctionPassword: e.target.value})}} controlid="formBasicPassword" type='password' placeholder="Enter your password"/>
            <button disabled={disabled} className='bg-black' variant="primary" type="submit">
                  Sign Up
          </button>
          </form>
          <div style={{display:"flex",flexDirection:"column"}}>
                <p style={{color:"red", display: formData.fullname.length>=5 && "none"}}>*Your fullname must be at least 5 characters.</p>
                <p style={{color:"red",display: formData.password.length>=8 && "none"}}>*Your password must be at least 8 characters.</p>
                <p style={{color:"red",display: formData.password===formData.correctionPassword && "none"}}>*Passwords do not match.</p>
          </div>
          <div className="bottom">
            <p>Have you created an account before?</p>
            <a id="resetpsw" href="/">Login</a>
          </div>
          
        </div>

      </div>
    </div>
  );
}

export default SignUpScreen;
