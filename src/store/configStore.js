import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import combineReducers from '../reducers';

const enhancers = compose(applyMiddleware(promise, thunk));

export const store = createStore(combineReducers, enhancers);

store.subscribe(() => {
  // console.log('store changed', store.getState());
});
