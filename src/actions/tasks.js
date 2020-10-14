import ActionTypes from "action-types";
import { v4 as uuid } from "uuid";
import { addNewComments } from "actions/comments";

export function addNewTask(payload) {
  return {
    type: ActionTypes.ADD_NEW_TASK,
    payload,
  };
}

export function deleteTask(payload) {
  return {
    type: ActionTypes.DELETE_TASK,
    payload,
  };
}

export function updateDesc(payload) {
  return {
    type: ActionTypes.UPDATE_DESC,
    payload,
  };
}

export function addCommentsFromTask(payload) {
  return (dispatch) => {
    const commentId = uuid();
    const payloadForTask = {
      taskId: payload.taskId,
      commentId,
    };
    dispatch(addNewCommentsToTask(payloadForTask));
    const payloadForComment = {
      id: commentId,
      description: payload.description,
    };
    dispatch(addNewComments(payloadForComment));
  };
}

export function addNewCommentsToTask(payload) {
  return {
    type: ActionTypes.ADD_NEW_COMMENTS_TO_TASK,
    payload,
  };
}
