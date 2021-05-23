import { Component } from "react";
import { fetchStudentThunk} from "../../store/thunks";
import { connect } from "react-redux";
import StudentView from "../views/StudentView"

class StudentContainer extends Component {

  async componentDidMount() {
    await this.props.fetchStudent(this.props.match.params.id);
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
  };
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(StudentContainer);
