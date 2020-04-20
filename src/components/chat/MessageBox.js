import React, { Component } from 'react';
import Moment from 'react-moment';
import chatHelper from '../../helpers/chatHelper';
import '../../assets/style/chat/chat.scss';

export class MessageBox extends Component {
  constructor() {
    super();
    this.state = { message: '', messages: [], onlineUsersMap: [] };
  }

  componentDidMount = async () => {
    const { socket } = this.props;
    const { messages } = await chatHelper.getMessages();
    this.setState({
      ...this.state,
      messages: [...messages]
    });
    this.scrollToBottom();

    socket.emit('read', localStorage.getItem('token'));
    localStorage.setItem('messageLastSeen', new Date());
    socket.emit('get-online-users', { token: localStorage.getItem('token') });
    socket.on('online-users', (onlineUsersMap) => {
      const allExceptMe = onlineUsersMap.filter((user) => (user.username !== localStorage.getItem('username')));
      this.setState({
        ...this.state,
        onlineUsersMap: [...allExceptMe]
      });
    });
    socket.on('server-chat-message', (data) => {
      console.log('new message ', data);
      this.displayNewMessage(data);
    });
  }

  displayNewMessage = (data) => {
    const { messages } = this.state;
    this.setState({
      ...this.state,
      messages: [...messages, data]
    });
    if (document.querySelector('.messages-wrapper')) {
      this.scrollToBottom();
    }
  }

  updateMessage = (e) => {
    this.setState({
      ...this.state,
      message: e.target.value
    });
  }

  send = (e) => {
    e.preventDefault();
    const { socket } = this.props;
    const token = localStorage.getItem('token');
    const { message } = this.state;
    if (message !== '') {
      const toSend = {
        message,
        createdAt: new Date()
      };
      socket.emit('client-chat-message', { messageDetails: toSend, token });
      this.clearTextArea();
    }
  }

  scrollToBottom = () => {
    const messageBox = document.querySelector('.messages-box');
    messageBox.scrollTo(0, 100000000000);
  }

  clearTextArea = () => {
    const field = document.querySelector('.message-input');
    field.value = '';
    this.setState({
      ...this.state,
      message: ''
    });
  }

  render() {
    const { messages, onlineUsersMap } = this.state;
    const messagesList = messages.map((message) => {
      const profilePhoto = message.Users.profilePhoto === ''
        ? 'https://www.gravatar.com/avatar/661a877c8a4a17cbba1fc90dbf3eb732?s=640&r=g&d=mm'
        : message.Users.profilePhoto;
      const usernameNRole = message.Users.username === localStorage.getItem('username')
        ? (
          <div>
            <div className='name'>Me</div>
          </div>
        )
        : (
          <div>
            <div className='name'>{message.Users.username}</div>
            <div className='role'>{message.Users.role}</div>
          </div>
        );
      return (
        <div className='message-div'>
          <div className='photo'><img src={profilePhoto} alt='Profilepic'/></div>
          <div className='message-details'>
            { usernameNRole }
          </div>
          <div className='message'>
            <div className='actual-message'>{message.message}</div>
            <div className='time-stamp'><Moment fromNowDuring={4.32e+7} calendar={{
              sameDay: '[Today at] LT',
              nextDay: '[Tomorrow at] LT',
              nextWeek: 'dddd',
              lastDay: '[Yesterday at] LT',
              lastWeek: '[Last] dddd [at] LT',
              sameElse: 'MMMM Do YYYY h:mm a'
            }}>{message.createdAt}</Moment>
            </div>
          </div>
        </div>
      );
    });
    const onlineUsersList = onlineUsersMap.map((user) => {
      const image = user.profilePhoto === '' ? 'https://www.gravatar.com/avatar/661a877c8a4a17cbba1fc90dbf3eb732?s=640&r=g&d=mm' : user.profilePhoto;
      return (
        <div className='online-user-div'>
          <div className='photo'><img src={image} alt='Profilepic'/></div>
          <div className='message-details'>
            <div className='name'>{user.username}</div>
            <div className='role'>{user.role}</div>
          </div>
        </div>
      );
    });
    return (
            <div className='messages-wrapper'>
              <div className='chat-space'>
                <div className='to-whom'>
                  <p>All messages</p>
                </div>
                <div className='messages-box'>
                  { messagesList }
                </div>
                <div className='chat-form'>
                  <textarea onChange={this.updateMessage} placeholder='Type a message' className='message-input'></textarea>
                  <button className='message-send-btn' onClick={this.send}>Send</button>
                </div>
              </div>
              <div className='online-users'>
                <div className='to-whom'>
                  <p>Online Users</p>
                </div>
                <div className='messages-box'>
                  <div className='online-user-div'>
                    <div className='photo'><img src={localStorage.getItem('profilePhoto')} alt='Profilepic'/></div>
                    <div className='message-details'>
                      <div className='name'>Me</div>
                    </div>
                  </div>
                  { onlineUsersList }
                </div>
              </div>
            </div>
    );
  }
}

export default MessageBox;
