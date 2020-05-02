import { commentsActionsTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case commentsActionsTypes.GET_COMMENTS_START:
      return {
        ...state,
        getComments: { ...state.getComments, commentsMessage: {}, commentsLoading: true, commentsErrors: {} }
      };
    case commentsActionsTypes.GET_COMMENTS_END:
      return {
        ...state,
        getComments: { ...state.getComments, commentsMessage: '', commentsLoading: false, commentsErrors: {} }
      };
    case commentsActionsTypes.GET_COMMENTS_SUCCESS:
      console.log(payload, 'reducer success case');
      return {
        ...state,
        listOfComments: payload.data,
        getComments: {
          ...state.getComments,
          commentsLoading: false,
          commentsMessage: { ...payload.message },
          commentsErrors: {}
        }
      };
    case commentsActionsTypes.GET_COMMENTS_FAILURE:
      console.log(payload, 'reducer fail case');
      return {
        ...state,
        getComments: {
          commentsLoading: false,
          commentsMessage: { ...payload.message },
          commentsErrors: { message: payload.error }
        }
      };
    default:
      return null;
  }
};
