import { createStore, applyMiddleware } from 'redux';
import chuckNorris from './reducers';
import { isPromise } from '../util';

/**
 * Middleware to resolve promises from payloads.
 * 
 * @param {Object} store - The redux store.
 */
const promiseMiddleWare = store => next => action => {
  if (isPromise(action.payload)) {
    action.payload
      .then(
        res => {
          action.payload = res;
          store.dispatch(action);
        },
        error => {
          console.error('Failed to fetch!')
          store.dispatch(action);
        }
      );
    return;
  }
  next(action);
}

export default createStore(chuckNorris, applyMiddleware(promiseMiddleWare))