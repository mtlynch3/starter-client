import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const CampusView = (props) => {
  const {campus} = props;
  //waiting for students array to be populated
  if (campus.students === undefined){
    return <div>Loading...</div>
  }
  return (
    <div>
      <h1>{campus.name}</h1>
      <img src={campus.imageUrl} alt="Campus"></img>
      <p>{campus.address}</p>
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