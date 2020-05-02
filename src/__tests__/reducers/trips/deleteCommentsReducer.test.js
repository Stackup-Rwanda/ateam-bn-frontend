import deleteCommentReducer from '../../../reducers/commentsReducer/deleteCommentReducer';
import initialState from '../../../store/initialState';
import comment from '../../../__mocks__/getComments';
import { commentsActionsTypes } from '../../../actionTypes';

describe('delete comments reducer', () => {
  test('DELETE_COMMENTS_START', () => {
    const reducer = deleteCommentReducer(initialState, {
      type: commentsActionsTypes.DELETE_COMMENTS_START,
      payload: { commentsLoading: true }
    });

    expect(reducer.deleteComments).toHaveProperty('commentsLoading');
    expect(reducer.deleteComments.commentsLoading).toBeTruthy();
  });
  test('DELETE_COMMENTS_SUCCESS', () => {
    const reducer = deleteCommentReducer(initialState, {
      type: commentsActionsTypes.DELETE_COMMENTS_SUCCESS,
      payload: { data: comment }
    });

    expect(reducer.comment).toEqual(comment);
    expect(reducer.comment).toHaveProperty('id');
    expect(reducer.comment).toHaveProperty('userId');
    expect(reducer.comment).toHaveProperty('userName');
    expect(reducer.comment).toHaveProperty('userRole');
    expect(reducer.comment).toHaveProperty('comment');
    expect(reducer.comment).toHaveProperty('createdAt');
    expect(reducer.comment).toHaveProperty('updatedAt');
  });
  test('DELETE_COMMENTS_FAILURE', () => {
    const reducer = deleteCommentReducer(initialState, {
      type: commentsActionsTypes.DELETE_COMMENTS_FAILURE,
      payload: { commentsErrors: { message: '----------' } }
    });

    expect(reducer.deleteComments.commentsErrors).toHaveProperty('message');
  });


  test('DELETE_DESTINATION_END', () => {
    const reducer = deleteCommentReducer(initialState, {
      type: commentsActionsTypes.DELETE_COMMENTS_END,
      payload: { commentsLoading: false }
    });

    expect(reducer.deleteComments).toHaveProperty('commentsLoading');
    expect(reducer.deleteComments.commentsLoading).toBeFalsy();
  });
});
