import ActionTypes from "action-types";
import { v4 as uuid } from "uuid";
import { addNewTask, deleteTask } from "./tasks";

export function addNewStatus(payload) {
  return {
    type: ActionTypes.ADD_NEW_STATUS,
    payload,
  };
}

export function deleteStatus(payload) {
  return {
    type: ActionTypes.DELETE_STATUS,
    payload,
  };
}

export function deleteTaskInStatus(payload) {
  return {
    type: ActionTypes.DELETE_TASK_IN_STATUS,
    payload,
  };
}

export function deleteTaskFromStatus(payload) {
  return (dispatch) => {
    console.log(payload, " payload ");
    dispatch(deleteTaskInStatus(payload));
    dispatch(deleteTask(payload.taskId));
  };
}

export function addNewTaskFromStatus(payload) {
  return (dispatch) => {
    const taskId = uuid();
    const payloadForStatus = {
      statusId: payload.statusId,
      taskId,
    };
    dispatch(addNewTaskToStatus(payloadForStatus));
    const payloadForTask = {
      taskId,
      title: payload.title,
      description: "",
      comments: [],
    };
    dispatch(addNewTask(payloadForTask));
  };
}

export function addNewTaskToStatus(payload) {
  return {
    type: ActionTypes.ADD_NEW_TASK_TO_STATUS,
    payload,
  };
}

export function swapStatus(payload) {
  return {
    type: ActionTypes.SWAP_STATUS,
    payload,
  };
}

export function swapTaskInSameStatus(payload) {
  return {
    type: ActionTypes.SWAP_TASKS_IN_SAME_STATUS,
    payload,
  };
}

export function addTaskInDifferentStatus(payload) {
  return {
    type: ActionTypes.ADD_TASKS_IN_DIFFERENT_STATUS,
    payload,
  };
}

export function swapTasks(payload) {
  return (dispatch) => {
    if (payload.dragStatusId === payload.dropStatusId) {
      dispatch(
        swapTaskInSameStatus({
          statusId: payload.dragStatusId,
          dropTaskId: payload.dropTaskId,
          dragTaskId: payload.dragTaskId,
        })
      );
    } else {
      dispatch(addTaskInDifferentStatus(payload));
    }
  };
}
