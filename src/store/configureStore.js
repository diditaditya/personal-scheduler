import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import routineReducer from './routineReducer';

const logger = createLogger();

const middlewares = applyMiddleware(thunk);

const store = createStore(routineReducer, middlewares);

export default store;
