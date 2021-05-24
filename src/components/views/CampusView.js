import { Link } from "react-router-dom";


const CampusView = (props) => {
  const {campus} = props;
  //waiting for students array to be populated
  // if (campus.students === undefined){
  //   return <div>Loading...</div>
  // }
  return (
    <div>
      <Link className = "links" to = "/">Home</Link>
      <Link className = "links" to = "/campuses">All Campuses</Link>
      <center><h1>{campus.name}</h1></center>
      <center><h2>{campus.address}</h2></center>
      <center><h2>Number of students: {campus.students.length}</h2></center>
      <p>{campus.description}</p>
      <h2>List of Students</h2>
      <ul>
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
         <Link className = "links" to = {`/student/${student.id}`}><li key={student.id}>{name}</li></Link>
        );
      })}
      </ul>
    </div>
  );

};

export default CampusView;