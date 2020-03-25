import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Input, Button, Form } from '../common';
import { regularExpression } from '../../helpers/user/formValidator';
import { forgotPassword } from '../../actions/user';
import './ResetPassword.scss';

export class ForgotPassword extends Component {
  state = {
    email: '',
    loading: false
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = this.state;

    if (regularExpression.test(email)) {
      const isEmailSent = await this.props.forgotPassword(email);
      this.setState({ email: '' });
      return isEmailSent;
    }

    return toast.error('Please, Enter your Email');
  };

  componentWillReceiveProps = (nextProps) => {
    const alertMessage = (nextProps.message && toast.success(nextProps.message))
      || (nextProps.errors && toast.error(nextProps.errors.message));

    return !nextProps.loading && alertMessage;
  };

  render() {
    const { loading } = this.props;
    const { email } = this.state;
    return (
      <div>
        <div className="reset-password">
          <Form formTitle="Find your Barefoot account" formClass="reset-pwd-form m-20" onSubmit={this.handleSubmit}>
            <ToastContainer position={toast.POSITION.TOP_CENTER} />
            <p>Enter your emai and we will send you a link to reset your password</p>
            <Input
              name="email"
              type="email"
              inputFieldClass="form-field m-bottom"
              inputClass="lg-input border-0 bg-half-white"
              placeholder="Your Email..."
              isRequired
              onChange={this.handleChange}
              value={email}
            />

            <Button type="submit" onClick={(e) => e} loading={loading} buttonClass="btn md-btn b-radius-circle bg-green text-center sm-title m-top-bottom-40" children="Send" />
            <div className="text-center"><Link to="/login" className="link c-green">or Go back to Sign In</Link></div>
          </Form>
        </div>
        <div className="foot-bottom"></div>
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.string,
  errors: PropTypes.object,
  forgotPassword: PropTypes.func
};

const mapStateToProps = ({ user: { forgotPassword: { loading, message, errors } } }) => ({
  loading,
  message,
  errors
});

export default connect(
  mapStateToProps,
  { forgotPassword }
)(ForgotPassword);
