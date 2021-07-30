import React from "react";
import { Link } from "react-router-dom";
import ShowPassword from "./ShowPassword";
import { ReactComponent as AppleLogo } from "../svg/apple.svg";
import GoogleLogin from "react-google-login";

const SignIn = () => {
  //callback function for google login
  const responseGoogle = (res) => {
    if(res.tokenId){
      window.location="/dashboard";
    }else{
      console.log(res);
    }
  };

  return (
    <div className="sign">
      <div className="main-logo">
            <h1>Dash.</h1>
        </div>
      <div className="sign-form">
        <div className="form-header">
          <h3>Sign In</h3>
          <p>Sign in to your account</p>
        </div>
        <div className="form-body">
          <div className="options">
            <div className="google-login">
            <GoogleLogin 
              clientId="1020269306949-j8t3porf61g95nqckt4jomgpiunc4dql.apps.googleusercontent.com"
              buttonText="Sign in with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
            </div>
            <button>
              <AppleLogo /> Sign in with Apple
            </button>
          </div>
          <div className="sign-in-card Card">
            <label htmlFor="email">Email address</label>
            <input type="text" />
            <label htmlFor="password">Password</label>
            <ShowPassword />
            {/* <label htmlFor="password">Password</label>
            <input type="password" /> */}
            <p>
             <div className="link">
              <Link>Forgot password?</Link>
             </div>
            </p>
            <button>Sign In</button>
          </div>
          <div className="sign-up-account gray-text">
            <p>
              Don't have an account? <Link to="/signup">Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
