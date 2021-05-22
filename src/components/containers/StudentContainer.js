import { Component } from "react";
import { addStudentThunk, fetchAllStudentsThunk } from "../../store/thunks";
import { connect } from "react-redux";
import AllStudentsView from "../views/AllStudentsView"

class StudentContainer extends Component {

  render () {
    return (
      <h1>Single Student View</h1>
    );
  }
};

export default StudentContainer;