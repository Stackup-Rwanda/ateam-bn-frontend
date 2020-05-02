import deleteCommentActions from '../../../actions/comments/deleteCommentActions';
import addCommentsActions from '../../../actions/comments/addCommentsActions';

const id = 16;
const comment = 'thank you sir';
const dispatch = jest.fn((action) => action);

describe('delete comment Action', () => {
  test('should delete comment', async () => {
    const result = deleteCommentActions(id)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.data).toEqual(null);
  });
});
describe('add comments Actions', () => {
  test('should create comment', async () => {
    const result = addCommentsActions(id, comment)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.data.comment).toEqual(comment);
  });
});
