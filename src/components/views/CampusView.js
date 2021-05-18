import { Link } from 'react-router-dom';

const CampusView = (props) => {
  const { campus } = props;
  //waiting for students array to be populated
  // if (campus.students === undefined){
  //   return <div>Loading...</div>
  // }
  return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.description}</p>
      <h3>All Students</h3>
      <ul>
        {campus.students.map((student) => {
          let name = student.firstname + ' ' + student.lastname;
          return (
            <Link to={`/student/${student.id}`}>
              <li key={student.id}>{name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default CampusView;
