import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const deleteCampus = async (id) => {
  await axios
    .delete(`/api/campuses/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  window.location.replace(`/campuses`);
};

const CampusView = (props) => {
  const { campus } = props;
  //waiting for students array to be populated
  // if (campus.students === undefined){
  //   return <div>Loading...</div>
  // }

  if (!campus.students.length) {
    return (
      <div>
        <Navbar />
        <button>
          <Link
            to={{
              pathname: `/campus/${campus.id}/editstudent`,
              state: {
                campusId: campus.id,
                name: campus.name,
                location: campus.address,
                url: campus.imageURL,
                description: campus.description,
              },
            }}
          >
            Edit Campus
          </Link>
        </button>
        <h1>{campus.name}</h1>
        <p>{campus.description}</p>
        <p>Address: {campus.address}</p>
        <img src={campus.imageURL} alt="campus"></img>
        <button>
          <Link to={{ pathname: `/campus/${campus.id}/addstudent` }}>
            Add Student
          </Link>
        </button>
        <h3>{campus.name} has no students</h3>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
      <h1>{campus.name}</h1>
      <p>{campus.description}</p>
      <p>Address: {campus.address}</p>
      <img src={campus.imageURL} alt="campus"></img>
      <h3>{campus.name}'s Students</h3>
      <button>
        <Link to={{ pathname: `/campus/${campus.id}/addstudent` }}>
          Add Student
        </Link>
      </button>
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
