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
  addStudent: (campus) => dispatch(addStudentThunk(campus))
});

// Make sure we get the addCampus func through props
AddStudentContainer.propTypes = {
  addStudent: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(AddStudentContainer);


