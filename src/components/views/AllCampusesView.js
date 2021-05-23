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
    <div
      style={{
        backgroundColor: "#265077",
        height: "100%",
      }}
    >
      <Navbar />
      <h1
        style={{
          display: "block",
          margin: "20px",
        }}
      >
        All Campuses
      </h1>
      <button
        style={{
          display: "block",
          margin: "20px",
          backgroundColor: "#2d5f5d",
          borderRadius: "5px",
          border: "0px",
          padding: "15px",
        }}
      >
        <Link to={"/addcampus"}>Add Campus</Link>
      </button>
      {props.allCampuses.map((campus) => (
        <div
          style={{
            margin: "20px",
            border: "3px solid #2d5f5d",
            borderRadius: "10px",
            backgroundColor: "#022140",
            padding: "50px",
          }}
        >
          <div key={campus.id}>
            <Link to={`/campus/${campus.id}`}>
              <h1>{campus.name}</h1>
            </Link>
            <button
              style={{
                display: "inline",
                margin: "20px",
                backgroundColor: "#2d5f5d",
                borderRadius: "5px",
                border: "0px",
                padding: "15px",
              }}
            >
              <Link
                to={{
                  pathname: `/editcampus`,
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
            <button
              style={{
                display: "inline",
                margin: "20px",
                backgroundColor: "#2d5f5d",
                borderRadius: "5px",
                border: "0px",
                padding: "15px",
              }}
              onClick={() => deleteCampus(campus.id)}
            >
              Delete Campus
            </button>

            <p>{campus.description}</p>
            <p>{campus.address}</p>
            <img
              style={{
                display: "block",
                margin: "20px",
                height: "500px",
                width: "500px",
                border: "2px solid #2d5f5d",
              }}
              src={campus.imageURL}
              alt="campus"
            ></img>
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
