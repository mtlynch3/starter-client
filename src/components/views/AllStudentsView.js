import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Header from "./Header.js"

const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return (
      <div>
        <h1>All Campus View</h1>
        <Header heading ='All Students' buttonLabel ='Add Student'/>
        <div>There are no students.</div>
      </div>
    );
  }

  return (
    <div>
      <Header heading ='All Students' buttonLabel ='Add Student'/>
      {props.allStudents.map((student) => (
        <div key={student.id}>
          <Link to={`/student/${student.id}`}>
            <h1>{student.firstname + " "+ student.lastname}</h1>
          </Link>
          <p>{student.gpa}</p>
          <p>{student.campus.name}</p>
          <p>{student.campus.address}</p>
        </div>
      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;
