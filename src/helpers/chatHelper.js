import axios from 'axios';
import { CHAT_URL } from './backendURLs';

const getMessages = async () => {
  const token = localStorage.getItem('token');
  let messages;
  let messageErrors;
  await axios.get(CHAT_URL, { headers: { token } }).then((result) => {
    messages = result.data.data;
  }).catch((error) => {
    messageErrors = error;
  });
  return { messages, messageErrors };
};

export default { getMessages };
