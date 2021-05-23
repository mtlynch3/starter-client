import { Component } from "react";
import { fetchStudentThunk, fetchCampusThunk} from "../../store/thunks";
import { connect } from "react-redux";
import StudentView from "../views/StudentView"

class StudentContainer extends Component {

  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id);
    // this.props.fetchCampus(this.props.match.params.student.campusId);
  }

  render () {
    return (
      <StudentView student = {this.props.student} campus = {this.props.campus}></StudentView>
    );
  }
};

// Map state to props;
const mapState = (state) => {
  return {
    student: state.student
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    fetchCampus: (id) => dispatch(fetchCampusThunk(id))
  };
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(StudentContainer);
