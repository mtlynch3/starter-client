import { FETCH_STUDENT } from '../actions/actionTypes';

const initialState = {
  student: [],
};

const student = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENT:
      return action.payload;
    default:
      return state;
  }
};

export default student;
