const BASE_URL = 'https://ateam-bn-backend-staging.herokuapp.com/api';
const HEROKU_URL = 'https://ateam-bn-backend-staging.herokuapp.com';
const LOCAL_URL = 'http://localhost:4000';

// const BASE_URL = 'http://localhost:4000/api';
// const HEROKU_URL = 'http://localhost:4000';

const facebookAuth = `${BASE_URL}/auth/facebook`;
const googleAuth = `${BASE_URL}/auth/google`;
const LOGIN_URL = `${BASE_URL}/auth/signin`;
const LOGOUT_URL = `${BASE_URL}/auth/logout`;
const CHAT_URL = `${BASE_URL}/chats`;
const ALL_LOCATIONS = `${HEROKU_URL}/api/places`;
const ACCOMMODATION = `${HEROKU_URL}/api/accommodation`;

export {
  BASE_URL,
  HEROKU_URL,
  LOCAL_URL,
  facebookAuth,
  googleAuth,
  LOGIN_URL,
  LOGOUT_URL,
  CHAT_URL,
  ALL_LOCATIONS,
  ACCOMMODATION
};
