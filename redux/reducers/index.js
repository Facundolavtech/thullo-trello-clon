import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import modalReducer from "./modalReducer";

export default combineReducers({
  auth: authReducer,
  modal: modalReducer,
});
