import { Link } from "react-router-dom";
import HomePageView from '../views/HomePageView';
const CampusView = (props) => {
  const {campus} = props;
  //waiting for students array to be populated
  // if (campus.students === undefined){
  //   return <div>Loading...</div>
  // }
  return (
    <div>
    <HomePageView/>
    <h1>{campus.name}</h1>
      <img src={campus.imageUrl} alt="Campus pic" width="200" height="200" />
      <p>Address: {campus.address}</p>
      <p>Description: {campus.description}</p>

      <h2>Students who attend {campus.name}:</h2>
      <ul>
      
      {!campus.students.length 
        ? <div>There are no students in this campus</div>
        : campus.students.map( student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <li key={student.id}>
              <Link to={`/student/${student.id}`}>
                  <p>{name}</p>
              </Link>
              <img src={student.imageUrl} alt="Campus pic" width="200" height="200" />
              </li>
          );
      })}
      </ul>
    </div>
  );

};

export default CampusView;