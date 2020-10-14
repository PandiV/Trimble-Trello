import { combineReducers } from "redux";
import users from "./users";
import status from "./status";
import tasks from "./tasks";
import comments from "./comments";

export default combineReducers({
  users,
  status,
  tasks,
  comments,
});
