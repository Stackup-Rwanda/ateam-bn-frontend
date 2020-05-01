
import axios from 'axios';
import { GET_ALL_ROOMS, GET_ALL_ROOMS_FAIL } from '../../actionTypes/roomActionsType';

const getAllRooms = (rooms) => ({
  type: GET_ALL_ROOMS,
  payload: [...rooms]
});

const getAllRoomsfail = (error) => ({
  type: GET_ALL_ROOMS_FAIL,
  payload: { ...error }
});

const getRooms = (token, accommodationId) => async (dispatch) => {
  try {
    const config = { headers: { token } };
    const result = await axios.get('https://ateam-bn-backend-staging.herokuapp.com/api/room', config);
    const Rooms = result.data.data.paginate;
    const filteredRooms = Rooms.filter((room) => room.accommodationId.toString() === accommodationId);
    return dispatch(getAllRooms(filteredRooms));
  } catch (error) {
    return dispatch(getAllRoomsfail(error));
  }
};
const getAccommodation = async (token, accommodationId) => {
  try {
    const config = { headers: { token } };
    const result = await axios.get(`https://ateam-bn-backend-staging.herokuapp.com/api/accommodation/${accommodationId}`, config);
    return result.data.data;
  } catch (error) {
    return error.response.error;
  }
};

export { getRooms, getAccommodation };
