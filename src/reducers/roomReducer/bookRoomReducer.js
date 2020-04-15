import { BOOK_ROOM_SUCCESS, BOOK_ROOM_FAIL } from '../../actionTypes/roomActionsType';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case BOOK_ROOM_SUCCESS:
      return {
        ...state,
        message: payload.message,
        authErrors: null
      };
    case BOOK_ROOM_FAIL:
      return {
        ...state,
        bookRoomError: payload.error
      };
    default:
      return undefined;
  }
};

export default reducer;
