const StudentView = (props) => {
  const {student} = props;
  //waiting for students array to be populated
  // if (campus.students === undefined){
  //   return <div>Loading...</div>
  // }
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <p>{student.email}</p>
      <p>{student.gpa}</p>
      <img src={student.imageUrl}/>



    </div>
  );

};

export default StudentView;
