import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Frame2 from "../assests/Frame2.png";
import Mask from "../assests/Mask_image.png";
import Gpic from "../assests/Gpic.png";
import AppleLogo from "../assests/AppleLogo.png";
import Logo1 from "../assests/Logo1.png";
import Logo2 from "../assests/Logo2.png";
import Logo3 from "../assests/Logo3.png"
import Logo4 from "../assests/Logo4.png"
import "./LoginPage.css";



const LoginPage = () => {
    const navigate = useNavigate();

    const handleGoogleSuccess = (credentialResponse) => {
        console.log("Google Sign-In successful:", credentialResponse);
        navigate("/upload"); 
    };

    const handleGoogleFailure = (error) => {
        console.error("Google Sign-In failed:", error);
        alert("Sign-in failed. Please try again.");
    };
    

    return (
        <>
         <GoogleOAuthProvider clientId="398807022721-rsditf5tj74enkdms405lsoohfv3uken.apps.googleusercontent.com">
         <div className="main">
            <div className="left">
              <div className="left-dashboard">
                  <div className="base">
                      <img src={Frame2} alt="img" />
                  </div>
                  <div className="para">
                       <h1>Generate detailed reports with just one click</h1>
                 </div>
                  <div className="maskedpic">
                    <img src={Mask} alt="img" />
                </div>               
              </div>
            </div>
            <div className="right">
            <div className="login-form">
                    <h2>Sign In</h2>
                    <p>Sign in to your account</p>
                    <div style={{ marginLeft :20}}>
                    <GoogleLogin 
                     onSuccess={handleGoogleSuccess}
                      onError={handleGoogleFailure}
                  />
                  </div>
                    
                    {/* <button className="google-signin">
                        <img src={Gpic} alt="img" />
                        Sign in with Google
                    </button> */}
                    {/* <button className="apple-signin">
                        <img src={AppleLogo} alt="img" />
                        Sign in with Apple
                    </button> */}
                    <div className="form-group">
                      <label>Email address</label>
                      <input type="email" placeholder="subh@gmail.com" />
                    </div>
                    <div className="form-group">
                       <label>Password</label>
                       <input type="password" placeholder="Password" />
                     </div>
                    <a href="#" className="forgot-password">Forgot password?</a>
                    <button className="signin-btn" onClick={ handleGoogleSuccess}>Sign In</button>
                    <p className="register">Don't have an account? <a href="#">Register here</a></p>

                    <div className="icon">
                      <img src={Logo1} alt="img" />
                      <img src={Logo2} alt="img" />
                      <img src={Logo3} alt="img" />
                      <img src={Logo4} alt="img" />
                     </div>
               </div>
            </div>
         </div>
         </GoogleOAuthProvider>
         </>
        );
  }
  
  export default LoginPage ;