/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import facebookLogo from '../../assets/images/social/facebook-logo.png';
import googleLogo from '../../assets/images/social/google-logo.png';
import { facebookAuth, googleAuth } from '../../helpers/backendURLs';

const FacebookButton = ({ type, linkClass, text }) => {
  const btnProperties = {
    facebook: {
      imageSource: facebookLogo,
      href: facebookAuth,
      alt: 'facebook-logo'
    },
    google: {
      imageSource: googleLogo,
      href: googleAuth,
      alt: 'google-logo'
    }
  };

  return (
    <div className="form-filed m-bottom">
      <a href={btnProperties[type].href} className={linkClass}>
        <img src={btnProperties[type].imageSource} className="img" alt={btnProperties[type].alt} />
        <span className="xs-title m-left">{text}</span>
      </a>
    </div>
  );
};

FacebookButton.propTypes = {
  type: PropTypes.string.isRequired,
  linkClass: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default FacebookButton;
