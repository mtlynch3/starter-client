const StudentView = (props) => {
  //waiting for students array to be populated
  // if (campus.students === undefined){
  //   return <div>Loading...</div>
  // }
  return (
    <div>
      <h1>Student</h1>
      <p>{JSON.stringify(props)}</p>
      <ul>
        {/* {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <li key={student.id}>{name}</li>
        );
      })} */}
      </ul>
    </div>
  );
};

export default StudentView;
