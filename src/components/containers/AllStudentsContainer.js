import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteStudentThunk, fetchAllStudentsThunk } from "../../store/thunks";
import { addStudentThunk } from "../../store/thunks";
import { AllStudentsView } from "../views";
import HomePageView from '../views/HomePageView';

class AllStudentsContainer extends Component {

  constructor() {
    super();
    this.state = {
        fname: "",
        lname: "",
        email: "",
        errors: ""
    };
}

  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllStudents();
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const newStudent = {
        firstname: this.state.fname,
        lastname: this.state.lname,
        email: this.state.email
    };

    console.log(newStudent);
    await this.props.addStudent(newStudent);
  };

  render() {
    return (

      <div>
        <HomePageView />

        <form class = "student-form" noValidate onSubmit={this.onSubmit}>
          <div class = "input-field">   
            <label>
                  First Name:
                  <input id ="fname" type="text" value={this.state.fname} onChange={this.onChange} required />
            </label>
          </div> 
          <div class = "input-field">   
            <label>
                  Last Name:
                  <input id ="lname" type="text" value={this.state.lname} onChange={this.onChange} required />
            </label>
          </div> 
          <div class = "input-field">   
            <label>
                  Email:
                  <input id ="email" type="text" value={this.state.email} onChange={this.onChange} required />
            </label>
          </div> 
          <button type="submit" class="addBtn">Add Student</button>
        </form>

        <AllStudentsView
          allStudents={this.props.allStudents}
        />
      </div>
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allStudents: state.allStudents,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    addStudent: (student) => dispatch(addStudentThunk(student)),
    deleteStudent: (student) => dispatch(deleteStudentThunk(student)),
  };
};

// Type check props;
AllStudentsContainer.propTypes = {
  allStudents: PropTypes.array.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
  addStudent: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllStudentsContainer);