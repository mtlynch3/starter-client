import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";

export default class EditCampusView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campusId: this.props.location.state.campusId,
      name: this.props.location.state.name,
      location: this.props.location.state.location,
      url: this.props.location.state.url,
      description: this.props.location.state.description,
    };
    this.handlePut = this.handlePut.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
  }

  async handlePut(event) {
    event.preventDefault();
    let data = {
      name: this.state.name,
      address: this.state.location,
      imageURL: this.state.url,
      description: this.state.description,
    };
    await axios
      .put(`/api/campuses/${this.state.campusId}`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.replace(`/campuses/${this.state.campusId}`);
  }

  onChangeName(value) {
    this.setState({
      name: value.target.value,
    });
  }

  onChangeLocation(value) {
    this.setState({
      location: value.target.value,
    });
  }

  onChangeUrl(value) {
    this.setState({
      url: value.target.value,
    });
  }

  onChangeDescription(value) {
    this.setState({
      description: value.target.value,
    });
  }

  render() {
    return (
      <div>
        <Navbar />

        <form onSubmit={this.handlePut}>
          <h1>Edit Campus</h1>
          <label>
            Campus Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </label>
          <label>
            Campus Location
            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.onChangeLocation}
            />
          </label>
          <label>
            Campus Image URL
            <input
              type="text"
              name="img"
              value={this.state.img}
              onChange={this.onChangeUrl}
            />
          </label>
          <label>
            Description
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </label>
          <button>Save Changes</button>
        </form>
      </div>
    );
  }
}
