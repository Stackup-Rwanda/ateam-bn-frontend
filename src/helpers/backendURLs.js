const BASE_URL = 'https://ateam-bn-backend-staging.herokuapp.com/api';
const HEROKU_URL = 'https://ateam-bn-backend-staging.herokuapp.com';
const LOCAL_URL = 'http://localhost:4000';

const facebookAuth = `${BASE_URL}/auth/facebook`;
const googleAuth = `${BASE_URL}/auth/google`;
const LOGIN_URL = `${BASE_URL}/auth/signin`;
const LOGOUT_URL = `${BASE_URL}/auth/logout`;
const CHAT_URL = `${BASE_URL}/chats`;

export {
  BASE_URL,
  HEROKU_URL,
  LOCAL_URL,
  facebookAuth,
  googleAuth,
  LOGIN_URL,
  LOGOUT_URL,
  CHAT_URL
};
