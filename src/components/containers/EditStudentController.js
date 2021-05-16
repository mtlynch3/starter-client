import React, { Component, } from "react";
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
  componentDidMount() {
    //getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);

  }
  handleSubmit(buttonEvent) {
    // prevent page refresh
    buttonEvent.preventDefault();
    console.log(buttonEvent)

    // clear the unmanaged items from the form
  }

  render() {
    return (
      <div>
        <NavBarContainer />
        <Typography > Edit student</Typography>
        <p>{JSON.stringify(this.props.student)}</p>
        <Form onSubmit={this.handleSubmit} >
          <FormGroup>
            <Label for="transaction">Transaction</Label>
            <InputGroup size="lg">
              <Input
                placeholder="Description"
                type="text"
              />
              <Input
                placeholder="Date"
                type="date"
              />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">$</InputGroupAddon>
              <Input
                placeholder="Amount"
                min={0}
                max={1000}
                type="number"
                step="1"
              />
              <InputGroupAddon addonType="append">.00</InputGroupAddon>
            </InputGroup>
            <FormGroup />
            <Button type="submit" value="Submit">
              Submit
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
