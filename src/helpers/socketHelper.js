import socketIOClient from 'socket.io-client';
import { HEROKU_URL } from './backendURLs';

const socketThread = socketIOClient(HEROKU_URL);

const initiateSocketConnection = async (token) => {
  socketThread.emit('connect-client', { token });
  socketThread.on('connected-successfully', (data) => {
    const { username } = data;
    localStorage.setItem('username', username);
    localStorage.setItem('messageLastSeen', data.messageLastSeen);
    const profilePhoto = data.profilePhoto === ''
      ? 'https://www.gravatar.com/avatar/661a877c8a4a17cbba1fc90dbf3eb732?s=640&r=g&d=mm'
      : data.profilePhoto;
    localStorage.setItem('profilePhoto', profilePhoto);
  });
};

const token = localStorage.getItem('token');
if (token) {
  initiateSocketConnection(token);
}

export default socketThread;
