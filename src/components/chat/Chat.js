import React, { Component } from 'react';
// import ProfileMenu from '../profile/profileComponents/ProfileMenu.s';
// import MenuBar from '../MenuBar';
// import TitleBar from '../TitleBar';
// import RightSideBar from '../RightSideBar';
import MessageBox from './MessageBox';

export class Chat extends Component {
  render() {
    const { socket } = this.props;
    return (
      <div >
          <MessageBox socket={socket}/>
      </div>
    );
  }
}

export default Chat;
