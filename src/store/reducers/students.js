import * as at from '../actions/actionTypes';

const initialState = {
  allStudents: [],
};

// REDUCER;
const allStudents = (prevState = initialState, action) => {
  switch (action.type) {
    case at.FETCH_ALL_STUDENTS:
      return action.payload;
    case at.ADD_STUDENT:
      return [...prevState, action.payload];
    case at.DELETE_STUDENT:
      return prevState.filter((student) => student.id !== action.payload);
    case at.EDIT_STUDENT:
      return prevState.map((student) => {
        return student.id === action.payload.id ? action.payload : student;
      });
    default:
      return prevState;
  }
};

export default allStudents;
