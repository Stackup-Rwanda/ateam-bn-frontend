import getRoomsReducer from '../../../reducers/roomReducer/getRoomsReducer';
import bookRoomReducer from '../../../reducers/roomReducer/bookRoomReducer';
import initialState from '../../../store/initialState';
import { roomActionsType, tripsActionTypes } from '../../../actionTypes';

describe('get Rooms reducer', () => {
  test('GET_ALL_ROOMS', () => {
    const rooms = [];
    const getRoomsreducer = getRoomsReducer(initialState, {
      type: roomActionsType.GET_ALL_ROOMS,
      payload: [rooms]
    });
    expect(getRoomsreducer).toHaveProperty('rooms');
    expect(getRoomsreducer).toBeTruthy();
  });

  test('GET_ALL_ROOMS_FAIL', () => {
    const authErrors = '';
    const getRoomsreducer = getRoomsReducer(initialState, {
      type: roomActionsType.GET_ALL_ROOMS_FAIL,
      payload: { error: authErrors }
    });
    expect(getRoomsreducer).toBeTruthy();
  });
});

describe('Book room reducer', () => {
  test('BOOK_ROOM_SUCCESS', () => {
    const message = '';
    const getRoomsreducer = bookRoomReducer(initialState, {
      type: roomActionsType.BOOK_ROOM_SUCCESS,
      payload: { message }
    });
    expect(getRoomsreducer).toHaveProperty('message');
    expect(getRoomsreducer).toBeTruthy();
  });

  test('BOOK_ROOM_FAIL', () => {
    const bookRoomError = '';
    const getRoomsreducer = bookRoomReducer(initialState, {
      type: roomActionsType.BOOK_ROOM_FAIL,
      payload: { error: bookRoomError }
    });
    expect(getRoomsreducer).toBeTruthy();
  });

  test('BOOKED_ROOM_FAIL', () => {
    const bookedRoomFail = '';
    const getRoomsreducer = bookRoomReducer(initialState, {
      type: roomActionsType.BOOKED_ROOM_FAIL,
      payload: { error: bookedRoomFail }
    });
    expect(getRoomsreducer).toBeTruthy();
  });

  test('FETCH_ONEREQUEST_FAIL', () => {
    const bookRoomError = '';
    const getRoomsreducer = bookRoomReducer(initialState, {
      type: tripsActionTypes.FETCH_ONEREQUEST_FAIL,
      payload: { error: bookRoomError }
    });
    expect(getRoomsreducer).toBeTruthy();
  });

  test('FETCH_ONEREQUEST_UNAPPROVED', () => {
    const bookRoomError = 'error';
    const getRoomsreducer = bookRoomReducer(initialState, {
      type: tripsActionTypes.FETCH_ONEREQUEST_UNAPPROVED,
      payload: { unApproved: bookRoomError }
    });
    expect(getRoomsreducer).toBeTruthy();
  });
  test('RESET_PROPS_TONULL', () => {
    const getRoomsreducer = bookRoomReducer(initialState, { type: roomActionsType.RESET_PROPS_TONULL });
    expect(getRoomsreducer).toBeTruthy();
  });
});
