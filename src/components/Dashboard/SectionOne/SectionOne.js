import React, { Component } from 'react';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dashboard from '../../../assets/images/dashboard.png';
import paris from '../../../assets/images/paris.jpg';
import './SectionOne.scss';

class SectionOne extends Component {
  render() {
    return (
      <div className="section-one">
        <div className="section-one-left">
          <div className="thumbnail">
            <img alt="dashboard" src={dashboard} />
            <p>Welcome Mugisha!</p>
            <button type="button">
              <span>Create Trip </span>
              <span><FontAwesomeIcon icon={faPlaneDeparture} /></span>
            </button>
          </div>
        </div>
        <div className="section-one-right">
          <p>Popular Destinations</p>
          <div className="destinations">
            <div className="place">
              <img alt="paris" src={paris} />
              <div className="text">
                <p>Paris</p>
                <p>France</p>
              </div>
              <div className="percentage">85%</div>
            </div>
            <div className="place">
              <img alt="paris" src={paris} />
              <div className="text">
                <p>Paris</p>
                <p>France</p>
              </div>
              <div className="percentage">85%</div>
            </div>
            <div className="place">
              <img alt="paris" src={paris} />
              <div className="text">
                <p>Paris</p>
                <p>France</p>
              </div>
              <div className="percentage">85%</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionOne;
