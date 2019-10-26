import * as types from '../actionTypes';

const tracksState = {
  tracks: []
}

const tracksReducer = (state=tracksState, action) => {
  switch(action.type) {
    case types.LOAD_TRACKS_SUCCESS:
      return {
        tracks: action.data
      }
    default:
      return state
  }
}

export default tracksReducer;
