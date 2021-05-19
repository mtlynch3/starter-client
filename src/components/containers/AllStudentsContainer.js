import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllStudentsThunk } from '../../store/thunks';
import { AllStudentsView } from '../views/';

class AllStudentsContainer extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
  }

  render() {
    return <AllStudentsView allStudents={this.props.allStudents} />;
  }
}

const mapStateToProps = (state) => {
  return {
    allStudents: state.allStudents,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
  };
};

// Type check props;
AllStudentsContainer.propTypes = {
  allStudents: PropTypes.array.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStudentsContainer);
