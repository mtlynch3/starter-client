import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return <div>There are no students.</div>;
  }

  return (
    <div
      style={{
        backgroundColor: "#265077",
        height: "100vh",
      }}
    >
      <Navbar />
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
        <Link to={"/addstudent"}>Add Student</Link>
      </button>
      <h1
        style={{
          display: "block",
          margin: "20px",
        }}
      >
        All Students
      </h1>
      {props.allStudents.map((student) => (
        <div
          style={{
            margin: "20px",
            border: "3px solid #2d5f5d",
            borderRadius: "10px",
            backgroundColor: "#022140",
            padding: "50px",
          }}
          key={student.id}
        >
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
