import "regenerator-runtime/runtime";
import TrackssApi from '../api/TracksApi';
import AlbumsApi from '../api/AlbumsApi';
import { take, call, put, takeEvery, takeLatest, fork, all } from 'redux-saga/effects';
import * as types from '../actionTypes';
import { debuglog } from "util";

function* loadAllAlbums(action) {
  if (action != undefined) {
    debugger
    console.log(action)
    // yield put({ type: types.LOAD_ALBUMS_SUCCESS });
    const albums = yield call(AlbumsApi.getAllAlbums, action.payload.id);
    console.log(albums)
    yield put({ type: types.LOAD_ALBUMS_SUCCESS, payload: albums });
  }
}

function* loadTracks(action) {
  if (action != undefined) {
    debugger
  }
  // yield put({ type: types.LOAD_TRACKS_SUCCESS });
  // const traks = yield call(TrackssApi.getAllTracks, action.payload);
  // yield put({ type: types.LOAD_TRACKS_SUCCESS, payload: traks });
}

// Watchs

function* watchloadAllAlbums() {
  yield takeEvery(types.LOAD_ALBUMS_REQUEST, loadAllAlbums);
}

function* watchLoadTracks() {
  yield takeEvery(types.LOAD_TRACKS_SUCCESS, loadTracks);
}

export default function* root() {
  yield all([
    fork(watchLoadTracks),
    fork(watchloadAllAlbums)
  ])
}
