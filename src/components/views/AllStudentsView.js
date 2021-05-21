import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles.css"
const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return <div>There are no students registered in the database.</div>;
  }

  return (
    <div>
      <div>
        <form className = "addStudentForm" onSubmit = {props.addStudent}>
          <label htmlFor= "First Name">Enter First Name: </label>
          <input type="text" id="firstname" name="firstname" />
          <label htmlFor = "Last Name"> Enter Last Name: </label>
          <input type="text" id="lastname" name="lastname" />
          <button type="submit" value= "Add Student">Add Student </button>
        </form>
      </div>
      <div>
        {props.allStudents.map( (student) => (
          <div key = {student.id}>
            <div> {student.firstname} </div>
            <div> {student.lastname}  </div>
            <div> {student.createdAt} </div>
            <div> {student.updatedAt} </div>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;