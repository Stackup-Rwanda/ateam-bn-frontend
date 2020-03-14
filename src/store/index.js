import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import allReducers from '../reducers';
import initialState from './initialState';
import apiMiddleware from '../middlewares/apiMiddleware';

const middlewares = [thunk, apiMiddleware];
const store = createStore(
  combineReducers(allReducers),
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;
