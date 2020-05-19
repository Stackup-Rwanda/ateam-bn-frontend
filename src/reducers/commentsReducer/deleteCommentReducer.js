import { commentsActionsTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case commentsActionsTypes.DELETE_COMMENTS_START:
      return {
        ...state,
        deleteComments: { ...state.deleteComments, commentsMessage: {}, commentsLoading: true, commentsErrors: {} }
      };
    case commentsActionsTypes.DELETE_COMMENTS_END:
      return {
        ...state,
        deleteComments: { ...state.deleteComments, commentsMessage: '', commentsLoading: false, commentsErrors: {} }
      };
    case commentsActionsTypes.DELETE_COMMENTS_SUCCESS:
      console.log(payload, 'reducer success case');
      return {
        ...state,
        comment: payload.data,
        deleteComments: {
          ...state.deleteComments,
          commentsLoading: false,
          commentsMessage: payload.message,
          commentsErrors: {}
        }
      };
    case commentsActionsTypes.DELETE_COMMENTS_FAILURE:
      console.log(payload, 'reducer fail case');
      return {
        ...state,
        deleteComments: {
          commentsLoading: false,
          commentsMessage: { ...payload.message },
          commentsErrors: { message: payload.error }
        }
      };
    default:
      return null;
  }
};
