import Navbar from "./Navbar";
import React, { Component } from "react";
import axios from "axios";

class AddCampusView extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.formSubmit = this.formSubmit.bind(this);
  }

  async formSubmit(event) {
    event.preventDefault();
    if (
      event.target.campusname.value === null ||
      event.target.campusname.value === ""
    ) {
      alert("Please Fill All Required Field");
      return 0;
    }
    await axios
      .post(`/api/campuses`, {
        name: event.target.campusname.value,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.replace("/campuses");
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "#265077",
          height: "100vh",
        }}
      >
        <Navbar />

        <form onSubmit={this.formSubmit}>
          <label
            style={{
              display: "block",
              margin: "20px",
            }}
          >
            Campus Name <input type="text" name="campusname" />
          </label>
          <button
            style={{
              display: "block",
              margin: "20px",
              backgroundColor: "#2d5f5d",
              borderRadius: "5px",
              border: "0px",
              padding: "15px",
            }}
            type="submit"
          >
            Add Campus
          </button>
        </form>
      </div>
    );
  }
}

export default AddCampusView;
