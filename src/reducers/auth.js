import * as types from '../actionTypes';

const authState = {
  token: localStorage.getItem("token"),
  registerFail: false
}

const userInfo = (action) => {
  return {
    token: action.payload.token,
  };
}

const authReducer = (state= authState, action) => {
  switch(action.type) {
    case types.LOGIN_CLIENT_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return userInfo(action);
    default:
        return state
  }
}

export default authReducer;