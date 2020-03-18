import React, { Component } from 'react';
import ProfileMenu from './profileComponents/ProfileMenu.s';
import ProfileDetails from './profileComponents/ProfileDetail.s';
import ProfileTravels from './profileComponents/ProfileTravel.s';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileMenu />
        <ProfileDetails />
        <ProfileTravels />
      </div>
    );
  }
}
