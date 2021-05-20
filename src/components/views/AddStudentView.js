import React, { Component } from "react";
import Navbar from "./Navbar";

export default class AddStudentView extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    this.props.addCampus(
      JSON.stringify({
        firstname: event.target.firstname.value,
        lastname: event.target.lastname.value,
        email: event.target.email.value,
      })
    );
  }

  render() {
    return (
      <div>
        <Navbar />

        <form onSubmit={this.formSubmit}>
          <h1>Add Student</h1>
          <label>
            First Name
            <input type="text" name="firstname" />
          </label>
          <label>
            Last Name
            <input type="text" name="lastname" />
          </label>
          <label>
            Email
            <input type="text" name="email" />
          </label>
          <button>Add Campus</button>
        </form>
      </div>
    );
  }
}
