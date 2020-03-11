import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import allReducers from '../reducers';
import initialStates from '../initialStates';

const store = createStore(
  combineReducers(allReducers),
  initialStates,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
