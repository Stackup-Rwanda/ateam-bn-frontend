/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import qs from 'qs';
import PropTypes from 'prop-types';
import SocialAuthButton from '../socialAuthButtons/socialAuthButton';
import { oauthActions } from '../../actions';
import AuthError from '../errors';
import '../../assets/css/style.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Login extends Component {
  componentDidMount() {
    const { oauthActions } = this.props;
    const { token, error } = qs.parse(window.location.search, { ignoreQueryPrefix: true });
    if (token || error) {
      oauthActions({ token, error });
    }
  }

  render() {
    const { oauthErrors, history } = this.props;
    const token = localStorage.getItem('token');
    let componentToRender;
    if (!token) {
      componentToRender = (
        <div className="login">
          <form className="login-form m-20">
            <div className="flex column p-20 b-radius m-bottom">
              { oauthErrors && <AuthError error={oauthErrors} /> }
              <h1 className="md-title c-green m-bottom">Sign in to Barefoot</h1>
              <SocialAuthButton
                type="facebook"
                linkClass="full-btn sm-radius bg-blue social-btn"
                text="Sign in with Facebook"
              />
              <SocialAuthButton
                type="google"
                linkClass="full-btn sm-radius bg-half-white social-btn"
                text="Sign in with Google"
              />
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
    } else {
      componentToRender = (history.push('/profile'));
    }
    return (
      <div>
        { componentToRender }
      </div>
    );
  }
}

Login.defaultProps = { oauthErrors: null };

Login.propTypes = {
  oauthActions: PropTypes.func.isRequired,
  oauthErrors: PropTypes.string,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired
};

const mapStateToProps = ({ user }) => ({
  token: user.token,
  oauthErrors: user.oauthErrors
});


const mapDispatchToProps = (dispatch) => (
  { oauthActions: (payload) => dispatch(oauthActions(payload)) }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
