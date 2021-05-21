import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

const handleDelete = async (id) => {
  await axios
    .delete(`/api/students/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  window.location.replace(`/students`);
};

const StudentView = (props) => {
  const { student } = props;
  return (
    <div>
      <Navbar />
      <button>
        <Link
          to={{
            pathname: `/editstudent`,
            state: {
              Id: student.id,
              firstname: student.firstname,
              lastname: student.lastname,
              gpa: student.gpa,
              url: student.imageURL,
            },
          }}
        >
          Edit Student
        </Link>
      </button>
      <ul>
        <li>
          Name: {student.firstname} {student.lastname}
        </li>
        <li>
          {student.campus ? (
            <Link to={`/campus/${student.campus.id}`}>
              {student.campus.name}
            </Link>
          ) : (
            <h4>This student has no associated campus</h4>
          )}
        </li>
        <li>Email: {student.email}</li>
        <li>GPA: {student.gpa}</li>
        <li>
          <img src={`${student.imageURL}`} alt="student"></img>
        </li>
      </ul>
      <button onClick={() => handleDelete(student.id)}>Delete Student</button>
    </div>
  );
};

export default StudentView;
