import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import contactListReducer from "./contactListReducer";
import fetchContactReducer from "./fetchContactReducer";

export default combineReducers({
  form: formReducer,
  authStatus: authReducer,
  contactList: contactListReducer,
  contact: fetchContactReducer
});
