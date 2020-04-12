import initialState from '../../store/initialState';
import getRoomReducer from './getRoomsReducer';
import bookRoomReducer from './bookRoomReducer';

export default (state = initialState, action) => {
  const Room = getRoomReducer(state, action);
  const bookRoom = bookRoomReducer(state, action);
  return (
    Room
      || bookRoom
      || state
  );
};
