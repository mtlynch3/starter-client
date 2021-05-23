import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCampusThunk } from '../../store/thunks';
import { NewCampusView } from '../views';

const NewCampusContainer = (props) => {
  return (
    <NewCampusView allCampus={props.allCampus}/>
  );
}

// Map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  addCampus: (campus) => dispatch(addCampusThunk(campus))
});

// Make sure we get the addCampus func through props
NewCampusContainer.propTypes = {
  addCampus: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(NewCampusContainer);
