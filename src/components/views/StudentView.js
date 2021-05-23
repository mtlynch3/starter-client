const StudentView = (props) => {
  const {student} = props;
  //waiting for students array to be populated
  // if (campus.students === undefined){
  //   return <div>Loading...</div>
  // }
  return (
    <div>
      <h1>{student.name}</h1>
      <p>{student.gpa}</p>

    </div>
  );

};

export default StudentView;
