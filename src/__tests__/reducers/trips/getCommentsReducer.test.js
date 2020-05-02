import getCommentsReducer from '../../../reducers/commentsReducer/getCommentsReducer';
import initialState from '../../../store/initialState';
import comment from '../../../__mocks__/getComments';
import { commentsActionsTypes } from '../../../actionTypes';

describe('get comments reducer', () => {
  test('GET_COMMENTS_START', () => {
    const reducer = getCommentsReducer(initialState, {
      type: commentsActionsTypes.GET_COMMENTS_START,
      payload: { commentsLoading: true }
    });

    expect(reducer.getComments).toHaveProperty('commentsLoading');
    expect(reducer.getComments.commentsLoading).toBeTruthy();
  });
  test('GET_COMMENTS_SUCCESS', () => {
    const reducer = getCommentsReducer(initialState, {
      type: commentsActionsTypes.GET_COMMENTS_SUCCESS,
      payload: { data: [comment] }
    });

    expect(reducer.listOfComments[0]).toEqual(comment);
    expect(reducer.listOfComments[0]).toHaveProperty('id');
    expect(reducer.listOfComments[0]).toHaveProperty('userId');
    expect(reducer.listOfComments[0]).toHaveProperty('userName');
    expect(reducer.listOfComments[0]).toHaveProperty('userRole');
    expect(reducer.listOfComments[0]).toHaveProperty('comment');
    expect(reducer.listOfComments[0]).toHaveProperty('profile');
    expect(reducer.listOfComments[0]).toHaveProperty('createdAt');
    expect(reducer.listOfComments[0]).toHaveProperty('updatedAt');
  });
  test('GET_COMMENTS_FAILURE', () => {
    const reducer = getCommentsReducer(initialState, {
      type: commentsActionsTypes.GET_COMMENTS_FAILURE,
      payload: { commentsErrors: { message: '----------' } }
    });

    expect(reducer.getComments.commentsErrors).toHaveProperty('message');
  });


  test('GET_DESTINATION_END', () => {
    const reducer = getCommentsReducer(initialState, {
      type: commentsActionsTypes.GET_COMMENTS_END,
      payload: { commentsLoading: false }
    });

    expect(reducer.getComments).toHaveProperty('commentsLoading');
    expect(reducer.getComments.commentsLoading).toBeFalsy();
  });
});
