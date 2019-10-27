import * as types from '../actionTypes';

const albumsState = {
  albums: [],
  tracks: []
}

const albumsReducer = (state=albumsState, action) => {
  switch(action.type) {
    case types.LOAD_ALBUMS_SUCCESS:
      return {
        albums: action.payload
      }
    default:
      return state
  }
}

export default albumsReducer;
