import * as types from '../actionTypes';

const authState = {
  token: localStorage.getItem("token")
}

const userInfo = (action) => {
  return {
    token: action.payload.token,
  };
}

const authReducer = (state= authState, action) => {
  switch(action.type) {
    case types.LOGIN_CLIENT_SUCCESS:
      localStorage.setItem("token", action.payload.access_token);
      return userInfo(action);
    default:
        return state
  }
}

export default authReducer;
