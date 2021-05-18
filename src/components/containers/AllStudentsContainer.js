import React from 'react';
import { Component } from 'react';
import { connect } from 'react-router';
import { fetchAllStudentsThunk } from '../../store/thunks';

import { AllStudentView } from '../views';

class AllStudentsContainer extends Component {
  componentDidMount() {
    fetchAllStudentsThunk();
  }
}

export default AllStudentsContainer;
