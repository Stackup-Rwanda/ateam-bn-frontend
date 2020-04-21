import axios from 'axios';

const createReaction = async (token, accommodationId, data) => {
  try {
    const config = { headers: { token } };
    await axios.post(`https://ateam-bn-backend-staging.herokuapp.com/api/accomodation/react/${accommodationId}`, data, config);
    return true;
  } catch (error) {
    return false;
  }
};

const getExistingReactions = async (token, accommodationId) => {
  try {
    const config = { headers: { token } };
    const result = await axios.get(`https://ateam-bn-backend-staging.herokuapp.com/api/accomodation/react/${accommodationId}`, config);
    return result.data.reaction;
  } catch (error) {
    return error.response.error;
  }
};

const countReactions = async (token, reactionType, accommodationId) => {
  try {
    const config = { headers: { token } };
    const result = await axios.get(`https://ateam-bn-backend-staging.herokuapp.com/api/accomodation/${reactionType}/${accommodationId}`, config);
    return result.data.reactions;
  } catch (error) {
    return error.response.error;
  }
};

export { createReaction, getExistingReactions, countReactions };
