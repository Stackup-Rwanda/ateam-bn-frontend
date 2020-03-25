import React from 'react';
import PropTypes from 'prop-types';
import './Form.scss';

const Form = ({ formId, formClass, onSubmit, children, formTitle }) => (
  <form id={formId} className={formClass} onSubmit={onSubmit} title={formTitle}>
    <div className="flex column p-20 b-radius m-bottom">
      {formTitle ? <h1 className="md-title c-green m-bottom">{formTitle}</h1> : ''}
      {children}
    </div>
  </form>
);
Form.propTypes = {
  formId: PropTypes.string,
  formTitle: PropTypes.string,
  children: PropTypes.any,
  formClass: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

Form.defaultProps = {
  children: 'button',
  formTitle: '',
  formId: undefined,
  onSubmit: (e) => e,
  formClass: 'm-20'
};

export default Form;
