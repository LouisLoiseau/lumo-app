import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import courseReducer from './reducers/courseReducer';
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';

const middlewares: ThunkMiddleware[] = [thunkMiddleware, logger];
export default createStore(courseReducer, compose(applyMiddleware(
  ...middlewares
)));