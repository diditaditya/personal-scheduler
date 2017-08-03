import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import routineReducer from './routineReducer';

const middlewares = applyMiddleware(thunk);

const store = createStore(routineReducer, middlewares);

export default store;
