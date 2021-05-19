import { Link } from 'react-router-dom';

const StudentView = (props) => {
  const { student } = props;
  console.log(student);
  return (
    <div>
      <ul>
        <li>
          Name: {student.firstname} {student.lastname}
        </li>
        <li>
          {student.campus ? (
            <Link to={`/campus/${student.campus.id}`}>
              {student.campus.name}
            </Link>
          ) : (
            <h4>This student has no associated campus</h4>
          )}
        </li>
        <li>Email: {student.email}</li>
        <li>GPA: {student.gpa}</li>
        <li>
          <img src={`${student.imageURL}`} alt='student'></img>
        </li>
      </ul>
    </div>
  );
};

export default StudentView;
