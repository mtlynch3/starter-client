import React, { Component } from "react";
import { connect } from "react-redux";
import { editStudentThunk, fetchStudentThunk } from "../../store/thunks";
import NavBarContainer from "../containers/NavBarContainer";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
} from "reactstrap";

class EditStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.state = {};
  }
  async componentDidMount() {
    //getting student ID from url
    await this.props.fetchStudent(this.props.match.params.id);
    this.setState(this.props.student);
  }
  handleChange(buttonEvent) {
    // prevent page refresh
    buttonEvent.preventDefault();
    console.log(buttonEvent.target.name, buttonEvent.target.value);
    this.setState({
      ...this.state,
      [buttonEvent.target.name]: buttonEvent.target.value,
    });
  }
  // updateState(buttonEvent)

  render() {
    return (
      <div>
        <NavBarContainer />
        <pre>{JSON.stringify(this.state, null, 4)}</pre>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Update");
            this.props.updateStudent(this.state);
            console.log(this.state);
          }}
        >
          <FormGroup>
            <Label for="transaction">Edit Student</Label>
            <InputGroup>
              <Input
                type="number"
                name="id"
                placeholder={this.state?.id}
                onChange={this.handleChange}
                step=".01"
              />
              <Input
                type="text"
                name="firstName"
                placeholder={this.state?.firstName}
                onChange={this.handleChange}
                step=".01"
              />
              <Input
                type="text"
                name="lastName"
                placeholder={this.state?.lastName}
                onChange={this.handleChange}
                step=".01"
              />
            </InputGroup>
            <InputGroup>
              <Input
                min={0}
                max={4}
                type="email"
                placeholder={this.state?.email}
                name="email"
                onChange={this.handleChange}
                step=".01"
              />
              <Input
                min={0}
                max={4}
                type="number"
                placeholder="GPA"
                name="gpa"
                onChange={this.handleChange}
                step=".01"
              />
            </InputGroup>
            <FormGroup />
            <Button type="submit" value="Submit" color="primary">
              Submit
            </Button>
            <Button
              value="Delete"
              color="danger"
              onClick={() => alert("delte unimplemented")}
            >
              Delete
            </Button>
            <Button
              value="create"
              color="success"
              onClick={() => alert(" unimplemented")}
            >
              Create
            </Button>
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
    updateStudent: (student) => dispatch(editStudentThunk(student)),
  };
};

export default connect(mapState, mapDispatch)(EditStudentContainer);
