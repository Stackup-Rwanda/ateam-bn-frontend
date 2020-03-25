import React from 'react';
import PropTypes from 'prop-types';

const AuthError = ({ error }) => (
  <div className="form-filed m-bottom error">
    <p className="lg-input border-0 bg-half-white">
      { error }
    </p>
  </div>
);

AuthError.propTypes = { error: PropTypes.string.isRequired };

export default AuthError;
