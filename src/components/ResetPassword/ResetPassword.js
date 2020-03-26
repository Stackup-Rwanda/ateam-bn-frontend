import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Input, Button, Form } from '../common';
import { updatePassword } from '../../actions/user';
import './ResetPassword.scss';

export class ResetPassword extends Component {
  state = {
    form: {
      password: '',
      confirmPassword: ''
    }
  };

  handleChange = (e) => {
    const { form } = this.state;
    this.setState({ form: { ...form, [e.target.name]: e.target.value } });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { form: { password, confirmPassword } } = this.state;
    const {
      updatePassword,
      match: { params: { userId, token } }
    } = this.props;
    if (!password || !confirmPassword) {
      return toast.error('Please fill the form..');
    }
    if (password !== confirmPassword) {
      return toast.error('The passwords are not matching');
    }

    const { message } = await updatePassword(
      {
        password,
        confirmPassword
      },
      userId,
      token
    );

    this.setState({ form: { password: '', confirmPassword: '' } });
    return message;
  };

  componentWillReceiveProps = (nextProps) => {
    const alertMessage = (nextProps.message && toast.success(nextProps.message))
      || (nextProps.errors && toast.error(nextProps.errors.message));

    return !nextProps.loading && alertMessage;
  };

  render() {
    const { loading } = this.props;
    const { form } = this.state;
    return (
        <div className="styles">
        <div className="reset-password">
          <Form formTitle="Change your Password" formClass="reset-pwd-form m-20" onSubmit={this.handleSubmit}>
            <ToastContainer position={toast.POSITION.TOP_CENTER} />
            <p>
              Both Passwords must macth, and include at least 8 characters.
            </p>
            <Input
              name="password"
              type="password"
              inputFieldClass="form-field m-bottom"
              inputClass="lg-input border-0 bg-half-white"
              placeholder="New Password"
              isRequired
              onChange={this.handleChange}
              value={form.password}
            />
            <Input
                name="confirmPassword"
                type="password"
                inputFieldClass="form-field m-bottom"
                inputClass="lg-input border-0 bg-half-white"
                placeholder="Retype new password"
                isRequired
                onChange={this.handleChange}
                value={form.confirmPassword}
            />

            <Button type="submit" onClick={(e) => e} loading={loading} buttonClass="btn md-btn b-radius-circle bg-green text-center sm-title m-top-bottom-40" children="Update Password" />
            <div className="text-center"><Link to="/login" className="link c-green">or Go back to Sign In</Link></div>
          </Form>
        </div>
        <div className="foot-bottom"></div>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.string,
  errors: PropTypes.object,
  updatePassword: PropTypes.func,
  match: PropTypes.object
};

const mapStateToProps = ({ user: { updatePassword: { loading, message, errors } } }) => ({
  loading,
  message,
  errors
});

export default connect(
  mapStateToProps,
  { updatePassword }
)(ResetPassword);
