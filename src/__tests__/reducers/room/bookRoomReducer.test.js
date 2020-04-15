import getRoomsReducer from '../../../reducers/roomReducer/getRoomsReducer';
import bookRoomReducer from '../../../reducers/roomReducer/bookRoomReducer';
import initialState from '../../../store/initialState';
import { roomActionsType } from '../../../actionTypes';
// import { matchedResetPassword, mismatchedResetPassword } from '../../../__mocks__/user';

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

  //   test('ERROR', () => {
  //     const reducer = forgotPasswordReducer(initialState, {
  //       type: userActionTypes.FORGOT_PASSWORD_FAILURE,
  //       payload: { errors: { message: '----------' } }
  //     });
  //     expect(reducer.forgotPassword.errors).toHaveProperty('message');
  //   });

  //   test('FORGOT_PASSWORD_END', () => {
  //     const reducer = forgotPasswordReducer(initialState, {
  //       type: userActionTypes.FORGOT_PASSWORD_END,
  //       payload: { loading: false }
  //     });

  //     expect(reducer.forgotPassword).toHaveProperty('loading');
  //     expect(reducer.forgotPassword.loading).toBeFalsy();
  //   });

  //   test('UPDATE_PASSWORD_START', () => {
  //     const reducer = updatePasswordReducer(initialState, {
  //       type: userActionTypes.RESET_PASSWORD_START,
  //       payload: { loading: true }
  //     });
  //     expect(reducer.updatePassword).toHaveProperty('loading');
  //     expect(reducer.updatePassword.loading).toBeTruthy();
  //   });

  //   test('UPDATE_SUCCESSFULLY_PASSWORD', () => {
  //     const reducer = updatePasswordReducer(initialState, {
  //       type: userActionTypes.RESET_PASSWORD_SUCCESS,
  //       payload: { message: { matchedResetPassword } }
  //     });
  //     expect(reducer.updatePassword).toHaveProperty('message');
  //   });

  //   test('ERROR', () => {
  //     const reducer = updatePasswordReducer(initialState, {
  //       type: userActionTypes.RESET_PASSWORD_FAILURE,
  //       payload: { errors: { mismatchedResetPassword } }
  //     });
  //     expect(reducer.updatePassword).toHaveProperty('errors');
  //   });

  //   test('UPDATE_PASSWORD_END', () => {
  //     const reducer = updatePasswordReducer(initialState, {
  //       type: userActionTypes.RESET_PASSWORD_END,
  //       payload: { loading: false }
  //     });

//     expect(reducer.updatePassword).toHaveProperty('loading');
//     expect(reducer.updatePassword.loading).toBeFalsy();
//   });
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
});
