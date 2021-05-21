import React, { Component } from "react";
import AddCampusView from "../views/AddCampusView";

import { connect } from "react-redux";
import { addCampusThunk } from "../../store/thunks";

class AddCampusContainer extends Component {
  render() {
    return (
      <div>
        <AddCampusView />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCampus: () => dispatch(addCampusThunk()),
  };
};

export default connect(mapState, mapDispatchToProps)(AddCampusContainer);
