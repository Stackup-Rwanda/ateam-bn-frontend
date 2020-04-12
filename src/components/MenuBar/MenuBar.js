import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import {
  faTachometerAlt,
  faHouseUser,
  faUserCircle,
  faSignOutAlt,
  faPlaneDeparture,
  faComments,
  faUserCog,
  faTasks
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logout } from '../../actions/user';
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
    this.listenForIncomingMessages();
    this.getAllMessages();
    this.focusCurrentLocation();
  }

  getAllMessages = async () => {
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

  listenForIncomingMessages = () => {
    socket.on('server-chat-message', () => {
      if (!document.querySelector('.messages-wrapper')) {
        this.unreadCount += 1;
        this.updateCount(this.unreadCount);
        audio.play();
      }
    });
  }

  focusCurrentLocation = () => {
    const { location: { pathname } } = window;
    const currentPage = pathname.split('/')[1];

    const icon = document.querySelector(`#${currentPage}`);
    const indicationBar = document.querySelector(`#${currentPage}-indicator`);
    indicationBar.classList.remove('not-indicated');
    indicationBar.classList.add('indicated');
    icon.classList.remove('not-selected');
    icon.classList.add('selected');
  }

  getElementsByRole = () => {
    const allowedRoles = ['SUPER ADMINISTRATOR', 'TRAVEL ADMINISTRATOR', 'MANAGER', 'REQUESTER'];
    const token = localStorage.getItem('token');
    if (token) {
      const { role } = jwt.decode(token);
      if (allowedRoles.includes(role)) {
        if (role === 'REQUESTER') {
          return (
            <div className="sidebar-options">
              {this.dashboardLink()}
              {this.requestsLink()}
              {this.accommodationsLink()}
              {this.chatLink()}
              {this.profileLink()}
            </div>
          );
        } if (role === 'MANAGER') {
          return (
            <div className="sidebar-options">
              {this.approvalsLink()}
              {this.chatLink()}
              {this.profileLink()}
            </div>
          );
        } if (role === 'TRAVEL ADMINISTRATOR') {
          return (
            <div className="sidebar-options">
              {this.accommodationsLink()}
              {this.chatLink()}
              {this.profileLink()}
            </div>
          );
        } if (role === 'SUPER ADMINISTRATOR') {
          return (
            <div className="sidebar-options">
              {this.userRoleLink()}
              {this.chatLink()}
              {this.profileLink()}
            </div>
          );
        }
      }
      return (<div></div>);
    }
    return (<div></div>);
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

  logoutOnClick = async (e) => {
    e.preventDefault();
    const { logout } = this.props;
    logout();
  }

  dashboardLink = () => (
    <Link to="/dashboard" className='link'>
      <FontAwesomeIcon icon={faTachometerAlt} id='dashboard' className="sidebar-menus not-selected" size="2x" />
      <span id='dashboard-indicator' className='indicator'></span>
      <span tabIndex='-1' className='hint'>Dashboard</span>
    </Link>
  );

  requestsLink = () => (
    <Link to="/requests" className='link'>
      <FontAwesomeIcon icon={faPlaneDeparture} id='requests' className="sidebar-menus not-selected" size="2x" />
      <span id='requests-indicator' className='indicator'></span>
      <span tabIndex='-1' className='hint'>Trip_Requests</span>
    </Link>
  );

  accommodationsLink = () => (
    <Link to="/accommodations" className='link'>
      <FontAwesomeIcon icon={faHouseUser} id='accommodations' className="sidebar-menus not-selected" size="2x" />
      <span id='accommodations-indicator' className='indicator'></span>
      <span tabIndex='-1' className='hint'>Accommodations</span>
    </Link>
  );

  approvalsLink = () => (
    <Link to="/approvals" className='link'>
      <FontAwesomeIcon icon={faTasks} id='approvals' className="sidebar-menus not-selected" size="2x" />
      <span id='approvals-indicator' className='indicator'></span>
      <span tabIndex='-1' className='hint'>Approvals</span>
    </Link>
  );

  userRoleLink = () => (
    <Link to="/userRole" className='link'>
      <FontAwesomeIcon icon={faUserCog} id='userRole' className="sidebar-menus not-selected" size="2x" />
      <span id='userRole-indicator' className='indicator'></span>
      <span tabIndex='-1' className='hint'>UserRole</span>
    </Link>
  );

  chatLink = () => (
    <Popup trigger={<Link href='#' className='badge invisible-to-naked-eye link' data-badge={34535}>
      <FontAwesomeIcon icon={faComments} id='chat' className="sidebar-menus not-selected" size="2x"/>
      <span id='chat-indicator' className='indicator'></span><span tabIndex='-1' className='hint'>Chat</span></Link>} modal>
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
  );

  profileLink = () => (
    <Link to="/profile" className='link'>
      <FontAwesomeIcon icon={faUserCircle} id='profile' className="sidebar-menus not-selected" size="2x" />
      <span id='profile-indicator' className='indicator'></span>
      <span tabIndex='-1' className='hint'>Profile</span>
    </Link>
  );

  render() {
    const sidebarMenus = this.getElementsByRole();
    return (
      <div className="sidebar-menu">
        <Link href="/"><img className="sidebar-logo" src={logo} alt="logo" /></Link>
        { sidebarMenus }
        <div className="logout">
          <Link href="/" className='link' onClick={this.logoutOnClick}>
            <FontAwesomeIcon icon={faSignOutAlt} className="sidebar-menus" size="2x" />
            <span tabIndex='-1' className='hint'>logout</span>
          </Link>
        </div>
      </div>
    );
  }
}
export default connect(null, { logout })(MenuBar);
