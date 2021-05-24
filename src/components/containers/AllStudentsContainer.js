import { Component } from "react";
import { addStudentThunk, fetchAllStudentsThunk } from "../../store/thunks";
import { connect } from "react-redux";
import AllStudentsView from "../views/AllStudentsView"

class AllStudentsContainer extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
  }

  render() {
    return (
      <div>
        <h1> All Students View</h1>
        <AllStudentsView allStudents={this.props.allStudents}> </AllStudentsView>
      </div>
    );
  };
};

// Map state to props;
const mapState = (state) => {
  return {
    allStudents: state.allStudents
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    addStudent: (student) => dispatch(addStudentThunk(student)),
  };
};


// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllStudentsContainer);
