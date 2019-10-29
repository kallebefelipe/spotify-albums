import albumReducer from '../album'
import * as types from '../../actionTypes';


describe('album reducer', () => {
  it('should return the initial state', () => {
    expect(albumReducer(undefined, {})).toEqual(
      {
        album: []
      }
    )
  })

  it('should handle LOAD_ALBUM_SUCCESS', () => {
    expect(
      albumReducer({}, {
        type: types.LOAD_ALBUM_SUCCESS,
        payload: [{}],
      })
    ).toEqual(
      {
        album: [{}],
      }
    )
  })
})
