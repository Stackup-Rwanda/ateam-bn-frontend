import createCommentsReducer from '../../../reducers/commentsReducer/createCommentsReducer';
import initialState from '../../../store/initialState';
import comment from '../../../__mocks__/getComments';
import { commentsActionsTypes } from '../../../actionTypes';

describe('add comments reducer', () => {
  test('ADD_COMMENTS_START', () => {
    const reducer = createCommentsReducer(initialState, {
      type: commentsActionsTypes.ADD_COMMENTS_START,
      payload: { commentsLoading: true }
    });

    expect(reducer.addComments).toHaveProperty('commentsLoading');
    expect(reducer.addComments.commentsLoading).toBeTruthy();
  });
  test('ADD_COMMENTS_SUCCESS', () => {
    const reducer = createCommentsReducer(initialState, {
      type: commentsActionsTypes.ADD_COMMENTS_SUCCESS,
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
  test('ADD_COMMENTS_FAILURE', () => {
    const reducer = createCommentsReducer(initialState, {
      type: commentsActionsTypes.ADD_COMMENTS_FAILURE,
      payload: { commentsErrors: { message: '----------' } }
    });

    expect(reducer.addComments.commentsErrors).toHaveProperty('message');
  });


  test('ADD_DESTINATION_END', () => {
    const reducer = createCommentsReducer(initialState, {
      type: commentsActionsTypes.ADD_COMMENTS_END,
      payload: { commentsLoading: false }
    });

    expect(reducer.addComments).toHaveProperty('commentsLoading');
    expect(reducer.addComments.commentsLoading).toBeFalsy();
  });
});
