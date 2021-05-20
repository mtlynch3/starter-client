import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { deleteCampusThunk } from "../../store/thunks";

const deleteCampus = (id) => {
  deleteCampusThunk(id);
};

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return <div>There are no campuses.</div>;
  }

  return (
    <div>
      <Navbar />
      <h1>All Campuses</h1>
      <button>
        <Link to={"/addcampus"}>Add Campus</Link>
      </button>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <p>{campus.description}</p>
          <p>{campus.address}</p>
          <img src={campus.imageURL} alt="campus"></img>
          <button onClick={deleteCampus(campus.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
