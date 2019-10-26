import AlbumsApi from '../api/AlbumsApi';
import * as types from '../actionTypes';

export function loadAllAlbumsSuccess(data) {
  return {type: types.LOAD_ALBUMS_SUCCESS, data};
}

export function loadAlbumSuccess(data) {
  return {type: types.LOAD_ALBUMS_SUCCESS, data};
}

const loadAllAlbums = (id) => {
  return (dispatch) => {
    return AlbumsApi.getAllAlbums(id).then(albums => {
      dispatch(loadAllAlbumsSuccess(albums));
    });
  }
};

const loadAlbum = () => {
  return (dispatch) => {
    return AlbumsApi.getAlbum().then(album => {
      dispatch(loadAlbumSuccess(album));
    });
  }
};

export { loadAllAlbums, loadAlbum };
