import { Link } from "react-router-dom";

const StudentView = (props) => {
  return (
    <div>
      <Link to={'/students'}> 
        <button type="button"> Back </button>
      </Link>
      <div> Full Name: {props.student.firstname} {props.student.lastname} </div>
      <img src = {props.student.imageUrl} alt="Student Portrait" width = "150" height = "150" />
      <div> GPA: {props.student.gpa} </div>
      {props.student.campus == null 
        ? <div> This student belongs to no campus. </div>
        : <Link to={`/campus/${props.student.campusId}`}> {props.student.campus.name} </Link>
      }
      <div> Email : {props.student.email} </div>
    </div>
  );
}

export default StudentView;