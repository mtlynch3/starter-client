import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

class AddStudentAllStudentView extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.formSubmit = this.formSubmit.bind(this);
  }

  async formSubmit(event) {
    event.preventDefault();

    if (
      event.target.firstname.value === null ||
      event.target.firstname.value === '' ||
      event.target.lastname.value === null ||
      event.target.lastname.value === '' ||
      event.target.email.value === null ||
      event.target.email.value === ''
    ) {
      alert('Please Fill All Required Field');
      return 0;
    }
    await axios
      .post(`/api/students`, {
        firstname: event.target.firstname.value,
        lastname: event.target.lastname.value,
        email: event.target.email.value,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    this.props.history.push(`/students`);
  }

  render() {
    return (
      <div>
        <Navbar />

        <form onSubmit={this.formSubmit}>
          <h1>Add Student</h1>
          <label>
            First Name*
            <input type='text' name='firstname' />
          </label>
          <label>
            Last Name*
            <input type='text' name='lastname' />
          </label>
          <label>
            Email*
            <input type='text' name='email' />
          </label>
          <button>Add Student</button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddStudentAllStudentView);
