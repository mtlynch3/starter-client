import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCampusThunk } from '../../store/thunks';
import { AddCampusView } from '../views';

const AddCampusContainer = (props) => {
  return (
    <AddCampusView allCampus={props.allCampus}/>
  );
}

// Map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  addCampus: (campus) => dispatch(addCampusThunk(campus))
});

// Make sure we get the addCampus func through props
AddCampusContainer.propTypes = {
  addCampus: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(AddCampusContainer);


