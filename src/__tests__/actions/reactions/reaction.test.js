import mockAxios from 'axios';
import store from '../../../__mocks__/store';
import { createReaction, getExistingReactions, countReactions } from '../../../actions/reactions/reactionAction';

const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJNckR1bW15MyIsImVtYWlsIjoiZHVtbXkzQGVtYWlsLnJ3Iiwicm9sZSI6IlRSQVZFTCBBRE1JTklTVFJBVE9SIiwiaXNWZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNTg2MzM1NjA4fQ.u0kcrqoifWgYzTpAZ0mYX9gvwe-xQuUPk3iAiMMhp38';
const accommodationId = '1';
const accommodationId2 = '';

describe('react on accommodation', () => {
  test('should be able to like an accommodation', async () => {
    mockAxios.post.mockResolvedValueOnce({ request: { data: {}, status: 201 }, data: { message: 'message' } });
    const result = await createReaction(token1, accommodationId, { reactionType: 'like' });
    expect(result).toBeTruthy;
  });
  test('should be able to unlike an accommodation', async () => {
    mockAxios.post.mockResolvedValueOnce({ request: { data: {}, status: 201 }, data: { message: 'message' } });
    const result = await store.dispatch(createReaction(token1, accommodationId, { reactionType: 'hate' }));
    expect(result).toHaveProperty('payload');
  });
  test('should be able to fire an accommodation', async () => {
    mockAxios.post.mockResolvedValueOnce({ request: { data: {}, status: 201 }, data: { message: 'message' } });
    const result = await store.dispatch(createReaction(token1, accommodationId, { reactionType: 'fire' }));
    expect(result).toHaveProperty('payload');
  });
  test('should be able to unlike an accommodation', async () => {
    mockAxios.post.mockRejectedValueOnce({ request: { data: {}, status: 200 }, data: { raction: [] } });
    const result = await store.dispatch(getExistingReactions(token1, accommodationId));
    expect(result).toBeTruthy;
  });
  test('should not be able to count reactions', async () => {
    mockAxios.post.mockRejectedValueOnce({ request: { data: {}, status: 200 }, data: { reactions: '' } });
    const result = await store.dispatch(countReactions(token1, { reactionType: 'like' }, accommodationId));
    expect(result).toBeTruthy;
  });
  test('should be able to book a room', async () => {
    mockAxios.post.mockRejectedValueOnce({ response: { data: {}, status: 400, error: 'message' } });
    // eslint-disable-next-line no-unused-vars
    const result = await store.dispatch(createReaction(token1, accommodationId, { reactionType: 'firee' }));
  });
  test('should be able to book a room', async () => {
    mockAxios.post.mockRejectedValueOnce({ response: { data: {}, status: 400, error: 'message' } });
    // eslint-disable-next-line no-unused-vars
    const result = await store.dispatch(getExistingReactions(token1));
  });
});
