import * as at from "../actions/actionTypes";

const defaultState = {
  all: [],
};

const allStudents = (state = defaultState, action) => {
  switch (action.type) {
    case at.FETCH_ALL_STUDENTS:
      return { ...state, all: [...action.payload] };
    case at.ADD_STUDENT:
      return { ...state, all: [...state.all, action.payload] };
    case at.DELETE_STUDENT:
      return {
        ...state,
        all: state.all.filter((student) => student.id !== action.payload),
      };
    case at.EDIT_STUDENT:
      return {
        ...state,
        all: state.all.map((student) =>
          student.id === action.payload.id ? action.payload : student
        ),
      };
    default:
      return state;
  }
};

export default allStudents;
