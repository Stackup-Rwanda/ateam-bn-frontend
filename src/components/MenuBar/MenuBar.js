import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import {
  faHome,
  faUserCircle,
  faCog,
  faSignOutAlt,
  faPlaneDeparture,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socket from '../../helpers/socketHelper';
import logo from '../../assets/images/logo.png';
import chatHelper from '../../helpers/chatHelper';
import Chat from '../chat';
import sound from '../../assets/sound/ding.mp3';
import './MenuBar.scss';

const audio = new Audio();
audio.src = sound;

export class MenuBar extends Component {
  constructor() {
    super();
    this.state = { messages: [] };
  }

  unreadCount = 0;

  componentDidMount = async () => {
    socket.on('server-chat-message', () => {
      if (!document.querySelector('.messages-wrapper')) {
        this.unreadCount += 1;
        this.updateCount(this.unreadCount);
        audio.play();
      }
    });
    const { messages } = await chatHelper.getMessages();
    this.setState({
      ...this.state,
      messages: [...messages]
    });

    // counting all unread messages
    let count = 0;
    const lastSeen = localStorage.getItem('messageLastSeen');
    messages.forEach((message) => {
      if (lastSeen < message.createdAt) {
        count += 1;
      }
    });
    this.updateCount(count);
  }

  updateCount = (count) => {
    const badgeTag = document.querySelector('.badge');
    this.unreadCount = count;
    if (!count) {
      badgeTag.classList.add('invisible-to-naked-eye');
    } else {
      badgeTag.classList.remove('invisible-to-naked-eye');
    }
    badgeTag.setAttribute('data-badge', this.unreadCount);
  }

  render() {
    return (
      <div className="menu">
        <a href="/"><img className="logo" src={logo} alt="logo" /></a>
        <div className="options">
          <a href="/"><FontAwesomeIcon icon={faHome} className="menus" size="2x" /></a>
          <a href="/"><FontAwesomeIcon icon={faUserCircle} className="menus" size="2x" /></a>
          <a href="/"><FontAwesomeIcon icon={faPlaneDeparture} className="menus" size="2x" /></a>
          <a href="/"><FontAwesomeIcon icon={faListAlt} className="menus" size="2x" /></a>
          <Popup trigger={<a href='#' className='badge invisible-to-naked-eye' data-badge={this.unreadCount}><FontAwesomeIcon icon={faEnvelope} className="menus" size="2x"/></a>} modal>
            {() => {
              this.unreadCount = 0;
              this.updateCount(this.unreadCount);
              return (
                <div>
                  <Chat socket={socket}/>
                </div>
              );
            }}
          </Popup>
          <a href="/"><FontAwesomeIcon icon={faCog} className="menus" size="2x" /></a>
        </div>
        <div className="logout">
          <a href="/"><FontAwesomeIcon icon={faSignOutAlt} className="menus" size="2x" /></a>
        </div>
      </div>
    );
  }
}
export default MenuBar;
