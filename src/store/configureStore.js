import "regenerator-runtime/runtime";
import {createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import albumsReducer from '../reducers/albums';
import tracksReducer from '../reducers/tracks';
import authReducer from '../reducers/auth';
import root from '../sagas';

const sagaMiddleware = createSagaMiddleware()

const setUpStore = () => {
  const store = createStore(
    combineReducers({
      albumsReducer,
      tracksReducer,
      authReducer
    }),
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  );
  sagaMiddleware.run(root)
  return store;
};

export default setUpStore;
