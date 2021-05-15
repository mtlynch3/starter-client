import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudentThunk } from '../../store/thunks';

import { StudentView } from '../views';

class StudentContainer extends Component {
  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id);
  }

  render() {
    return <StudentView student={this.props.student} />;
  }
}

const mapStateToProps = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer);
