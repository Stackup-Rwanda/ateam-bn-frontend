import { tripsActionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case tripsActionTypes.GET_DESTINATION_START:
      return {
        ...state,
        getDestinations: { ...state.getUsers, message: {}, loading: true, destinationErrors: {} }
      };
    case tripsActionTypes.GET_DESTINATION_END:
      return {
        ...state,
        getDestinations: { ...state.getUsers, message: '', loading: false,destinationErrors: {} }
      };
    case tripsActionTypes.GET_DESTINATION_SUCCESS:
      console.log(payload, 'reducer success case');
      return {
        ...state,
        listOfDestinations: [...payload.data.informations],
        getDestinations: {
          ...state.getUsers,
          loading: false,
          message: { ...payload.message },
          destinationErrors: {}
        }
      };
    case tripsActionTypes.GET_DESTINATION_FAIL:
      console.log(payload, 'reducer fail case');
      return {
        ...state,
        getDestinations: {
          loading: false,
          message: { ...payload.message },
          destinationErrors: { message: payload.error }
        }
      };
    default:
      return null;
  }
};
