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
          <label htmlFor= "firstname">Enter First Name: </label>
          <input type="text" id="firstname" name="firstname" />
          <label htmlFor = "lastname"> Enter Last Name: </label>
          <input type="text" id="lastname" name="lastname" />
          <button type="submit" value= "Add Student">Add Student </button>
        </form>
      </div>
      <div>
        {props.allStudents.map( (student) => (
          <div key = {student.id}>
            <div> {student.firstname} </div>
            <div> {student.lastname}  </div>
            <div> GPA: {student.gpa} </div>
            <img src = {student.imageUrl} alt="Student Portrait" width = "150" height = "150" />
            <Link to={`/student/${student.id}`} >
              <button type="button"> Show More Details</button>
            </Link>
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