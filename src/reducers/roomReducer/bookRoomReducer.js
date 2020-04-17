import { BOOK_ROOM_SUCCESS, BOOK_ROOM_FAIL, BOOKED_ROOM_FAIL, RESET_PROPS_TONULL } from '../../actionTypes/roomActionsType';
import { FETCH_ONEREQUEST_FAIL, FETCH_ONEREQUEST_UNAPPROVED } from '../../actionTypes/tripsActionsTypes';

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
        bookRoomError: payload.error,
        message: null,
        authErrors: null,
        bookedRoomFail: null
      };
    case BOOKED_ROOM_FAIL:
      return {
        ...state,
        bookedRoomFail: payload.bookedError,
        bookRoomError: null,
        message: null,
        authErrors: null
      };
    case FETCH_ONEREQUEST_FAIL:
      return {
        ...state,
        bookRoomError: payload.error,
        bookedRoomFail: null,
        authErrors: null
      };
    case FETCH_ONEREQUEST_UNAPPROVED:
      return {
        ...state,
        bookRoomError: payload.unApproved,
        bookedRoomFail: null,
        authErrors: null
      };
    case RESET_PROPS_TONULL:
      return {
        ...state,
        bookRoomError: null,
        bookedRoomFail: null,
        message: null,
        authErrors: null
      };
    default:
      return undefined;
  }
};

export default reducer;
