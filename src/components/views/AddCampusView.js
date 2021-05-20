import Navbar from "./Navbar";
import React, { Component } from "react";

export default class AddCampusView extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(JSON.stringify({ name: event.target.campusname.value }));
    this.props.addCampus(
      JSON.stringify({ name: event.target.campusname.value })
    );
  }

  render() {
    return (
      <div>
        <Navbar />

        <form onSubmit={this.formSubmit}>
          <label>
            Campus Name
            <input type="text" name="campusname" />
          </label>
          <button type="submit">Add Campus</button>
        </form>
      </div>
    );
  }
}
