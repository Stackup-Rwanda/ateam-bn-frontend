import { rememberMeActionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case rememberMeActionTypes.FETCH_REMEMBERME_DATA_START:
      return {
        ...state,
        rememberMeData: { ...state.rememberMeData, loading: true, errors: {}, message: '' }
      };
    case rememberMeActionTypes.FETCH_REMEMBERME_DATA_END:
      return {
        ...state,
        rememberMeData: { ...state.rememberMeData, loading: false, errors: {}, message: '' }
      };
    case rememberMeActionTypes.FETCH_REMEMBERME_DATA_SUCCESS:
      return {
        ...state,
        rememberMeData: { loading: false, errors: {}, message: payload.message, userData: { ...payload.data } }
      };
    case rememberMeActionTypes.FETCH_REMEMBERME_DATA_FAILURE:
      return {
        ...state,
        rememberMeData: { ...state.rememberMeData, loading: false, errors: { message: payload.error }, message: '' }
      };
    case rememberMeActionTypes.MAKE_REMEMBERME_START:
      return {
        ...state,
        rememberMe: { loading: true, errors: {}, message: '' }
      };
    case rememberMeActionTypes.MAKE_REMEMBERME_END:
      return {
        ...state,
        rememberMe: { loading: false, errors: {}, message: '' }
      };
    case rememberMeActionTypes.MAKE_REMEMBERME_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      let badMessage = '';
      if (payload.message === 'Wrong parameter, please provide true or false as parameters.') badMessage = payload.message;
      return {
        ...state,
        rememberMe: {
          loading: false,
          errors: (badMessage === '') ? {} : { message: badMessage },
          message: (badMessage === '') ? payload.message : ''
        }
      };
    case rememberMeActionTypes.MAKE_REMEMBERME_FAILURE:
      return {
        ...state,
        rememberMe: { loading: false, errors: { message: payload.error }, message: '' }
      };
    default:
      return null;
  }
};
