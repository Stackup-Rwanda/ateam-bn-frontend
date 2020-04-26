import React, { Component } from 'react';
import ProfileDetails from './profileComponents/ProfileDetail.s';
import ProfileTravels from './profileComponents/ProfileTravel.s';
import Menubar from '../MenuBar';

export default class Profile extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Menubar />
        <div className='main'>
          <div className='profile-wrapper'>
            <ProfileDetails />
            <ProfileTravels />
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}
