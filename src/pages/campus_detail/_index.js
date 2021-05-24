import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk } from "../../store/thunks";
import Navbar from "../../components/navbar";

import CampusActionController from "../../components/campus_action_controller";
import CampusView from "../../components/campus_item";

class CampusContainer extends Component {
  async componentDidMount() {
    //getting campus ID from url
    await this.props.fetchCampus(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <Navbar />
        <CampusView campus={this.props.campus} />
        <CampusActionController create />
      </div>
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);
