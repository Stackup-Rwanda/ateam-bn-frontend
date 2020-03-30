import React, { Component } from 'react';
import ProfileMenu from './profileComponents/ProfileMenu.s';
import ProfileDetails from './profileComponents/ProfileDetail.s';
import ProfileTravels from './profileComponents/ProfileTravel.s';

export default class Profile extends Component {
  render() {
    const token = localStorage.getItem('token');
    const { history } = this.props;
    const componentToRender = token ? 
      (<div>
        <ProfileMenu />
        <ProfileDetails />
        <ProfileTravels />
      </div>) :
      history.push('/login');
    return (
      <div>
        { componentToRender }
      </div>
    );
  }
}
