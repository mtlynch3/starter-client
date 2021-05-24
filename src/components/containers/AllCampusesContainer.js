import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk, deleteCampusThunk, addCampusThunk } from "../../store/thunks";
import { AllCampusesView } from "../views";
import HomePageView from "../views/HomePageView";

class AllCampusesContainer extends Component {
  constructor() {
    super();
    this.state = {
      name : "",
      address : "",
      description : "",
      errors: "",
      validAddress : false
    };
  }

  async componentDidMount() {
    await this.props.fetchAllCampuses();
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    let newCampus = {
      name : this.state.name,
      address : this.state.address,
      description : this.state.description
    }
    await this.props.addCampus(newCampus);
  };



  render() {
    return (
      <div>
        <HomePageView/>
        <form class = "Campus-form" noValidate onSubmit={this.onSubmit}>
        <div class = "input-field">   
          <label>
                NAME
                <input id ="name" type="text" value={this.state.name} onChange={this.onChange} required />
          </label>
        </div> 
        <div class = "input-field">   
          <label>
                Address
                <input id ="address" type="text" value={this.state.address} onChange={this.onChange} required />
          </label>
        </div> 
        <div class = "input-field">   
          <label>
                Description
                <input id ="description" type="text" value={this.state.description} onChange={this.onChange} required />
          </label>
        </div> 
        <button type="submit" class="addBtn">Add Campus</button>
      </form>
      {!this.state.name.length ? <div> Please enter a name for the campus. </div> : ""}
      <AllCampusesView allCampuses={this.props.allCampuses} deleteCampus = {this.props.deleteCampus}/>
    </div>
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allCampuses: state.allCampuses,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    deleteCampus: (campus) => dispatch(deleteCampusThunk(campus)),
    addCampus: (campus) => dispatch(addCampusThunk(campus)),
  };
};

// Type check props;
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllCampusesContainer);