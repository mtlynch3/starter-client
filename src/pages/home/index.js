import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchRecentStudentsThunk,
  fetchRecentCampusesThunk,
} from '../../store/thunks';
// import StudentView from '../views/StudentView';
import HomePageView from './HomePageView';

// const HomePageContainer = () => {
class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchRecentStudents();
    this.props.fetchRecentCampuses();
  }

  render() {
    const { recentStudents, recentCampuses } = this.props;
    // console.log(1, this);
    return (
      <HomePageView
        recentStudents={recentStudents}
        recentCampuses={recentCampuses}
      />
    );
  }
}

const mapState = (state) => {
  return {
    recentStudents: state.allStudents,
    recentCampuses: state.allCampuses,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchRecentStudents: () => dispatch(fetchRecentStudentsThunk()),
    fetchRecentCampuses: () => dispatch(fetchRecentCampusesThunk()),
  };
};

HomePage.propTypes = {
  allStudents: PropTypes.array.isRequired,
  allCampuses: PropTypes.array.isRequired,
  fetchRecentStudents: PropTypes.func.isRequired,
  fetchRecentCampuses: PropTypes.func.isRequired,
};

// export default HomePageContainer;

export default connect(mapState, mapDispatch)(HomePage);
