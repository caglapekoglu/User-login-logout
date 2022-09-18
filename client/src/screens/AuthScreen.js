import React,{useState} from "react";
import '../login.css'
import { Link, useNavigate } from "react-router-dom"
import { login } from "../axios";
import toast from 'react-hot-toast';
function AuthScreen({setUser}) {
    const navigate = useNavigate();
const  [formData, setFormData] = useState({
    email:"",
    password:""
});
  return (
    <div name="auth" className="app">
      <div className="login">
        <div className="container">
            <p className="text-2xl font-bold pb-5 text-[#8E05C2]">Login</p>
          <div className="top">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-apple"></i>
          </div>
          <p className="divider"> <span>Or</span></p>
          <form onSubmit={(e) => {
              e.preventDefault();

              login(formData)
                .then((res) => {
                  localStorage.setItem("user", JSON.stringify(res.data.user));
                  setUser(res.data.user);
                  navigate("/");
                })
                .catch((err) => {
                  toast.error(err.response.data.message)
                });
            }}>
            <label htmlFor="email">E-mail</label>
            <input onChange={(e)=>setFormData({...formData, email:e.target.value})} type='email' placeholder="Enter your email"/>
            <label>Password</label>
            <input onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                type="password" placeholder="Enter your password"/>
            <div className="remember">
              <input type='checkbox' defaultChecked={true}/>
              <p>Remember Me</p>
            </div>
            <button className="bg-black" disabled={formData.email==="" || formData.password===""} type="submit" variant="primary" >Log In</button>
          </form>
          <div style={{display:"flex",flexDirection:"column"}}>
                <p style={{color:"red", display: formData.email.length>=1 && "none"}}>*fullname field must not be empty</p>
                <p style={{color:"red", display: formData.password.length>=1 && "none"}}>*password field must not be empty</p>
          </div>
          <div className="bottom">
            <p>Forget your password?</p>
            <a id="resetpsw" href="/">Reset Password</a>
          </div>
          <p className="create"><Link to="/signup">Create Account</Link> </p>
        </div>

      </div>
    </div>
  );
}
export default AuthScreen;
