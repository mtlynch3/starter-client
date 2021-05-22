
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NavBar from './NavBar'; 

import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const CampusView = (props) => {

  const {campus} = props;
  let hasStudents = campus.students.length > 0;
  //waiting for students array to be populated
  // if (campus.students === undefined){
  //   return <div>Loading...</div>
  // }
  //no students


  return (

    <div>      
    <div>
      <NavBar />

    <div>

      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      <ul>

      {
          (!hasStudents) ? <li>There are zero students registered here.</li>:(
            campus.students.map( student => {
              let name = student.firstname + " " + student.lastname;
              console.log(campus.students)
              console.log("students")
              return (
                <div key={student.id}>
                  <Link to={`/student/${student.id}`}>
                    <li>{name}</li>
                  </Link>
                </div>
              );
            }))
      }
      </ul>
    </div>
  );

};

export default CampusView;
