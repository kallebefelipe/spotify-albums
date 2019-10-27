import "regenerator-runtime/runtime";
import TrackssApi from '../api/TracksApi';
import AlbumsApi from '../api/AlbumsApi';
import { take, call, put, takeEvery, takeLatest, fork, all } from 'redux-saga/effects';
import * as types from '../actionTypes';
import { debuglog } from "util";

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

function* watchloadAllAlbums() {
  yield takeEvery(types.LOAD_ALBUMS_REQUEST, loadAllAlbums);
}

function* watchloadAlbum() {
  yield takeEvery(types.LOAD_ALBUM_REQUEST, loadAlbum);
}

function* watchLoadTracks() {
  yield takeEvery(types.LOAD_TRACKS_REQUEST, loadTracks);
}

export default function* root() {
  yield all([
    fork(watchLoadTracks),
    fork(watchloadAllAlbums),
    fork(watchloadAlbum)
  ])
}
