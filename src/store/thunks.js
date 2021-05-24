import api from "../config/api";
import * as ac from "./actions/actionCreators";
const axios = require("axios");
const BACKEND_URL = api.URL;

// THUNKS

//All campuses
export const fetchAllCampusesThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${BACKEND_URL}/campus`);
    dispatch(ac.fetchAllCampuses(res.data.results));
  } catch (err) {
    console.error(err);
  }
};

export const addCampusThunk = (campus) => async (dispatch) => {
  try {
    let res = await axios.post(`${BACKEND_URL}/campus`, campus);
    dispatch(ac.addCampus(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const deleteCampusThunk = (campusId) => async (dispatch) => {
  try {
    await axios.delete(`${BACKEND_URL}/campus/${campusId}`);
    //delete succesful so change state with dispatch
    dispatch(ac.deleteCampus(campusId));
  } catch (err) {
    console.error(err);
  }
};

export const editCampusThunk = (campus) => async (dispatch) => {
  try {
    let updatedCampus = await axios.patch(
      `${BACKEND_URL}/campus/${campus.id}`,
      campus
    );
    dispatch(ac.editCampus(updatedCampus));
  } catch (err) {
    console.error(err);
  }
};
//Single campus
export const fetchCampusThunk = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`${BACKEND_URL}/campus/${id}`);
    dispatch(ac.fetchCampus(res.data));
  } catch (err) {
    console.error(err);
  }
};

//All students
export const fetchAllStudentsThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${BACKEND_URL}/student`);
    dispatch(ac.fetchAllStudentsAction(res.data.result));
  } catch (err) {
    console.error(err);
  }
};

export const addStudentThunk =
  ({ id, ...newStudent }) =>
  async (dispatch) => {
    try {
      let res = await axios.post(`${BACKEND_URL}/student/`, newStudent);
      dispatch(ac.addStudent(res.data));
    } catch (err) {
      console.error(err);
    }
  };

export const deleteStudentThunk =
  ({ id }) =>
  async (dispatch) => {
    try {
      await axios.delete(`${BACKEND_URL}/student/${id}`);
      //delete succesful so change state with dispatch
      dispatch(ac.deleteStudent(id));
    } catch (err) {
      console.error(err);
    }
  };

export const editStudentThunk =
  ({ id, ...rest }) =>
  async (dispatch) => {
    try {
      let updatedStudent = await axios.patch(
        `${BACKEND_URL}/student/${id}`,
        rest
      );
      dispatch(ac.editStudent(updatedStudent));
    } catch (err) {
      console.error(err);
    }
  };

//Single student
export const fetchStudentThunk = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`${BACKEND_URL}/student/${id}`);
    dispatch(ac.fetchStudent(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const fetchRecentStudentsThunk = () => async (dispatch) => {
  try {
    const recentStudents = await axios.get(
      `${BACKEND_URL}/student/recent?=limit=3`
    );
    dispatch(ac.fetchRecentStudents(recentStudents));
  } catch (error) {
    console.error(error);
  }
};

export const fetchRecentCampusesThunk = () => async (dispatch) => {
  try {
    const recentCampuses = await axios.get(
      `${BACKEND_URL}/campus/recent?=limit=3`
    );
    dispatch(ac.fetchRecentCampuses(recentCampuses));
  } catch (error) {
    console.error(error);
  }
};
