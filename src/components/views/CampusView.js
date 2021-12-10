

const CampusView = (props) => {
  const {campus} = props;
  return (
    <div>      
      <h1>{campus.name}</h1>
      <img src={campus.imageUrl} alt= ""/>
      <p> {campus.address} </p>
      <p>{campus.description}</p> 
      {campus.students.length !== 0 ?
      <div>
      <p> Students: </p> 
            <ul>
            {campus.students.map( student => {
              let name = student.firstname + " " + student.lastname;
              return (
                <li key={student.id}>{name}</li>
              );
            })}
            </ul>
            </div>
            :
            <p> There are no students currently at this campus </p> 
      }
    </div>
  );

};

export default CampusView;
