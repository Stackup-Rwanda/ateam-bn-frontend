import React from 'react';
import PropTypes from 'prop-types';
import './TextArea.scss';

const TextArea = ({
  textAreaFieldId,
  textAreaId,
  rows,
  textAreaFieldClass,
  textAreaClass,
  textAreaLabelClass,
  onChange,
  placeholder,
  name,
  error,
  errorWidth,
  value,
  isRequired,
  label
}) => (
  <div id={textAreaFieldId} className={`${textAreaFieldClass}`}>
    <label className={textAreaLabelClass}>{label}</label>
    <textarea
      id={textAreaId}
      name={name}
      rows={rows}
      className={textAreaClass}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      required={isRequired}
    />
    {error ? (
      <div className="text-area-error radius-2" style={{ width: `${errorWidth}%` }}>
        {error}
      </div>
    ) : (
      ''
    )}
  </div>
);

TextArea.propTypes = {
  textAreaId: PropTypes.string,
  textAreaFieldId: PropTypes.string,
  name: PropTypes.string,
  rows: PropTypes.number,
  textAreaFieldClass: PropTypes.string,
  textAreaClass: PropTypes.string,
  textAreaLabelClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.any,
  errorWidth: PropTypes.number,
  isRequired: PropTypes.bool
};

TextArea.defaultProps = {
  name: '',
  rows: 3,
  onChange: (e) => e,
  textAreaFieldClass: 'lg-input border-0 bg-half-white',
  placeholder: '',
  errorWidth: 100
};

export default TextArea;
