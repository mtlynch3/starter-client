import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addStudentThunk } from '../../store/thunks';
import { AddStudentView } from '../views';

const AddStudentContainer = (props) => {
  return (
    <AddStudentView addStudent={props.addStudent}/>
  );
}

// Map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  addStudent: (student) => dispatch(addStudentThunk(student))
});

// Make sure we get the addStudent func through props
AddStudentContainer.propTypes = {
  addStudent: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(AddStudentContainer);


