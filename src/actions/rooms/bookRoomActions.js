import axios from 'axios';
import { BOOK_ROOM_SUCCESS, BOOK_ROOM_FAIL, BOOKED_ROOM_FAIL } from '../../actionTypes/roomActionsType';

const bookRoomSuccess = (message) => ({
  type: BOOK_ROOM_SUCCESS,
  payload: { message }
});

const bookRoomFail = (error) => ({
  type: BOOK_ROOM_FAIL,
  payload: { error }
});

const bookedRoomFail = (bookedError) => ({
  type: BOOKED_ROOM_FAIL,
  payload: { bookedError }
});

const bookRoom = (token, data) => async (dispatch) => {
  try {
    const config = { headers: { token } };
    const result = await axios.post('https://ateam-bn-backend-staging.herokuapp.com/api/room/book', data, config);
    const { message } = result.data;
    if (result.status === 302) {
      return dispatch(bookedRoomFail(message));
    }
    return dispatch(bookRoomSuccess(message));
  } catch (error) {
    if (error.response.status === 302) {
      return dispatch(bookedRoomFail(error.response.data.message));
    }
    return dispatch(bookRoomFail(error.response.data.error));
  }
};

export default bookRoom;
