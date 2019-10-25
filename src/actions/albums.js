import AlbumsApi from '../api/AlbumsApi';
import * as types from '../actionTypes';

export function loadAlbumsSuccess(data) {
  return {type: types.LOAD_ALBUMS_SUCCESS, data};
}

const loadAlbums = () => {
  return (dispatch) => {
    return AlbumsApi.getAllAlbums().then(albums => {
      dispatch(loadAlbumsSuccess(albums));
    });
  }
};

export { loadAlbums };
