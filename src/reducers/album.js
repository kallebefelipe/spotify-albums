import * as types from '../actionTypes';

const albumState = {
  album: [],
}

const albumReducer = (state=albumState, action) => {
  switch(action.type) {
    case types.LOAD_ALBUM_SUCCESS:
      return {
        album: action.payload
      }
    default:
      return state
  }
}

export default albumReducer;
