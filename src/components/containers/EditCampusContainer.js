import React, { Component } from "react";
import EditCampusView from "../views/EditCampusView";
import { connect } from "react-redux";
import { addStudentThunk } from "../../store/thunks";

class EditCampusContainer extends Component {
  render() {
    return (
      <div>
        <EditCampusView />
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

export default connect(mapState, mapDispatchToProps)(EditCampusContainer);
