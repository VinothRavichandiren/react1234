import React from "react";
import './css/LoginSignUp.css'

const LoginSignup =()=>{
    return(
        <div className="loginsignup">
            <div className="login-container">
                <h1>Sign Up</h1>
                <div className="login-fields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Your Email"/>
                    <input type="Password" placeholder="Your Password"/>
                </div>
                <button>continue</button>
                <p className="login-login">Already have an account ?<span>login here</span></p>
                <div className="login-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>By continuing , i agree to the terms of use & privacy pollcy</p>
                </div>
            </div>
        </div>
    )
}
export default LoginSignup