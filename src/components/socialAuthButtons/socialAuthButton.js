import React from 'react';
import PropTypes from 'prop-types';
import facebookLogo from '../../assets/images/social/facebook-logo.png';
import googleLogo from '../../assets/images/social/google-logo.png';
import { facebookAuth, googleAuth } from '../../helpers/backendURLs';

const FacebookButton = ({ type, linkClass, divClass, spanClass, imgClass, text }) => {
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
    <div className={divClass}>
      <a href={btnProperties[type].href} className={linkClass}>
        <img src={btnProperties[type].imageSource} className={imgClass} alt={btnProperties[type].alt} />
        <span className={spanClass}>{text}</span>
      </a>
    </div>
  );
};

FacebookButton.propTypes = {
  type: PropTypes.string.isRequired,
  linkClass: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  divClass: PropTypes.string.isRequired,
  spanClass: PropTypes.string.isRequired,
  imgClass: PropTypes.string.isRequired
};

export default FacebookButton;
