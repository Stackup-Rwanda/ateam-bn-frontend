import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import allReducers from '../reducers';

const store = createStore(
  combineReducers(allReducers),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
