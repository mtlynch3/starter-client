const StudentView = (props) => {
  const { student } = props;

  return (
    <div>
      <ul>
        <li>
          Name: {student.firstname} {student.lastname}
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
