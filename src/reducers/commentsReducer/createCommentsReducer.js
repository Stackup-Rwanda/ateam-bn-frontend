import { commentsActionsTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case commentsActionsTypes.ADD_COMMENTS_START:
      return {
        ...state,
        addComments: { ...state.addComments, commentsMessage: {}, commentsLoading: true, commentsErrors: {} }
      };
    case commentsActionsTypes.ADD_COMMENTS_END:
      return {
        ...state,
        addComments: { ...state.addComments, commentsMessage: '', commentsLoading: false, commentsErrors: {} }
      };
    case commentsActionsTypes.ADD_COMMENTS_SUCCESS:
      console.log(payload, 'reducer success case');
      return {
        ...state,
        comment: payload.data,
        addComments: {
          ...state.addComments,
          commentsLoading: false,
          commentsMessage: { ...payload.message },
          commentsErrors: {}
        }
      };
    case commentsActionsTypes.ADD_COMMENTS_FAILURE:
      console.log(payload, 'reducer fail case');
      return {
        ...state,
        addComments: {
          commentsLoading: false,
          commentsMessage: { ...payload.message },
          commentsErrors: { message: payload.error }
        }
      };
    default:
      return null;
  }
};
