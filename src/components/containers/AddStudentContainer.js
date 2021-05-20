import React, { Component } from "react";
import AddStudentView from "../views/AddStudentView";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addStudentThunk } from "../../store/thunks";

class AddStudentContainer extends Component {
  render() {
    return (
      <div>
        <AddStudentView addCampus={this.props.addStudent} />
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

export default connect(mapState, mapDispatchToProps)(AddStudentContainer);
