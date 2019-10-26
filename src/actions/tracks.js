import TrackssApi from '../api/TracksApi';
import * as types from '../actionTypes';

export function loadTracksSuccess(data) {
  return {type: types.LOAD_TRACKS_SUCCESS, data};
}

const loadTracks = (id) => {
  return (dispatch) => {
    return TrackssApi.getAllTracks(id).then(albums => {
      dispatch(loadTracksSuccess(albums));
    });
  }
};

export { loadTracks };

