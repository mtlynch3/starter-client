import * as ac from "./actions/actionCreators";
const axios = require("axios");

// THUNKS

//All campuses
export const fetchAllCampusesThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`/prod/campus`);
    dispatch(ac.fetchAllCampuses(res.data.results));
  } catch (err) {
    console.error(err);
  }
};

//Single campus
export const fetchCampusThunk = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`/prod/campus/${id}`);
    console.log(res.data);
    dispatch(ac.fetchCampus(res.data));
  } catch (err) {
    console.error(err);
  }
};

//All students
export const fetchAllStudentsThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`/prod/student`);
    dispatch(ac.fetchAllStudents(res.data.result));
  } catch (err) {
    console.error(err);
  }
};

export const addStudentThunk = (student) => async (dispatch) => {
  try {
    let res = await axios.post(`/prod/student`, student);
    dispatch(ac.addStudent(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const deleteStudentThunk = (studentId) => async (dispatch) => {
  try {
    await axios.delete(`/prod/student/${studentId}`);
    //delete succesful so change state with dispatch
    dispatch(ac.deleteStudent(studentId));
  } catch (err) {
    console.error(err);
  }
};

export const editStudentThunk = (student) => async (dispatch) => {
  try {
    let updatedStudent = await axios.put(
      `/prod/student/${student.id}`,
      student
    );
    dispatch(ac.editStudent(updatedStudent));
  } catch (err) {
    console.error(err);
  }
};

//Single student
export const fetchStudentThunk = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`/prod/student/${id}`);
    dispatch(ac.fetchStudent(res.data));
  } catch (err) {
    console.error(err);
    // alert(`Student with id ${id} doesn't exist.`)
  }
};
