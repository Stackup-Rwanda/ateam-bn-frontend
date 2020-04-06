import React from 'react';
import PropTypes from 'prop-types';
import './Alert.scss';

const Alert = ({
  alertClass,
  alertTypeClass,
  children
}) => (
  <div className={`${alertClass} ${alertTypeClass}`}>
    <p className="text">{children}</p>
  </div>
);
Alert.propTypes = {
  children: PropTypes.any,
  alertClass: PropTypes.string,
  alertTypeClass: PropTypes.string,
};

Alert.defaultProps = {
  children: '',
  alertClass: 'Alert'
};

export default Alert;
