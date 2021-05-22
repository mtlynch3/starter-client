import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Component, React } from React;
/*
- [ ] Write a component to display a single student with the following information:
- [] The student's full name, email, image, and gpa
- [ ] The name of their campus (or a helpful message if they don't have one)
- [ ] Display the appropriate student when the url matches `/students/:studentId`
- [ ] Clicking on a student from the all-students view should navigate to show that student in the single-student view

- [ ] Clicking on the name of a student in the single-campus view should navigate to show that student in the single-student view
- [ ] Clicking on the name of a campus in the single-student view should navigate to show that campus in the single-campus view
*/
class StudentView extends Component {

  constructor() {
    super(props);
    
  }

  render() {
    return (
      <div>
        {props.student.map( (student) => (
        <div key = {student.email}>
          <div> {student.image} </div>
          <div> {student.firstname}  </div>
          <div> {student.lastname} </div>
          <div> {student.gpa} </div>
          <div> CampusID: {student.campusId} </div>
        </div>
       ))}
      </div>
    );
  }
};


export default StudentView;