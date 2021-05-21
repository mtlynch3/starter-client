import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const deleteCampus = async (id) => {
  await axios
    .delete(`/api/campuses/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  window.location.replace(`/campuses`);
};

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return (
      <div>
        <Navbar />
        <div>There are no campuses.</div>
        <button>
          <Link to={"/addcampus"}>Add Campus</Link>
        </button>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <h1>All Campuses</h1>
      <button>
        <Link to={"/addcampus"}>Add Campus</Link>
      </button>
      {props.allCampuses.map((campus) => (
        <div>
          <div key={campus.id}>
            <Link to={`/campus/${campus.id}`}>
              <h1>{campus.name}</h1>
            </Link>
            <button>
              <Link
                to={{
                  pathname:`/editcampus`,
                  state: {
                    campusId: campus.id,
                    name: campus.name,
                    location: campus.address,
                    url: campus.imageURL,
                    description: campus.description,
                  },
                }}
              >
                Edit Campus
              </Link>
            </button>
            <button onClick={() => deleteCampus(campus.id)}>
              Delete Campus
            </button>

            <p>{campus.description}</p>
            <p>{campus.address}</p>
            <img src={campus.imageURL} alt="campus"></img>
          </div>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
