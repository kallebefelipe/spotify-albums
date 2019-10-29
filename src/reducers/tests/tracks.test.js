import tracksReducer from '../tracks'
import * as types from '../../actionTypes';


describe('TRACKS reducer', () => {
  it('should return the initial state', () => {
    expect(tracksReducer(undefined, {})).toEqual(
      {
        tracks: []
      }
    )
  })

  it('should handle LOAD_TRACKS_SUCCESS', () => {
    expect(
      tracksReducer({}, {
        type: types.LOAD_TRACKS_SUCCESS,
        payload: [{}],
      })
    ).toEqual(
      {
        tracks: [{}],
      }
    )
  })
})
