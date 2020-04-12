import axios from 'axios';
import { BOOK_ROOM_SUCCESS, BOOK_ROOM_FAIL } from '../../actionTypes/roomActionsType';

const bookRoomSuccess = (message) => ({
  type: BOOK_ROOM_SUCCESS,
  payload: { message }
});

const bookRoomFail = (error) => ({
  type: BOOK_ROOM_FAIL,
  payload: { error }
});

const bookRoom = (token, data) => async (dispatch) => {
  try {
    const config = { headers: { token } };
    const result = await axios.post('https://ateam-bn-backend-staging.herokuapp.com/api/room/book', data, config);
    console.log(result);

    const { message } = result.data;
    console.log(message);

    return dispatch(bookRoomSuccess(message));
  } catch (error) {
    return dispatch(bookRoomFail(error.response.data.error));
  }
};

export default bookRoom;
