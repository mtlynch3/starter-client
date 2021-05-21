import React, { Component } from "react";
import EditStudentView from "../views/EditStudentView";
import { connect } from "react-redux";
import { addStudentThunk } from "../../store/thunks";

class EditStudentContainer extends Component {
  render() {
    return (
      <div>
        <EditStudentView />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: () => dispatch(addStudentThunk()),
  };
};

export default connect(mapState, mapDispatchToProps)(EditStudentContainer);