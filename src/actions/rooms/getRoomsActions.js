
import axios from 'axios';
import { GET_ALL_ROOMS, GET_ALL_ROOMS_FAIL } from '../../actionTypes/roomActionsType';

const getAllRooms = (rooms) => ({
  type: GET_ALL_ROOMS,
  payload: [...rooms]
});

const getAllRoomsfail = (error) => ({
  type: GET_ALL_ROOMS_FAIL,
  payload: { error }
});

const getRooms = (token) => async (dispatch) => {
  try {
    const config = { headers: { token } };
    const result = await axios.get('https://ateam-bn-backend-staging.herokuapp.com/api/room', config);
    console.log(result);

    const Rooms = result.data.data.paginate;
    // console.log(Rooms);

    return dispatch(getAllRooms(Rooms));
  } catch (error) {
    console.log(error);
    return dispatch(getAllRoomsfail(error));
  }
};

export default getRooms;
