import { Link } from "react-router-dom";
/*
- [ ] Write a component to display a single student with the following information:
- [] Clicking on a student from the all-students view should navigate to show that student in the single-student view
- [ ] Clicking on the name of a student in the single-campus view should navigate to show that student in the single-student view
- [ ] Clicking on the name of a campus in the single-student view should navigate to show that campus in the single-campus view
*/

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