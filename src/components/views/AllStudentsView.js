import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return <div>There are no students.</div>;
  }

  return (
    <div>
      <Navbar />
      <button>
        <Link to={"/addstudent"}>Add Student</Link>
      </button>
      <h1>All Students</h1>
      {props.allStudents.map((student) => (
        <div key={student.id}>
          <Link to={`/student/${student.id}`}>
            <h4>
              {student.firstname} {student.lastname}
            </h4>
          </Link>
        </div>
      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;
