import ActionTypes from "action-types";

export function userAuthentication(payload) {
  return (dispatch, getState) => {
    const { users } = getState();
    const isAuthenticated = users.userList.some(
      ({ username, password }) =>
        username === payload.username && password === payload.password
    );
    if (isAuthenticated) {
      const indexOfLoggedUser = users.userList.findIndex(
        ({ username, password }) =>
          username === payload.username && password === payload.password
      );
      dispatch(updateLoginStatusByIndex(indexOfLoggedUser));
      dispatch(updateUserName(payload.username));
    }
  };
}

export function updateLoginStatusByIndex(index) {
  return {
    type: ActionTypes.UPDATE_LOGIN_STATUS_BY_INDEX,
    payload: index
  };
}

export function updateUserName(username) {
  return {
    type: ActionTypes.UPDATE_USER_NAME,
    payload: username
  };
}

export function resetUsers() {
  return {
    type: ActionTypes.RESET_USERS
  };
}
