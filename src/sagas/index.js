import "regenerator-runtime/runtime";
import TrackssApi from '../api/TracksApi';
import AlbumsApi from '../api/AlbumsApi';
import AuthApi from '../api/AuthApi';
import { call, put, takeEvery, fork, all } from 'redux-saga/effects';
import * as types from '../actionTypes';

function* loadAlbum(action) {
  if (action != undefined) {
    const albums= yield call(AlbumsApi.getAlbum, action.payload.id);
    yield put({ type: types.LOAD_ALBUM_SUCCESS, payload: albums });
  }
}

function* loadAllAlbums(action) {
  if (action != undefined) {
    const albums = yield call(AlbumsApi.getAllAlbums, action.payload.id);
    yield put({ type: types.LOAD_ALBUMS_SUCCESS, payload: albums });
  }
}

function* loadTracks(action) {
  if (action != undefined) {
    const tracks = yield call(TrackssApi.getAllTracks, action.payload.id);
    yield put({ type: types.LOAD_TRACKS_SUCCESS, payload: tracks });
  }
}

function* authClient(action) {
  if (action != undefined) {
    const response = yield call(AuthApi.loginUser);
    yield put({ type: types.LOGIN_CLIENT_SUCESS, payload: response });
  }
}

function* watchloadAllAlbums() {
  yield takeEvery(types.LOAD_ALBUMS_REQUEST, loadAllAlbums);
}

function* watchloadAlbum() {
  yield takeEvery(types.LOAD_ALBUM_REQUEST, loadAlbum);
}

function* watchLoadTracks() {
  yield takeEvery(types.LOAD_TRACKS_REQUEST, loadTracks);
}

function* watchAuthClient() {
  yield takeEvery(types.LOGIN_CLIENT_REQUEST, authClient);
}

export default function* root() {
  yield all([
    fork(watchLoadTracks),
    fork(watchloadAllAlbums),
    fork(watchloadAlbum),
    fork(watchAuthClient)
  ])
}
