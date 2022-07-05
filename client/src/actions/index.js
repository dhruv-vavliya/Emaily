import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS, FILTER_SURVEYS } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/surveys", values);

  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const filterSurveys = (value) => async (dispatch) => {
  dispatch({ type: FILTER_SURVEYS, payload: value });
};

export const deleteSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/survey/delete", values);

  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

// fetchUser is a actionCreater which returns a function, taking a dispatch as argument and passing
// to reducers, reducer fetch the action and update the store and passing the result to the action caller.
// Redux thunk is used as Asynchronous Action creater.
// That means, if we want to fetch the data from the server then the calls are asynchronous in nature means it takes time to fetch the
// data from the server, so we can't immediately pass the action to the reducer so here redux thunk pause the action and first of all
// fetch all the information that we needed, and after redux thunk resume the action and passes to the reducer and reducer update the
// state in the store and passes to the action caller.

// export const fetchUser = () => {
//   return function (dispatch) {
//     const res = await axios.get("/api/current_user");

//     dispatch({ type: FETCH_USER, payload: res.data });
//   };
// };
