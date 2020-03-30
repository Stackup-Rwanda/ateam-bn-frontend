import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import signup from '../../actions/user/signup';
import SocialAuthButton from '../socialAuthButtons/socialAuthButton';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        username: '',
        email: '',
        password: '',
        passportId: '',
        department: '',
        birthdate: '',
        gender: '',
      }
    };
  }

  handlechange = (e) => {
    const { form, validErrors } = this.state;

    this.setState({
      form: { ...form, [e.target.name]: e.target.value },
      validErrors: { ...validErrors, [e.target.name]: null },
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { signupRequest } = this.props;
    const { form } = this.state;
    signupRequest(form);
  }

  componentWillReceiveProps = (nextProps) => {
    // eslint-disable-next-line max-len
    if (nextProps.message) { toast.info(nextProps.message); } else if (nextProps.errors) toast.error(nextProps.errors);
  };

  render() {
    return (
      <div className="sign">
        <div className="land-auth-sign">
          <div className="welcome-auth-sign p-20 text-center">
            <h1 className="lg-title m-bottom">
              Welcome to
              <br />
              Barefoot Nomad
            </h1>
            <p className="xs-title m-top">
              Make company global travel and accommodation easy and convenient
              for the strong workforce of savvy members of staff, by leveraging
              the modern web.
            </p>
            <a
            href='/login'
              className="btn auth-btn md-btn b-radius-circle c-blue m-top text-center sm-title"
            >
              Sign In
            </a>
          </div>
        </div>
        <form className="sign-form">
        <ToastContainer position={toast.POSITION.TOP_CENTER} autoClose={false}/>
          <div className='flex column p-20 b-radius m-bottom' >
            <h1 className="md-title c-green m-bottom">Create Account</h1>
            <div className="row">
                <SocialAuthButton
                  type="facebook"
                  divClass="form-field-sign m-bottom"
                  imgClass="img-sign"
                  spanClass="xs-title m-left-social-btn text-white"
                  linkClass="full-btn sm-radius bg-blue social-btn"
                  text="Sign in with Facebook"
                />
                <SocialAuthButton
                  type="google"
                  divClass="form-field-sign m-bottom"
                  imgClass="img-sign"
                  spanClass="xs-title m-left-social-btn"
                  linkClass="full-btn sm-radius bg-half-white-sign social-btn"
                  text="Sign in with Facebook"
                />
            </div>
            <div className="row">
              <div className="form-field-sign m-bottom">
                <input
                  type="text"
                  name="name"
                  className="lg-input border-0 bg-half-white-sign"
                  placeholder="Name..."

                  onKeyUp={this.handlechange}
                />
                <span className="text-danger">
                  {this.props.validErrors.name}
                </span>
              </div>

              <div className="form-field-sign m-bottom">
                <input
                  type="text"
                  name="username"
                  className="lg-input border-0 bg-half-white-sign"
                  placeholder="Username..."

                  onKeyUp={this.handlechange}
                />
                <span className="text-danger">
                  {this.props.validErrors.username}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="form-field-sign m-bottom">
                <input
                  type="email"
                  name="email"
                  className="lg-input border-0 bg-half-white-sign"
                  placeholder="Email..."

                  onKeyUp={this.handlechange}
                />
                <span className="text-danger">
                  {this.props.validErrors.email}
                </span>
              </div>

              <div className="form-field-sign m-bottom">
                <select id="department" name="department" className="lg-input border-0 bg-half-white-sign dropdown" onChange={this.handlechange}>
                  <option value="" disabled selected>Department...</option>
                  <option value="Finance">Finance</option>
                  <option value="IT">IT</option>
                  <option value="Human Resource">Human Resource</option>
                  </select>
                   <span className="text-danger">
                  {this.props.validErrors.department}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="form-field-sign m-bottom">
                <input
                  type="password"
                  name="password"
                  className="lg-input border-0 bg-half-white-sign dropdown"
                  placeholder="Password..."

                  onKeyUp={this.handlechange}
                /><br></br>
                <span className="text-danger">
                  {this.props.validErrors.password}
                </span>
              </div>

              <div className="form-field-sign m-bottom">
                <input
                  type="text"
                  name="passportId"
                  className="lg-input border-0 bg-half-white-sign"
                  placeholder="Passport Id..."
                  onKeyUp={this.handlechange}
                />
                <span className="text-danger">
                  {this.props.validErrors.passportId}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="form-field-sign m-bottom">
                <input
                  type="date"
                  name="birthdate"
                  className="lg-input border-0 bg-half-white-sign"
                  placeholder="Birthdate"

                  onChange={this.handlechange}
                />
                <span className="text-danger">
                  {this.props.validErrors.birthdate}
                </span>
              </div>
            </div>
            <div className="row m-bottom ">
              <div className="form-field-sign row radio">
              <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="radio"

                  onChange={this.handlechange}
                  id="male"
                />
                <label htmlFor="male" className="ml-1 radio">
                  {' '}
                  Male
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="form-field-sign row radio">
              <input
                  type="radio"
                  name="gender"
                  className="radio"
                  value="female"
                  id="female"

                  onChange={this.handlechange}
                />
                <label htmlFor="female" className="ml-1 radio">
                  {' '}
                  Female
                  <span className="checkmark"></span>
                </label>
              </div>
              <span className="text-danger">
                {this.props.validErrors.gender}
              </span>
            </div>
            <button
             className="btn-sign md-btn b-radius-circle bg-green text-center sm-title sign-btn"
              onClick={this.handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Signup.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.string,
  errors: PropTypes.string,
  validErrors: PropTypes.object,
  signedUp: PropTypes.bool,
  signupRequest: PropTypes.func.isRequired
};

const mapStateToProps = ({ user }) => ({
  loading: user.loading,
  message: user.message,
  errors: user.signUpErrors,
  validErrors: user.validErrors,
  signedUp: user.signedUp
});

const mapDispatchToProps = (dispatch) => ({ signupRequest: (data) => dispatch(signup(data)) });

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
