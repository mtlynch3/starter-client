import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addStudentThunk,
  deleteStudentThunk,
  editStudentThunk,
  fetchStudentThunk,
} from "../../store/thunks";
import NavBarContainer from "../containers/NavBarContainer";
import {
  Button,
  ButtonGroup,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
} from "reactstrap";

// actions enum
const ACTIONS = Object.freeze({ EDIT: 1, DELETE: 2, CREATE: 3 });

class EditStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    //getting student ID from url
    if (this.props.match.params.id !== undefined) {
      await this.props.fetchStudent(this.props.match.params.id);
      this.setState(this.props.student);
    }
  }
  handleChange(buttonEvent) {
    // prevent page refresh
    buttonEvent.preventDefault();
    this.setState({
      ...this.state,
      [buttonEvent.target.name]: buttonEvent.target.value,
    });
  }

  async handleSubmit(buttonEvent, actionType) {
    buttonEvent.preventDefault();
    let newStudent = {};
    switch (actionType) {
      case ACTIONS.EDIT:
        this.props.editStudent(this.state);
        break;
      case ACTIONS.CREATE:
        newStudent = await this.props.createStudent(this.state);
        this.setState(newStudent);
        break;
      case ACTIONS.DELETE:
        newStudent = await this.props.deleteStudent(this.state);
        this.setState(newStudent);
        break;
      default:
        console.error("Unexpected action");
    }
  }

  render() {
    return (
      <div>
        <NavBarContainer />
        <pre>
          {JSON.stringify(this.state || "No valid student selected", null, 4)}
        </pre>
        <Form>
          <FormGroup>
            <Label for="transaction">Edit Student</Label>
            <InputGroup>
              {/* <Input
                type="number"
                name="id"
                placeholder={this.state?.id || "ID"}
                onChange={this.handleChange}
                step="1"
              /> */}
              <Input
                type="text"
                name="firstName"
                placeholder={this.state?.firstName || "First Name"}
                onChange={this.handleChange}
              />
              <Input
                type="text"
                name="lastName"
                placeholder={this.state?.lastName || "Last Name"}
                onChange={this.handleChange}
              />
            </InputGroup>
            <InputGroup>
              <Input
                min={0}
                max={4}
                type="email"
                placeholder={this.state?.email || "Email"}
                name="email"
                onChange={this.handleChange}
              />
              <Input
                min={0}
                max={4}
                type="number"
                placeholder={this.state?.gpa || "GPA"}
                name="gpa"
                onChange={this.handleChange}
                step=".01"
              />
            </InputGroup>
            <FormGroup />
            <ButtonGroup>
              <Button
                color="primary"
                onClick={(e) => this.handleSubmit(e, ACTIONS.EDIT)}
              >
                Edit
              </Button>
              <Button
                value="Delete"
                color="danger"
                onClick={(e) => this.handleSubmit(e, ACTIONS.DELETE)}
              >
                Delete
              </Button>
              <Button
                value="Create"
                color="success"
                onClick={(e) => this.handleSubmit(e, ACTIONS.CREATE)}
              >
                Create
              </Button>
            </ButtonGroup>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    editStudent: (student) => dispatch(editStudentThunk(student)),
    // TODO: Hook these up and test them
    deleteStudent: (student) => dispatch(deleteStudentThunk(student)),
    createStudent: (student) => dispatch(addStudentThunk(student)),
  };
};

export default connect(mapState, mapDispatch)(EditStudentContainer);
