/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import facebookLogo from '../../assets/images/social/facebook-logo.png';
import googleLogo from '../../assets/images/social/google-logo.png';
import '../../assets/css/style.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Login extends Component {
  render() {
    return (
      <div className="login">
        <form className="login-form m-20">
          <div className="flex column p-20 b-radius m-bottom">
            <h1 className="md-title c-green m-bottom">Sign in to Barefoot</h1>
            <div className="form-filed m-bottom">
              <a href="#" className="full-btn sm-radius bg-blue social-btn">
                <img src={facebookLogo} className="img" alt="facebook-logo" />
                <span className="xs-title m-left">Sign in with Facebook</span>
              </a>
            </div>
            <div className="form-filed m-bottom">
              <a href="#" className="full-btn sm-radius bg-half-white social-btn">
                <img src={googleLogo} className="img" alt="facebook-logo" />
                <span className="xs-title m-left">Sign in with Google</span>
              </a>
            </div>
            <div className="form-filed m-bottom">
              <input type="email" className="lg-input border-0 bg-half-white" placeholder="Email..." />
            </div>

            <div className="form-filed m-bottom">
              <input type="password" className="lg-input border-0 bg-half-white" placeholder="Password..." />
            </div>

            <a href="#" className="btn md-btn b-radius-circle bg-green text-center sm-title">Sign In</a>
            <div className="text-center"><a href="#" className="link c-green">Forgot password?</a></div>
          </div>
        </form>
        <div className="land-auth">
          <div className="welcome-auth m-20 p-20 text-center">
            <h1 className="lg-title m-bottom">
              Hello
              <br />
              Barefooter!
            </h1>
            <p className="xs-title m-top">Make company global travel and accommodation easy and convenient for the strong workforce of savvy members of staff, by leveraging the modern web.</p>
            <a href="#" className="btn auth-btn md-btn b-radius-circle c-blue m-top text-center sm-title">Sign Up</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
