import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './style/Student.css'
import Header from "./Header.js"

const StudentView = (props) => {
  const {student} = props;

  if(!student){
    return(
      <div>
        <Header heading ='All Students' buttonLabel ='Add Student'/>
        <p> There are no students registered in the database. </p>
      </div>
    )
  }

  //student with no campus
  if(!student.campus){
    return (
      <div>
      <div id = "details">
        <img className = "student" src={student.imageUrl} alt="student-pic"/>
          <div id = "text">
            <h1>{student.firstname + " " + student.lastname}</h1>
            <p>{student.email}</p>
            <p>{student.gpa}</p>

            <Button variant="contained" color="primary">
                Edit
            </Button>

            <Link to={'/students'} >
              <Button variant="contained" color="primary" onclick={props.deleteStudent(student.id)}>
                  Delete
              </Button>
            </Link>
          </div>
      </div>

      <div id = "campus">
        <h1> Campus </h1>
        <ul>
          <p> No campus found.  </p>
        </ul>
      </div>

      </div>
    );
  }

  //student with campus
  return (
    <div>
    <div id = "details">
      <img class = "school" src={student.imageUrl} alt="student-pic"/>
        <div id = "text">
          <h1>{student.firstname + " " + student.lastname}</h1>
          <p>{student.email}</p>
          <p>{student.gpa}</p>
            <Button variant="contained" color="primary">
              Edit
            </Button>
            <Link to={'/students'} >
              <Button variant="contained" color="primary" onclick={props.deleteStudent(student.id)}>
                Delete
              </Button>
            </Link>
        </div>
    </div>

    <div id = "campus">
      <h1> Campus </h1>
      <ul>
        <p> {student.campus.name} </p>
        <p> {student.campus.description} </p>
      </ul>
    </div>

    </div>

  );

};

export default StudentView;
