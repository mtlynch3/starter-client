import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return <div>There are no campuses.</div>;
  }

  return (
    <div>
      <center><h1>All Campuses View</h1></center>
      <Link className = "links" to = "/">Home</Link>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <img src = {campus.imageUrl} alt="Campus Portrait" width = "150" height = "150" />
          <Link to={`/campus/${campus.id}`}>
            <h3>{campus.name}</h3>
          </Link>
         
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;