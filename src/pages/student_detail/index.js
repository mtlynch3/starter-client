import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk } from "../../store/thunks";
import NavBarContainer from "../../components/navbar";

import StudentActionsController from "../../components/student_action_controller/index.js";
import StudentView from "../../components/student_item";

class StudentContainer extends Component {
  componentDidMount() {
    //getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <NavBarContainer />
        <StudentView student={this.props.student} />
        <StudentActionsController create={false} student={this.props.student} />
      </div>
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);
