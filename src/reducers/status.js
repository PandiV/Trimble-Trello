import actionTypes from "action-types";
import { v4 as uuid } from "uuid";

const initialState = {
  sprintName: "SPRINT 1",
  allIds: [],
  byId: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_NEW_STATUS:
      const id = uuid();
      return {
        ...state,
        allIds: [...state.allIds, id],
        byId: {
          ...state.byId,
          [id]: {
            id,
            title: action.payload,
            tasks: [],
          },
        },
      };
    case actionTypes.ADD_NEW_TASK_TO_STATUS:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.statusId]: {
            ...state.byId[action.payload.statusId],
            tasks: [
              ...state.byId[action.payload.statusId].tasks,
              action.payload.taskId,
            ],
          },
        },
      };

    case actionTypes.SWAP_STATUS:
      const allIdsTemp = [...state.allIds];
      const dropIndex = allIdsTemp.findIndex(
        (data) => data === action.payload.dropStatusId
      );
      const dragIndex = allIdsTemp.findIndex(
        (data) => data === action.payload.dragStatusId
      );
      [allIdsTemp[dropIndex], allIdsTemp[dragIndex]] = [
        allIdsTemp[dragIndex],
        allIdsTemp[dropIndex],
      ];

      return {
        ...state,
        allIds: allIdsTemp,
      };

    case actionTypes.SWAP_TASKS_IN_SAME_STATUS:
      const statusData = { ...state.byId[action.payload.statusId] };
      const tasks = [...statusData.tasks];
      const dropTaskIndex = tasks.findIndex(
        (data) => data === action.payload.dropTaskId
      );
      const dragTaskIndex = tasks.findIndex(
        (data) => data === action.payload.dragTaskId
      );
      [tasks[dropTaskIndex], tasks[dragTaskIndex]] = [
        tasks[dragTaskIndex],
        tasks[dropTaskIndex],
      ];
      statusData.tasks = tasks;
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.statusId]: { ...statusData },
        },
      };

    case actionTypes.ADD_TASKS_IN_DIFFERENT_STATUS:
      const dragStatusData = { ...state.byId[action.payload.dragStatusId] };
      const dropStatusData = { ...state.byId[action.payload.dropStatusId] };

      dragStatusData.tasks = dragStatusData.tasks.filter(
        (data) => data !== action.payload.dragTaskId
      );

      if (action.payload.dropTaskId) {
        const dropTaskIndexIntoDropStatus = dropStatusData.tasks.findIndex(
          (data) => data === action.payload.dropTaskId
        );

        dropStatusData.tasks = [
          ...dropStatusData.tasks.slice(0, dropTaskIndexIntoDropStatus),
          action.payload.dragTaskId,
          ...dropStatusData.tasks.slice(dropTaskIndexIntoDropStatus),
        ];
      } else {
        dropStatusData.tasks = [
          ...dropStatusData.tasks,
          action.payload.dragTaskId,
        ];
      }

      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.dragStatusId]: { ...dragStatusData },
          [action.payload.dropStatusId]: { ...dropStatusData },
        },
      };

    case actionTypes.DELETE_STATUS:
      return {
        ...state,
        allIds: [...state.allIds.filter((data) => data !== action.payload)],
        byId: {
          ...state.byId,
          [action.payload]: undefined,
        },
      };

    case actionTypes.DELETE_TASK_IN_STATUS:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.statusId]: {
            ...state.byId[action.payload.statusId],
            tasks: state.byId[action.payload.statusId].tasks.filter(
              (data) => data !== action.payload.taskId
            ),
          },
        },
      };

    default:
      return state;
  }
}
