import albumsReducer from '../albums'
import * as types from '../../actionTypes';


describe('albums reducer', () => {
  it('should return the initial state', () => {
    expect(albumsReducer(undefined, {})).toEqual(
      {
        albums: []
      }
    )
  })

  it('should handle LOAD_ALBUMS_SUCCESS', () => {
    expect(
      albumsReducer({}, {
        type: types.LOAD_ALBUMS_SUCCESS,
        payload: [{}],
      })
    ).toEqual(
      {
        albums: [{}],
      }
    )
  })
})
