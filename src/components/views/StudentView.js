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
    <div
      style={{
        backgroundColor: "#265077",
        height: "100%",
      }}
    >
      <Navbar />
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

        <img
          style={{
            display: "block",
            margin: "20px",
            height: "500px",
            width: "500px",
            border: "2px solid #2d5f5d",
          }}
          src={`${student.imageURL}`}
          alt="student"
        ></img>
      </ul>
      <button
        style={{
          display: "block",
          margin: "20px",
          backgroundColor: "#2d5f5d",
          borderRadius: "5px",
          border: "0px",
          padding: "15px",
        }}
        onClick={() => handleDelete(student.id)}
      >
        Delete Student
      </button>
    </div>
  );
};

export default StudentView;
