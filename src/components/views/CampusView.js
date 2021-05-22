<<<<<<< Updated upstream
=======
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NavBar from './NavBar'; 
>>>>>>> Stashed changes


const CampusView = (props) => {
  const {campus} = props;
  //waiting for students array to be populated
  // if (campus.students === undefined){
  //   return <div>Loading...</div>
  // }
  return (
<<<<<<< Updated upstream
    <div>      
=======
    <div>
      <NavBar />
>>>>>>> Stashed changes
      <h1>{campus.name}</h1>
      <p>{campus.description}</p>
      <ul>
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <li key={student.id}>{name}</li>
        );
      })}
      </ul>
    </div>
  );

};

export default CampusView;