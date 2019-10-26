
import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import albumsReducer from '../reducers/albums';
import albumReducer from '../reducers/album';
import tracksReducer from '../reducers/tracks';

const setUpStore = () => {
  const store = createStore(
    combineReducers({
      albumsReducer,
      albumReducer,
      tracksReducer
    }),
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

export default setUpStore;
