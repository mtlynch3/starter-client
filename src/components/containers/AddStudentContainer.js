import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addStudentThunk, fetchAllCampusesThunk } from '../../store/thunks';
import { AddStudentView } from '../views';

class AddStudentContainer extends Component {
  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  render() {
    return (
      <AddStudentView addStudent={this.props.addStudent} allCampuses={this.props.allCampuses}/>
    );
  }
}
const mapStateToProps = (state) => ({
  allCampuses: state.allCampuses
});

// Map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  addStudent: (student) => dispatch(addStudentThunk(student)),
  fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())
});

// Make sure we get the addStudent func through props
AddStudentContainer.propTypes = {
  addStudent: PropTypes.func.isRequired,
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStudentContainer);


