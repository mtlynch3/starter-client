import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return <div>There are no campuses.
          <Link to={'newcampus'}>
      <button>Add new campus</button>
    </Link>
    </div>;

  }

  return (
    <div>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <p>{campus.description}</p>
        </div>
      ))}   
      <div>
      <Link to={`/newcampus`}>
          <button>Add Campus</button>
        </Link>
      </div>  
    </div>
         

  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;