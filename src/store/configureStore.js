
import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import albumsReducer from '../reducers/albums';

const setUpStore = () => {
  const store = createStore(
    combineReducers({
      albumsReducer,
    }),
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

export default setUpStore;
