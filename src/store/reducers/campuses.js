import * as at from "../actions/actionTypes";

const defaultState = {
  all: [],
};

const allCampuses = (state = defaultState, action) => {
  switch (action.type) {
    case at.FETCH_ALL_CAMPUSES:
      return {
        ...state,
        all: action.payload,
      };
    case at.ADD_CAMPUS:
      return {
        ...state,
        all: [action.payload, ...state.all],
      };
    case at.DELETE_CAMPUS:
      return {
        ...state,
        all: state.all.filter((campus) => campus.id !== action.payload),
      };
    case at.EDIT_CAMPUS:
      return {
        ...state,
        all: state.all.map((campus) =>
          campus.id === action.payload.id ? action.payload : campus
        ),
      };
    default:
      return state;
  }
};

export default allCampuses;
