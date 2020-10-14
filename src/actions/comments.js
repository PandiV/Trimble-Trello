import ActionTypes from "action-types";

export function addNewComments(payload) {
  return {
    type: ActionTypes.ADD_NEW_COMMENTS,
    payload,
  };
}
