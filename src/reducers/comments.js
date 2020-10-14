import actionTypes from "action-types";

const initialState = {
  allIds: [],
  byId: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_NEW_COMMENTS:
      return {
        ...state,
        allIds: [...state.allIds, action.payload.id],
        byId: {
          ...state.byId,
          [action.payload.id]: {
            ...action.payload,
            createdDate: new Date(),
          },
        },
      };
    default:
      return state;
  }
}
