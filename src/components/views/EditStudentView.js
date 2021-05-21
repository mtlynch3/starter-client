import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";

export default class EditStudentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: this.props.location.state.Id,
      firstname: this.props.location.state.firstname,
      lastname: this.props.location.state.lastname,
      gpa: this.props.location.state.gpa,
      url: this.props.location.state.url,
    };
    this.handlePut = this.handlePut.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeGpa = this.onChangeGpa.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
  }

  async handlePut(event) {
    event.preventDefault();
    let data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      gpa: this.state.gpa,
      url: this.state.url,
    };
    await axios
      .put(`/api/campuses/${this.state.Id}`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.replace(`/campuses/${this.state.Id}`);
  }

  onChangeFirstName(value) {
    this.setState({
      firstname: value.target.value,
    });
  }

  onChangeLastName(value) {
    this.setState({
      lastname: value.target.value,
    });
  }

  onChangeGpa(value) {
    this.setState({
      gpa: value.target.value,
    });
  }

  onChangeUrl(value) {
    this.setState({
      url: value.target.value,
    });
  }

  render() {
    return (
      <div>
        <Navbar />

        <form onSubmit={this.handlePut}>
          <h1>Edit Campus</h1>
          <label>
            Student First Name
            <input
              type="text"
              name="name"
              value={this.state.firstname}
              onChange={this.onChangeFirstName}
            />
          </label>
          <label>
            Student Last Name
            <input
              type="text"
              name="name"
              value={this.state.lastname}
              onChange={this.onChangeLastName}
            />
          </label>
          <label>
            GPA
            <input
              type="text"
              name="location"
              value={this.state.gpa}
              onChange={this.onChangeGpa}
            />
          </label>
          <label>
            Student URL
            <input
              type="text"
              name="img"
              value={this.state.img}
              onChange={this.onChangeUrl}
            />
          </label>

          <button>Save Changes</button>
        </form>
      </div>
    );
  }
}
