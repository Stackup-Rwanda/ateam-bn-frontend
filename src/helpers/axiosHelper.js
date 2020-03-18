import 'dotenv/config';
import axios from 'axios';
import * as urlHelper from './urlHelper';

const { NODE_ENV } = process.env;
const { reactUrl, defaultUrl } = urlHelper.backend;

export default (data = {}) => {
  const { token, URL } = data;
  const baseURL = URL || (reactUrl && `${reactUrl}/api`) || (defaultUrl && `${defaultUrl}/api`);
  const headers = { token: token || localStorage.token || undefined, 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': reactUrl, 'Access-Control-Allow-Credentials': true, crossdomain: true };

  return (NODE_ENV === 'test' && axios) || axios.create({ baseURL, headers });
};
