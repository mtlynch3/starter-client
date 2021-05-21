import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return <div>There are no students registered in the database.</div>;
  }

  return (
    <div>
      {props.allStudents.map( (student) => (
        <div key = {student.id}>
          <div> {student.firstname} </div>
          <div> {student.lastname}  </div>
          <div> {student.createdAt} </div>
          <div> {student.updatedAt} </div>
        </div>
      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;