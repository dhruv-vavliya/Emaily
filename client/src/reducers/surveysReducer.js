import { FETCH_SURVEYS, FILTER_SURVEYS } from "../actions/types";

export default function (state = { surveysList: [], searchTerm: "" }, action) {
  switch (action.type) {
    case FETCH_SURVEYS:
      return { ...state, surveysList: action.payload };
    case FILTER_SURVEYS:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
}
