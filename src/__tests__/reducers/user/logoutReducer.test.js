import initialState from '../../../store/initialState';
import logoutReducer from '../../../reducers/user';
import { userActionTypes } from '../../../actionTypes';

describe('Testing the logoutReducer', () => {
    it('LOGOUT_START', () => {
        const state = logoutReducer(initialState.user, { type: userActionTypes.LOGOUT_START, payload: null });
        expect(state).toHaveProperty('logout');
        expect(state.logout).toHaveProperty('loading');
        expect(state.logout.loading).toBeTruthy();
    });
    it('LOGOUT_END', () => {
        const state = logoutReducer(initialState.user, { type: userActionTypes.LOGOUT_END, payload: null });
        expect(state).toHaveProperty('logout');
        expect(state.logout).toHaveProperty('loading');
        expect(state.logout.loading).toBeFalsy();
    });
    it('LOGOUT_SUCCESS', () => {
        const state = logoutReducer(initialState.user, { type: userActionTypes.LOGOUT_SUCCESS, payload: { message: 'logged out successfuly' } });
        expect(state).toHaveProperty('logout');
        expect(state.logout).toHaveProperty('message');
        expect(state.logout.message).toEqual('logged out successfuly');
    });
    it('LOGOUT_FAILURE', () => {
        const state = logoutReducer(initialState.user, { type: userActionTypes.LOGOUT_FAILURE, payload: { error: 'failed to log out' } });
        expect(state).toHaveProperty('logout');
        expect(state.logout).toHaveProperty('logoutErrors');
        expect(state.logout.logoutErrors).toHaveProperty('error');
        expect(state.logout.logoutErrors.error).toEqual('failed to log out');
    });
});
