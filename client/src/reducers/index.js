import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import surveysReducer from "./surveysReducer";

// formReducer is managed entirely by ReduxForm, it records all the values
// from our form automatically.
export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer,
});
