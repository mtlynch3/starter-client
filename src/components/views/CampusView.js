import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const CampusView = (props) => {
  const { campus } = props;
  //waiting for students array to be populated
  // if (campus.students === undefined){
  //   return <div>Loading...</div>
  // }

  if (!campus.students.length) {
    return (
      <div>
        <h1>{campus.name}</h1>
        <p>{campus.description}</p>
        <p>Address: {campus.address}</p>
        <img src={campus.imageURL} alt="campus"></img>
        <h3>{campus.name} has no students</h3>

      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <button>
        <Link to="/campus/:id/addstudent">Add Student</Link>
      </button>
      <h1>{campus.name}</h1>
      <p>{campus.description}</p>
      <p>Address: {campus.address}</p>
      <img src={campus.imageURL} alt="campus"></img>
      <h3>{campus.name}'s Students</h3>
      <ul>
        {campus.students.map((student) => {
          let name = student.firstname + " " + student.lastname;
          return (
            <Link to={`/student/${student.id}`} key={student.id}>
              <li>{name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default CampusView;
