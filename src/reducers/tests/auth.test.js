import authReducer from '../auth'
import * as types from '../../actionTypes';


describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(
      {
        token: null
      }
    )
  })

  it('should handle LOGIN_CLIENT_SUCCESS', () => {
    expect(
      authReducer({}, {
        type: types.LOGIN_CLIENT_SUCCESS,
        payload: [{acess_token: undefined}],
      })
    ).toEqual(
      {
        token: undefined,
      }
    )
  })
})
