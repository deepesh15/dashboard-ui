import React from "react";
import { Link } from "react-router-dom";
import ShowPassword from "./ShowPassword";
import { ReactComponent as AppleLogo } from "../svg/apple.svg";
import GoogleLogin from "react-google-login";

const SignUp = () => {
  //callback function for google signin
  const responseGoogle = (res) => {
    if (res.tokenId) {
      window.location = "/dashboard";
    } else {
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
          <h3>Create an account</h3>
          <p>Create an account to use dashboard</p>
        </div>

        <div className="form-body">
          <div className="options">
            <div className="google-login">
              <GoogleLogin
                clientId="1020269306949-j8t3porf61g95nqckt4jomgpiunc4dql.apps.googleusercontent.com"
                buttonText="Sign up with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
              />
            </div>
            <button>
              <AppleLogo /> Sign Up with Apple
            </button>
          </div>

          <div className="sign-up-card Card">
            <div className="name-section">
              <div className="first-name name">
                <label htmlFor="firstName">First Name</label>
                <input type="text" />
              </div>

              <div className="last-name name">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" />
              </div>
            </div>

            <label htmlFor="email">Email address</label>
            <input type="text" name="email" id="email" />
            <label htmlFor="password">Password</label>
            <ShowPassword />
            <label htmlFor="password">Confirm password</label>
            <ShowPassword />
            <p>
              <div className="gray-text">
                <input type="checkbox" /> I agree to the
                <div className="link">
                  <Link>terms and conditions</Link>
                </div>
              </div>
            </p>
            <button>Sign Up</button>
          </div>
          <div className="sign-in-account gray-text">
            <p>
              Already have an account? <Link to="/">Sign in here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
