import { GET_ALL_ROOMS, GET_ALL_ROOMS_FAIL } from '../../actionTypes/roomActionsType';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_ALL_ROOMS:
      return {
        ...state,
        rooms: [...payload],
        authErrors: null
      };
    case GET_ALL_ROOMS_FAIL:
      return {
        ...state,
        authErrors: payload.error
      };
    default:
      return undefined;
  }
};

export default reducer;
