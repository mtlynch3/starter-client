import './style/Campus.css'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const CampusView = (props) => {
  const {campus} = props;
  //waiting for students array to be populated
  // if (campus.students === undefined){
  //   return <div>Loading...</div>
  // }
  return (
    <div>
      <div id = "details">
        <img class = "school" src={campus.imageUrl} alt="picture of college"/>
        <div id = "text">
          <h1>{campus.name}</h1>
          <p>{campus.address}</p>
          <p>{campus.description}</p>
            <Button variant="contained" color="primary">
              Edit
            </Button>
            <Link to={'/campuses'} >
              <Button variant="contained" color="primary" onclick={props.deleteCampus(campus.id) }>
                Delete
              </Button>
            </Link>
        </div>
      </div>
      <div id = "student">
        <h1> Students on Campus </h1>
        <ul>
        {campus.students.map( student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <li key={student.id}>{name}</li>
          );
        })}
        </ul>
      </div>
    </div>
  );

};

export default CampusView;
