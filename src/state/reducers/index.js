import { combineReducers } from "redux";
import { gifsReducer } from "./gifsReducer";

export default combineReducers({
  gifsReducer,
});
export const rootReducer = (state = {}) => state;
