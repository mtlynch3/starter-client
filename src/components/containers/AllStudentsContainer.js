import { Component } from "react";
import { fetchAllStudentsThunk } from "../../store/thunks";
import { connect } from "react-redux";
import AllStudentsView from "../views/AllStudentsView"

class AllStudentsContainer extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
    alert("hello");
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
  };
};


// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllStudentsContainer);
